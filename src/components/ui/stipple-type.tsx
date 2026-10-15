import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useSyncExternalStore,
} from 'react'
import * as THREE from 'three'
import { cn } from '../../lib/utils'

export interface StippleTypeRef {
  drop: (x?: number, y?: number, size?: number) => void
  stir: (from: [number, number], to: [number, number], duration?: number) => void
  replay: () => void
}

export interface StippleTypeProps {
  text?: string
  singleLine?: boolean
  fontFamily?: string
  fontWeight?: number
  fontSize?: number
  letterSpacing?: number
  lineHeight?: number
  colors?: [string, string]
  baseColor?: string
  bandSize?: number
  waviness?: number
  grain?: number
  grainSize?: number
  dotSize?: number
  current?: number
  interactive?: boolean
  stirStrength?: number
  stirRadius?: number
  dropInk?: boolean
  dropSize?: number
  viscosity?: number
  memory?: number
  intro?: boolean
  introDuration?: number
  paused?: boolean
  quality?: number
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

interface InkDrop {
  x: number
  y: number
  radius: number
  target: number
  age: number
  hue: number
}

interface StirImpulse {
  x: number
  y: number
  fx: number
  fy: number
  radius: number
}

interface StirSequence {
  from: [number, number]
  to: [number, number]
  duration: number
  elapsed: number
}

const VERTEX_SHADER = `
out vec2 vPos;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vPos = world.xy;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`

const FRAGMENT_SHADER = `
precision highp float;
uniform sampler2D uMask;
uniform vec4 uMaskRect;
uniform sampler2D uMap;
uniform vec4 uMapRect;
uniform ivec2 uMapSize;
uniform sampler2D uStir;
uniform vec4 uStirRect;
uniform ivec2 uStirSize;
uniform vec3 uInkA;
uniform vec3 uInkB;
uniform vec3 uInkC;
uniform vec3 uBase;
uniform float uBand;
uniform float uWave;
uniform float uGrain;
uniform float uGrainSize;
uniform float uDotSize;
uniform vec2 uDrift;
uniform float uIntro;
in vec2 vPos;
out vec4 fragColor;

vec3 labToLinear(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return max(vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  ), 0.0);
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash2(i) - 0.5, f);
  float b = dot(hash2(i + vec2(1.0, 0.0)) - 0.5, f - vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0.0, 1.0)) - 0.5, f - vec2(0.0, 1.0));
  float d = dot(hash2(i + vec2(1.0, 1.0)) - 0.5, f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0;
}

float fbm(vec2 p) {
  return noise(p) * 0.6 + noise(p * 2.03 + vec2(3.1, 1.7)) * 0.3 + noise(p * 4.07 - vec2(1.7, 4.3)) * 0.1;
}

vec3 marble(vec2 h) {
  vec2 q = h / uBand;
  vec2 warp = vec2(fbm(q * 0.42 + vec2(1.7, 9.2)), fbm(q * 0.42 + vec2(8.3, 2.8)));
  float s = q.y * 0.8 + uWave * 1.35 * fbm(q * 0.55 + warp * 1.7) + 0.35 * sin(q.x * 0.31 + warp.x * 2.0);
  float f1 = abs(fract(s) - 0.5);
  float veinA = 1.0 - smoothstep(0.035, 0.12, f1);
  float f2 = abs(fract(s + 0.5) - 0.5);
  float veinB = 1.0 - smoothstep(0.015, 0.065, f2);
  float cloud = 0.5 + 0.5 * fbm(q * 0.3 + warp + 5.0);
  vec3 col = mix(uInkC, mix(uInkC, uInkA, 0.4), smoothstep(0.45, 0.85, cloud));
  col = mix(col, uInkA, veinA);
  return mix(col, uInkB, veinB);
}

vec3 dye(float hue) {
  return hue < 0.33 ? uInkB : hue < 0.66 ? uInkC : uInkA;
}

vec4 mapAt(vec2 p) {
  vec2 g = vec2((p.x - uMapRect.x) / uMapRect.z, (uMapRect.y - p.y) / uMapRect.z) - 0.5;
  ivec2 i = ivec2(floor(g));
  vec2 f = g - vec2(i);
  ivec2 top = uMapSize - 1;
  vec4 a = texelFetch(uMap, clamp(i, ivec2(0), top), 0);
  vec4 b = texelFetch(uMap, clamp(i + ivec2(1, 0), ivec2(0), top), 0);
  vec4 c = texelFetch(uMap, clamp(i + ivec2(0, 1), ivec2(0), top), 0);
  vec4 d = texelFetch(uMap, clamp(i + ivec2(1, 1), ivec2(0), top), 0);
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float stirAt(vec2 p) {
  vec2 g = vec2((p.x - uStirRect.x) / uStirRect.z, (uStirRect.y - p.y) / uStirRect.z) - 0.5;
  ivec2 i = ivec2(floor(g));
  vec2 f = g - vec2(i);
  ivec2 top = uStirSize - 1;
  float a = texelFetch(uStir, clamp(i, ivec2(0), top), 0).r;
  float b = texelFetch(uStir, clamp(i + ivec2(1, 0), ivec2(0), top), 0).r;
  float c = texelFetch(uStir, clamp(i + ivec2(0, 1), ivec2(0), top), 0).r;
  float d = texelFetch(uStir, clamp(i + ivec2(1, 1), ivec2(0), top), 0).r;
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

vec3 inkAt(vec2 p) {
  vec4 field = mapAt(p);
  vec2 h = vec2(p.x + field.x, p.y - field.y) + uDrift;
  float amount = clamp(field.z, 0.0, 1.0);
  return mix(marble(h), dye(field.w / max(field.z, 1e-4)), amount);
}

void main() {
  vec2 mu = vec2((vPos.x - uMaskRect.x) / uMaskRect.z, (uMaskRect.y - vPos.y) / uMaskRect.w);
  float alpha = smoothstep(0.25, 0.75, texture(uMask, mu).a);
  if (alpha < 0.003) discard;
  vec2 g = vPos / uGrainSize;
  float aa = max(length(fwidth(g)) * 0.75, 1e-3);
  vec2 cell = floor(g);
  float best = 1e9;
  vec2 centre = g;
  vec2 seed = vec2(0.0);
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 c = cell + vec2(float(i), float(j));
      vec2 r = hash2(c);
      vec2 p = c + 0.5 + (r - 0.5) * 0.76;
      float d = length(g - p);
      if (d < best) {
        best = d;
        centre = p;
        seed = r;
      }
    }
  }
  vec2 dot = centre * uGrainSize;
  float across = clamp((dot.x - uMaskRect.x) / uMaskRect.z, 0.0, 1.0);
  float rank = 0.4 * seed.x + 0.6 * across;
  float reveal = smoothstep(rank, rank + 0.1, uIntro * 1.45);
  float settle = smoothstep(rank + 0.16, rank + 0.45, uIntro * 1.45);
  float stirred = clamp(stirAt(dot), 0.0, 1.0);
  float merged = settle * (1.0 - stirred) * (1.0 - uGrain);
  float radius = mix((0.26 + 0.12 * seed.y) * uDotSize, 1.25, merged);
  float cover = (1.0 - smoothstep(radius - aa, radius + aa, best)) * reveal;
  vec3 ink = inkAt(mix(dot, vPos, merged));
  ink.x *= 0.975 + 0.05 * seed.y * (1.0 - merged * 0.6);
  vec3 lab = mix(uBase, ink, cover);
  float fill = smoothstep(0.25, 0.8, uIntro);
  float a = alpha * max(fill, cover);
  fragColor = vec4(encode(labToLinear(lab)) * a, a);
}
`

const SIM_DT = 1 / 60

const subscribeReducedMotion = (listener: () => void) => {
  if (typeof window === 'undefined') return () => {}
  const m = window.matchMedia('(prefers-reduced-motion: reduce)')
  m.addEventListener('change', listener)
  return () => m.removeEventListener('change', listener)
}

const getReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val))

let sharedCtx: CanvasRenderingContext2D | null = null
const parseColor = (colorStr: string, fallback: [number, number, number]): [number, number, number] => {
  if (typeof document === 'undefined') return fallback
  if (!sharedCtx) {
    const c = document.createElement('canvas')
    sharedCtx = c.getContext('2d')
  }
  if (!sharedCtx) return fallback
  sharedCtx.fillStyle = '#010203'
  sharedCtx.fillStyle = colorStr
  const style = String(sharedCtx.fillStyle)
  if (style === '#010203' && colorStr.trim().toLowerCase() !== '#010203') return fallback
  if (style.startsWith('#')) {
    const hex = style.slice(1)
    return [
      parseInt(hex.slice(0, 2), 16) / 255,
      parseInt(hex.slice(2, 4), 16) / 255,
      parseInt(hex.slice(4, 6), 16) / 255,
    ]
  }
  const match = style.match(/[\d.]+/g)
  if (!match || match.length < 3) return fallback
  return [Number(match[0]) / 255, Number(match[1]) / 255, Number(match[2]) / 255]
}

const srgbToLinear = (e: number) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4))

const rgbToOklab = ([r, g, b]: [number, number, number]): [number, number, number] => {
  const lR = srgbToLinear(r)
  const lG = srgbToLinear(g)
  const lB = srgbToLinear(b)
  const l = Math.cbrt(0.4122214708 * lR + 0.5363325363 * lG + 0.0514459929 * lB)
  const m = Math.cbrt(0.2119034982 * lR + 0.6806995451 * lG + 0.1073969566 * lB)
  const s = Math.cbrt(0.0883024619 * lR + 0.2817188376 * lG + 0.6299787005 * lB)
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ]
}

export const StippleType = forwardRef<StippleTypeRef, StippleTypeProps>(function StippleType(
  {
    text = 'CLOUDSWAN SOLUTION',
    singleLine = true,
    fontFamily = '"Montserrat", system-ui, -apple-system, sans-serif',
    fontWeight = 800,
    fontSize = 124,
    letterSpacing = -0.02,
    lineHeight = 1,
    colors = ['#2563EB', '#FE5A2C'],
    baseColor = '#F8FAFC',
    bandSize = 0.45,
    waviness = 1.2,
    grain = 0,
    grainSize = 2,
    dotSize = 1,
    current = 1,
    interactive = true,
    stirStrength = 1.2,
    stirRadius = 0.5,
    dropInk = true,
    dropSize = 0.5,
    viscosity = 0.5,
    memory = 8,
    intro = true,
    introDuration = 1.8,
    paused = false,
    quality = 1,
    className,
    style,
    children,
  },
  forwardedRef
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<any>(null)
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)

  const configRef = useRef({
    text,
    singleLine,
    fontFamily,
    fontWeight,
    fontSize,
    letterSpacing,
    lineHeight,
    colors,
    baseColor,
    bandSize,
    waviness,
    grain,
    grainSize,
    dotSize,
    current,
    interactive,
    stirStrength,
    stirRadius,
    dropInk,
    dropSize,
    viscosity,
    memory,
    intro,
    introDuration,
    paused,
    quality,
    reduced: reducedMotion,
  })

  useEffect(() => {
    configRef.current = {
      text,
      singleLine,
      fontFamily,
      fontWeight,
      fontSize,
      letterSpacing,
      lineHeight,
      colors,
      baseColor,
      bandSize,
      waviness,
      grain,
      grainSize,
      dotSize,
      current,
      interactive,
      stirStrength,
      stirRadius,
      dropInk,
      dropSize,
      viscosity,
      memory,
      intro,
      introDuration,
      paused,
      quality,
      reduced: reducedMotion,
    }
    instanceRef.current?.sync()
  })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const initInstance = (
      el: HTMLDivElement,
      config: React.MutableRefObject<typeof configRef.current>
    ) => {
      let renderer: THREE.WebGLRenderer
      const canvas = document.createElement('canvas')
      canvas.setAttribute('aria-hidden', 'true')
      canvas.style.position = 'absolute'
      canvas.style.inset = '0'
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.display = 'block'
      canvas.style.pointerEvents = 'none'
      el.prepend(canvas)

      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          premultipliedAlpha: true,
          antialias: false,
        })
      } catch {
        canvas.remove()
        return null
      }

      if (!renderer.capabilities.isWebGL2) {
        renderer.dispose()
        canvas.remove()
        return null
      }

      renderer.setClearColor(0, 0)

      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)
      const scene = new THREE.Scene()
      const textCanvas = document.createElement('canvas')
      const maskTexture = new THREE.CanvasTexture(textCanvas)
      maskTexture.flipY = false
      maskTexture.minFilter = THREE.LinearFilter
      maskTexture.magFilter = THREE.LinearFilter
      maskTexture.generateMipmaps = false
      maskTexture.colorSpace = THREE.SRGBColorSpace

      const createDataTex = (
        data: Float32Array,
        width: number,
        height: number,
        format: THREE.PixelFormat
      ) => {
        const tex = new THREE.DataTexture(data, width, height, format, THREE.FloatType)
        tex.minFilter = THREE.LinearFilter
        tex.magFilter = THREE.LinearFilter
        tex.flipY = false
        tex.needsUpdate = true
        return tex
      }

      let mapTexture = createDataTex(new Float32Array(4), 1, 1, THREE.RGBAFormat)
      let stirTexture = createDataTex(new Float32Array(1), 1, 1, THREE.RedFormat)

      const uniforms = {
        uMask: { value: maskTexture },
        uMaskRect: { value: new THREE.Vector4(0, 0, 1, 1) },
        uMap: { value: mapTexture },
        uMapRect: { value: new THREE.Vector4(0, 0, 1, 0) },
        uMapSize: { value: new THREE.Vector2(1, 1) },
        uStir: { value: stirTexture },
        uStirRect: { value: new THREE.Vector4(0, 0, 1, 0) },
        uStirSize: { value: new THREE.Vector2(1, 1) },
        uInkA: { value: new THREE.Vector3() },
        uInkB: { value: new THREE.Vector3() },
        uInkC: { value: new THREE.Vector3() },
        uBase: { value: new THREE.Vector3() },
        uBand: { value: 40 },
        uWave: { value: 0.7 },
        uGrain: { value: 0.1 },
        uGrainSize: { value: 2 },
        uDotSize: { value: 1 },
        uDrift: { value: new THREE.Vector2() },
        uIntro: { value: 1 },
      }

      const material = new THREE.ShaderMaterial({
        glslVersion: THREE.GLSL3,
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        uniforms,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        premultipliedAlpha: true,
        blending: THREE.CustomBlending,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
      })

      const planeGeom = new THREE.PlaneGeometry(1, 1)
      const mesh = new THREE.Mesh(planeGeom, material)
      mesh.frustumCulled = false
      scene.add(mesh)

      const bounds = { x0: 0, y0: 0, x1: 0, y1: 0, size: 100 }
      const velocityGrid = {
        nx: 2,
        ny: 2,
        cell: 8,
        u: new Float32Array(4),
        v: new Float32Array(4),
        u0: new Float32Array(4),
        v0: new Float32Array(4),
        p: new Float32Array(4),
        div: new Float32Array(4),
        stir: new Float32Array(4),
        energy: 0,
        stirred: false,
      }
      const advectionGrid = {
        nx: 2,
        ny: 2,
        cell: 4,
        front: new Float32Array(16),
        back: new Float32Array(16),
        busy: false,
      }

      const stirImpulses: StirImpulse[] = []
      const inkDrops: InkDrop[] = []
      const stirSequences: StirSequence[] = []

      const pointerState = { x: 0, y: 0, t: 0, placed: false, id: -1, moved: 0 }
      let dropCounter = 0
      let prevLayoutKey = ''
      let prevTextKey = ''
      let introTime = 1e9
      let canvasWidth = 1
      let canvasHeight = 1
      let dpr = 1
      let driftTime = 0
      let accumulatedTime = 0
      let rafId = 0
      let lastTime = 0
      let isVisible = true
      let isDestroyed = false
      let isInitialized = false
      let frameCount = 0
      const loadedFonts = new Set<string>()

      const getFontString = (size: number) => {
        const cur = config.current
        const fam = cur.fontFamily || getComputedStyle(el).fontFamily
        return `${clamp(Math.round(cur.fontWeight), 100, 900)} ${size}px ${fam}`
      }

      const layoutText = () => {
        const cur = config.current
        const key = [
          cur.text,
          cur.singleLine ? '1' : '0',
          cur.fontFamily,
          cur.fontWeight,
          cur.fontSize,
          cur.letterSpacing,
          cur.lineHeight,
          Math.round(canvasWidth),
          Math.round(canvasHeight),
          dpr.toFixed(2),
          cur.fontFamily ? '' : getComputedStyle(el).fontFamily,
        ].join('|')

        if (key === prevLayoutKey) return
        prevLayoutKey = key

        const ctx = textCanvas.getContext('2d')
        if (!ctx) return

        const testFont = getFontString(16)
        if (document.fonts?.load && !loadedFonts.has(testFont)) {
          loadedFonts.add(testFont)
          document.fonts
            .load(testFont)
            .then((loaded) => {
              if (!isDestroyed && loaded.length) {
                prevLayoutKey = ''
                if (isInitialized) renderFrame()
              }
            })
            .catch(() => {})
        }

        const words = cur.text.split(/\s+/).filter(Boolean)
        const lHeight = clamp(cur.lineHeight, 0.7, 2)
        const lSpacing = clamp(cur.letterSpacing, -0.2, 1)
        let curFontSize = clamp(cur.fontSize, 12, 600)

        const measureLineWidth = (lineStr: string) => {
          ctx.font = getFontString(curFontSize)
          ;(ctx as any).letterSpacing = `${lSpacing * curFontSize}px`
          return ctx.measureText(lineStr).width
        }

        let lines: string[] = []
        if (cur.singleLine) {
          const fullText = words.join(' ')
          for (let iter = 0; iter < 50; iter++) {
            const w = measureLineWidth(fullText)
            if (w <= 0.92 * canvasWidth && curFontSize * lHeight <= 0.8 * canvasHeight) {
              break
            }
            curFontSize *= 0.94
          }
          lines = [fullText]
        } else {
          for (let iter = 0; iter < 40; iter++) {
            lines = []
            let curLine = ''
            let fits = true
            for (const w of words) {
              if (measureLineWidth(w) > 0.8 * canvasWidth) {
                fits = false
                break
              }
              const testLine = curLine ? `${curLine} ${w}` : w
              if (curLine && measureLineWidth(testLine) > 0.8 * canvasWidth) {
                lines.push(curLine)
                curLine = w
              } else {
                curLine = testLine
              }
            }
            if (curLine) lines.push(curLine)
            if (fits && lines.length * curFontSize * lHeight <= 0.7 * canvasHeight) break
            curFontSize *= 0.94
          }
        }

        let maxW = 0
        lines.forEach((l) => {
          maxW = Math.max(maxW, measureLineWidth(l))
        })

        const totalH = Math.max(1, lines.length) * curFontSize * lHeight
        const pad = 0.2 * curFontSize
        bounds.size = curFontSize
        bounds.x0 = -maxW / 2 - pad
        bounds.x1 = maxW / 2 + pad
        bounds.y0 = -totalH / 2 - pad
        bounds.y1 = totalH / 2 + pad

        const wSpan = bounds.x1 - bounds.x0
        const hSpan = bounds.y1 - bounds.y0
        const scale = Math.min(1.25 * dpr, 3)

        textCanvas.width = Math.max(1, Math.ceil(wSpan * scale))
        textCanvas.height = Math.max(1, Math.ceil(hSpan * scale))
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, textCanvas.width, textCanvas.height)
        ctx.setTransform(scale, 0, 0, scale, 0, 0)
        ctx.font = getFontString(curFontSize)
        ;(ctx as any).letterSpacing = `${lSpacing * curFontSize}px`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = '#fff'

        lines.forEach((l, idx) => {
          const yOff = ((lines.length - 1) / 2 - idx) * curFontSize * lHeight
          ctx.fillText(l, -bounds.x0 + (lSpacing * curFontSize) / 2, bounds.y1 - yOff)
        })

        maskTexture.dispose()
        maskTexture.needsUpdate = true
        uniforms.uMaskRect.value.set(bounds.x0, bounds.y1, wSpan, hSpan)
        mesh.scale.set(wSpan, hSpan, 1)
        mesh.position.set((bounds.x0 + bounds.x1) / 2, (bounds.y0 + bounds.y1) / 2, 0)

        // Sizing fluid simulation
        let cellA = clamp(0.08 * bounds.size, 6, 16)
        while ((wSpan / cellA) * (hSpan / cellA) > 3200) {
          cellA *= 1.08
        }
        velocityGrid.cell = cellA
        velocityGrid.nx = Math.max(4, Math.ceil(wSpan / cellA))
        velocityGrid.ny = Math.max(4, Math.ceil(hSpan / cellA))
        const nA = velocityGrid.nx * velocityGrid.ny
        velocityGrid.u = new Float32Array(nA)
        velocityGrid.v = new Float32Array(nA)
        velocityGrid.u0 = new Float32Array(nA)
        velocityGrid.v0 = new Float32Array(nA)
        velocityGrid.p = new Float32Array(nA)
        velocityGrid.div = new Float32Array(nA)
        velocityGrid.stir = new Float32Array(nA)
        velocityGrid.energy = 0
        velocityGrid.stirred = false

        stirTexture.dispose()
        stirTexture = createDataTex(
          velocityGrid.stir,
          velocityGrid.nx,
          velocityGrid.ny,
          THREE.RedFormat
        )
        uniforms.uStir.value = stirTexture
        uniforms.uStirRect.value.set(bounds.x0, bounds.y1, cellA, 0)
        uniforms.uStirSize.value.set(velocityGrid.nx, velocityGrid.ny)

        let cellB = clamp(0.03 * bounds.size, 2.5, 7)
        while ((wSpan / cellB) * (hSpan / cellB) > 22000) {
          cellB *= 1.08
        }
        advectionGrid.cell = cellB
        advectionGrid.nx = Math.max(4, Math.ceil(wSpan / cellB))
        advectionGrid.ny = Math.max(4, Math.ceil(hSpan / cellB))
        advectionGrid.front = new Float32Array(advectionGrid.nx * advectionGrid.ny * 4)
        advectionGrid.back = new Float32Array(advectionGrid.nx * advectionGrid.ny * 4)
        advectionGrid.busy = false

        mapTexture.dispose()
        mapTexture = createDataTex(
          advectionGrid.front,
          advectionGrid.nx,
          advectionGrid.ny,
          THREE.RGBAFormat
        )
        uniforms.uMap.value = mapTexture
        uniforms.uMapRect.value.set(bounds.x0, bounds.y1, cellB, 0)
        uniforms.uMapSize.value.set(advectionGrid.nx, advectionGrid.ny)

        stirImpulses.length = 0
        inkDrops.length = 0

        const textKey = [
          cur.text,
          cur.fontFamily,
          cur.fontWeight,
          cur.fontSize,
          cur.letterSpacing,
          cur.lineHeight,
        ].join('|')
        if (textKey !== prevTextKey) {
          prevTextKey = textKey
          introTime = !cur.intro || cur.reduced || cur.paused ? 1e9 : 0
        }
      }

      const bilinearSample = (
        arr: Float32Array,
        nx: number,
        ny: number,
        x: number,
        y: number
      ): number => {
        const cX = clamp(x, 0, nx - 1.001)
        const cY = clamp(y, 0, ny - 1.001)
        const iX = Math.floor(cX)
        const iY = Math.floor(cY)
        const fX = cX - iX
        const fY = cY - iY
        const idx = iY * nx + iX
        const v0 = arr[idx] + (arr[idx + 1] - arr[idx]) * fX
        const v1 = arr[idx + nx] + (arr[idx + nx + 1] - arr[idx + nx]) * fX
        return v0 + (v1 - v0) * fY
      }

      const sampleVec4 = (arr: Float32Array, x: number, y: number, out: number[]) => {
        const { nx, ny } = advectionGrid
        const cX = clamp(x, 0, nx - 1.001)
        const cY = clamp(y, 0, ny - 1.001)
        const iX = Math.floor(cX)
        const iY = Math.floor(cY)
        const fX = cX - iX
        const fY = cY - iY
        const base = (iY * nx + iX) * 4
        const right = base + 4
        const down = base + 4 * nx
        const downRight = down + 4
        for (let c = 0; c < 4; c++) {
          const topVal = arr[base + c] + (arr[right + c] - arr[base + c]) * fX
          const botVal = arr[down + c] + (arr[downRight + c] - arr[down + c]) * fX
          out[c] = topVal + (botVal - topVal) * fY
        }
      }

      const stepVelocity = (dt: number) => {
        const cur = config.current
        const { nx, ny, cell, u, v, u0, v0, p, div, stir } = velocityGrid

        for (const imp of stirImpulses) {
          const rInCells = imp.radius / cell
          const gX = imp.x / cell - 0.5
          const gY = imp.y / cell - 0.5
          const span = Math.ceil(2 * rInCells)
          const yMin = Math.max(0, Math.floor(gY - span))
          const yMax = Math.min(ny - 1, Math.ceil(gY + span))
          const xMin = Math.max(0, Math.floor(gX - span))
          const xMax = Math.min(nx - 1, Math.ceil(gX + span))
          for (let j = yMin; j <= yMax; j++) {
            for (let i = xMin; i <= xMax; i++) {
              const dX = i - gX
              const dY = j - gY
              const distSq = dX * dX + dY * dY
              const decay = Math.exp(-distSq / (rInCells * rInCells))
              if (decay >= 0.01) {
                const idx = j * nx + i
                u[idx] += imp.fx * decay
                v[idx] += imp.fy * decay
              }
            }
          }
        }
        stirImpulses.length = 0
        u0.set(u)
        v0.set(v)

        const scale = dt / cell
        for (let j = 0; j < ny; j++) {
          for (let i = 0; i < nx; i++) {
            const idx = j * nx + i
            const prevX = i - u0[idx] * scale
            const prevY = j - v0[idx] * scale
            u[idx] = bilinearSample(u0, nx, ny, prevX, prevY)
            v[idx] = bilinearSample(v0, nx, ny, prevX, prevY)
          }
        }

        const damping = Math.exp(-dt / (0.3 + 1.7 * (1 - clamp(cur.viscosity, 0, 1))))
        const totalCells = nx * ny
        for (let i = 0; i < totalCells; i++) {
          u[i] *= damping
          v[i] *= damping
        }

        for (let i = 0; i < nx; i++) {
          v[i] = 0
          v[(ny - 1) * nx + i] = 0
        }
        for (let j = 0; j < ny; j++) {
          u[j * nx] = 0
          u[j * nx + nx - 1] = 0
        }

        for (let j = 0; j < ny; j++) {
          for (let i = 0; i < nx; i++) {
            const idx = j * nx + i
            const left = i > 0 ? u[idx - 1] : 0
            const right = i < nx - 1 ? u[idx + 1] : 0
            const top = j > 0 ? v[idx - nx] : 0
            const bot = j < ny - 1 ? v[idx + nx] : 0
            div[idx] = (right - left + (bot - top)) * 0.5
            p[idx] = 0
          }
        }

        for (let it = 0; it < 70; it++) {
          for (let rb = 0; rb < 2; rb++) {
            for (let j = 0; j < ny; j++) {
              for (let i = (j + rb) & 1; i < nx; i += 2) {
                const idx = j * nx + i
                let sumNeighbors = 0
                let count = 0
                if (i > 0) {
                  sumNeighbors += p[idx - 1]
                  count++
                }
                if (i < nx - 1) {
                  sumNeighbors += p[idx + 1]
                  count++
                }
                if (j > 0) {
                  sumNeighbors += p[idx - nx]
                  count++
                }
                if (j < ny - 1) {
                  sumNeighbors += p[idx + nx]
                  count++
                }
                p[idx] += 1.86 * ((sumNeighbors - div[idx]) / count - p[idx])
              }
            }
          }
        }

        let maxEnergy = 0
        const stirDamp = Math.exp(-dt / 0.45)
        let hasStir = false
        for (let j = 0; j < ny; j++) {
          for (let i = 0; i < nx; i++) {
            const idx = j * nx + i
            const left = i > 0 ? p[idx - 1] : p[idx]
            const right = i < nx - 1 ? p[idx + 1] : p[idx]
            const top = j > 0 ? p[idx - nx] : p[idx]
            const bot = j < ny - 1 ? p[idx + nx] : p[idx]
            u[idx] -= (right - left) * 0.5
            v[idx] -= (bot - top) * 0.5

            const speed = Math.abs(u[idx]) + Math.abs(v[idx])
            maxEnergy = Math.max(maxEnergy, speed)
            const stirVal = speed > 120 ? Math.min(1, (speed - 120) / 520) : 0
            const newStir = Math.max(stir[idx] * stirDamp, stirVal)
            stir[idx] = newStir < 0.004 ? 0 : newStir
            if (stir[idx] > 0) hasStir = true
          }
        }

        if (maxEnergy < 3) {
          u.fill(0)
          v.fill(0)
          maxEnergy = 0
        }
        velocityGrid.energy = maxEnergy
        velocityGrid.stirred = hasStir
        stirTexture.needsUpdate = true
      }

      const decayStir = (dt: number) => {
        const { stir } = velocityGrid
        const factor = Math.exp(-dt / 0.45)
        let hasStir = false
        for (let i = 0; i < stir.length; i++) {
          const val = stir[i] * factor
          stir[i] = val < 0.004 ? 0 : val
          if (stir[i] > 0) hasStir = true
        }
        velocityGrid.stirred = hasStir
        stirTexture.needsUpdate = true
      }

      const stepAdvection = (dt: number) => {
        const cur = config.current
        const { nx, ny, cell } = advectionGrid
        const front = advectionGrid.front
        const back = advectionGrid.back
        const memoryCoeff =
          1 -
          (1 - Math.exp((-3 * dt) / clamp(cur.memory, 0.5, 120))) *
            Math.exp(-velocityGrid.energy / 500)
        const hasEnergy = velocityGrid.energy > 0
        const tmp = [0, 0, 0, 0]
        const ratio = cell / velocityGrid.cell
        let isBusy = false

        for (let j = 0; j < ny; j++) {
          for (let i = 0; i < nx; i++) {
            const idx = (j * nx + i) * 4
            let velU = 0
            let velV = 0
            if (hasEnergy) {
              const pX = (i + 0.5) * ratio - 0.5
              const pY = (j + 0.5) * ratio - 0.5
              velU = bilinearSample(velocityGrid.u, velocityGrid.nx, velocityGrid.ny, pX, pY)
              velV = bilinearSample(velocityGrid.v, velocityGrid.nx, velocityGrid.ny, pX, pY)
            }
            if (velU !== 0 || velV !== 0) {
              sampleVec4(front, i - (velU * dt) / cell, j - (velV * dt) / cell, tmp)
              back[idx] = (tmp[0] - velU * dt) * memoryCoeff
              back[idx + 1] = (tmp[1] - velV * dt) * memoryCoeff
              back[idx + 2] = tmp[2] * memoryCoeff
              back[idx + 3] = tmp[3] * memoryCoeff
            } else {
              back[idx] = front[idx] * memoryCoeff
              back[idx + 1] = front[idx + 1] * memoryCoeff
              back[idx + 2] = front[idx + 2] * memoryCoeff
              back[idx + 3] = front[idx + 3] * memoryCoeff
            }
            if (
              !isBusy &&
              (Math.abs(back[idx]) > 0.05 ||
                Math.abs(back[idx + 1]) > 0.05 ||
                back[idx + 2] > 0.004)
            ) {
              isBusy = true
            }
          }
        }

        advectionGrid.front = back
        advectionGrid.back = front

        for (let idx = inkDrops.length - 1; idx >= 0; idx--) {
          const drop = inkDrops[idx]
          drop.age += dt
          const progress = clamp(drop.age / 0.75, 0, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          const curR = drop.target * ease
          if (curR > drop.radius + 0.001) {
            applyDropCircle(drop, drop.radius, curR)
            drop.radius = curR
          }
          if (progress >= 1) inkDrops.splice(idx, 1)
          isBusy = true
        }

        advectionGrid.busy = isBusy
        mapTexture.image.data = advectionGrid.front
        mapTexture.needsUpdate = true
      }

      const applyDropCircle = (drop: InkDrop, oldR: number, newR: number) => {
        const { nx, ny, cell } = advectionGrid
        const front = advectionGrid.front
        const back = advectionGrid.back
        back.set(front)

        const deltaRSq = newR * newR - oldR * oldR
        const gX = drop.x / cell - 0.5
        const gY = drop.y / cell - 0.5
        const span = Math.ceil((5 * newR + 2 * cell) / cell)
        const tmp = [0, 0, 0, 0]

        const yMin = Math.max(0, Math.floor(gY - span))
        const yMax = Math.min(ny - 1, Math.ceil(gY + span))
        const xMin = Math.max(0, Math.floor(gX - span))
        const xMax = Math.min(nx - 1, Math.ceil(gX + span))

        for (let j = yMin; j <= yMax; j++) {
          for (let i = xMin; i <= xMax; i++) {
            const idx = (j * nx + i) * 4
            const posX = (i + 0.5) * cell
            const posY = (j + 0.5) * cell
            const diffX = posX - drop.x
            const diffY = posY - drop.y
            const dist = Math.hypot(diffX, diffY)

            if (dist > newR - cell) {
              const factor = Math.sqrt(Math.max(0, 1 - deltaRSq / Math.max(dist * dist, 1e-6)))
              const origX = drop.x + diffX * factor
              const origY = drop.y + diffY * factor
              sampleVec4(front, origX / cell - 0.5, origY / cell - 0.5, tmp)
              back[idx] = tmp[0] + (origX - posX)
              back[idx + 1] = tmp[1] + (origY - posY)
              back[idx + 2] = tmp[2]
              back[idx + 3] = tmp[3]
            }
            const blend = clamp((newR - dist) / (1.2 * cell) + 0.5, 0, 1)
            if (blend > 0) {
              back[idx] *= 1 - blend
              back[idx + 1] *= 1 - blend
              back[idx + 2] = back[idx + 2] * (1 - blend) + blend
              back[idx + 3] = back[idx + 3] * (1 - blend) + blend * drop.hue
            }
          }
        }

        advectionGrid.front = back
        advectionGrid.back = front

        const mCell = velocityGrid.cell
        const vX = drop.x / mCell - 0.5
        const vY = drop.y / mCell - 0.5
        const vSpan = Math.ceil((1.6 * newR) / mCell)
        const vyMin = Math.max(0, Math.floor(vY - vSpan))
        const vyMax = Math.min(velocityGrid.ny - 1, Math.ceil(vY + vSpan))
        const vxMin = Math.max(0, Math.floor(vX - vSpan))
        const vxMax = Math.min(velocityGrid.nx - 1, Math.ceil(vX + vSpan))

        for (let j = vyMin; j <= vyMax; j++) {
          for (let i = vxMin; i <= vxMax; i++) {
            const ringDist = Math.hypot(i - vX, j - vY) * mCell - newR
            const width = 0.45 * newR + mCell
            const stirVal = Math.exp(-Math.pow(ringDist / width, 2))
            const sIdx = j * velocityGrid.nx + i
            velocityGrid.stir[sIdx] = Math.max(velocityGrid.stir[sIdx], 0.85 * stirVal)
          }
        }
        velocityGrid.stirred = true
        stirTexture.needsUpdate = true
      }

      const spawnDrop = (x: number, y: number, targetRadius: number) => {
        const palette = [0.1, 0.5, 0.1, 0.9]
        inkDrops.push({
          x,
          y,
          radius: 0,
          target: targetRadius,
          age: 0,
          hue: palette[dropCounter % palette.length],
        })
        dropCounter++
      }

      const renderFrame = () => {
        if (!isInitialized) return
        layoutText()
        const cur = config.current

        const colA = rgbToOklab(parseColor(cur.colors[0], [0.32, 0.15, 1]))
        const colB = rgbToOklab(parseColor(cur.colors[1], [1, 0.62, 0.99]))
        const colBase = rgbToOklab(parseColor(cur.baseColor, [0.95, 0.93, 1]))

        uniforms.uInkA.value.set(colA[0], colA[1], colA[2])
        uniforms.uInkB.value.set(colB[0], colB[1], colB[2])
        uniforms.uInkC.value.set(colBase[0], colBase[1], colBase[2])

        if (colBase[0] > 0.6) {
          uniforms.uBase.value.set(Math.min(0.3, 0.32 * colBase[0]), 0.5 * colA[1], 0.5 * colA[2])
        } else {
          uniforms.uBase.value.set(Math.max(0.9, colBase[0] + 0.6), 0.08 * colA[1], 0.08 * colA[2])
        }

        uniforms.uBand.value = bounds.size * clamp(cur.bandSize, 0.05, 2)
        uniforms.uWave.value = clamp(cur.waviness, 0, 2)
        uniforms.uGrain.value = clamp(cur.grain, 0, 1)
        uniforms.uGrainSize.value =
          clamp(cur.grainSize, 1.2, 14) * (bounds.size / clamp(cur.fontSize, 12, 600))
        uniforms.uDotSize.value = clamp(cur.dotSize, 0.3, 2)
        uniforms.uDrift.value.set(
          driftTime * bounds.size * 0.06,
          Math.sin(0.21 * driftTime) * bounds.size * 0.05
        )

        const introDur = clamp(cur.introDuration, 0.2, 8)
        uniforms.uIntro.value = introTime >= 1e8 ? 1 : clamp(introTime / introDur, 0, 1)

        renderer.setRenderTarget(null)
        renderer.clear()
        renderer.render(scene, camera)
      }

      const isRunning = () => {
        const cur = config.current
        return !cur.reduced && !cur.paused
      }

      const addStirStroke = (x0: number, y0: number, x1: number, y1: number, dt: number) => {
        const cur = config.current
        const dX = x1 - x0
        const dY = y1 - y0
        const len = Math.hypot(dX, dY)
        if (len < 0.3 || dt <= 0) return
        const speed = Math.min(len / Math.max(dt, 1 / 120), 1600)
        const strength = 0.42 * clamp(cur.stirStrength, 0, 3)
        const radius = clamp(cur.stirRadius, 0.1, 3) * bounds.size * 0.5
        const steps = Math.max(1, Math.ceil(len / (0.5 * radius)))
        for (let s = 0; s < steps; s++) {
          const fraction = (s + 0.5) / steps
          stirImpulses.push({
            x: x0 + dX * fraction,
            y: y0 + dY * fraction,
            fx: ((dX / len) * speed * strength) / steps,
            fy: ((dY / len) * speed * strength) / steps,
            radius,
          })
        }
      }

      const processStirSequences = (dt: number) => {
        for (let idx = stirSequences.length - 1; idx >= 0; idx--) {
          const seq = stirSequences[idx]
          const samplePos = (progressVal: number) => {
            const ease =
              progressVal < 0.5
                ? 2 * progressVal * progressVal
                : 1 - Math.pow(-2 * progressVal + 2, 2) / 2
            const posX = seq.from[0] + (seq.to[0] - seq.from[0]) * ease
            const posY = seq.from[1] + (seq.to[1] - seq.from[1]) * ease
            return [posX * (bounds.x1 - bounds.x0), posY * (bounds.y1 - bounds.y0)]
          }
          const pStart = samplePos(clamp(seq.elapsed / seq.duration, 0, 1))
          seq.elapsed += dt
          const pEnd = samplePos(clamp(seq.elapsed / seq.duration, 0, 1))
          addStirStroke(pStart[0], pStart[1], pEnd[0], pEnd[1], dt)
          if (seq.elapsed >= seq.duration) stirSequences.splice(idx, 1)
        }
      }

      const tick = (now: number) => {
        rafId = 0
        if (isDestroyed) return
        const dt = Math.min(0.1, Math.max(0, (now - lastTime) / 1000))
        lastTime = now

        if (++frameCount % 30 === 0) {
          if (
            Math.abs(el.clientWidth - canvasWidth) > 1 ||
            Math.abs(el.clientHeight - canvasHeight) > 1
          ) {
            handleResize()
          }
        }

        if (isInitialized) layoutText()

        const cur = config.current
        if (isRunning()) {
          driftTime += dt * clamp(cur.current, 0, 4)
          if (introTime < 1e8) {
            introTime += dt
            if (introTime > clamp(cur.introDuration, 0.2, 8) + 0.2) {
              introTime = 1e9
            }
          }
          accumulatedTime += dt
          let stepCount = 0
          while (accumulatedTime >= SIM_DT && stepCount < 4) {
            processStirSequences(SIM_DT)
            const hasMotion = stirImpulses.length > 0 || velocityGrid.energy > 0
            if (hasMotion) {
              stepVelocity(SIM_DT)
            } else if (velocityGrid.stirred) {
              decayStir(SIM_DT)
            }
            if (hasMotion || advectionGrid.busy || inkDrops.length) {
              stepAdvection(SIM_DT)
            }
            accumulatedTime -= SIM_DT
            stepCount++
          }
          if (stepCount === 4) accumulatedTime = 0
        }

        renderFrame()

        const needsNext =
          cur.current > 0 ||
          introTime < 1e8 ||
          advectionGrid.busy ||
          inkDrops.length > 0 ||
          velocityGrid.energy > 0 ||
          velocityGrid.stirred ||
          stirSequences.length > 0 ||
          stirImpulses.length > 0

        if (isVisible && !document.hidden && isRunning() && needsNext) {
          rafId = requestAnimationFrame(tick)
        }
      }

      const requestTick = () => {
        if (isDestroyed || rafId || !isVisible) return
        lastTime = performance.now()
        rafId = requestAnimationFrame(tick)
      }

      const handleResize = () => {
        const rect = el.getBoundingClientRect()
        if (rect.width < 2 || rect.height < 2) {
          isInitialized = false
          return
        }
        isInitialized = true
        canvasWidth = rect.width
        canvasHeight = rect.height
        dpr =
          Math.min(window.devicePixelRatio || 1, 2) *
          clamp(config.current.quality, 0.25, 1)

        renderer.setPixelRatio(dpr)
        renderer.setSize(canvasWidth, canvasHeight, false)

        camera.left = -canvasWidth / 2
        camera.right = canvasWidth / 2
        camera.top = canvasHeight / 2
        camera.bottom = -canvasHeight / 2
        camera.updateProjectionMatrix()

        renderFrame()
        requestTick()
      }

      const toCanvasCoords = (clientX: number, clientY: number): [number, number] => {
        const rect = el.getBoundingClientRect()
        const cX = clientX - rect.left - canvasWidth / 2
        const cY = canvasHeight / 2 - (clientY - rect.top)
        return [cX - bounds.x0, bounds.y1 - cY]
      }

      const onPointerMove = (e: PointerEvent) => {
        const cur = config.current
        const [posX, posY] = toCanvasCoords(e.clientX, e.clientY)
        const now = performance.now()
        if (cur.interactive && isRunning() && pointerState.placed && now - pointerState.t < 120) {
          addStirStroke(pointerState.x, pointerState.y, posX, posY, (now - pointerState.t) / 1000)
          requestTick()
        }
        if (pointerState.id === e.pointerId) {
          pointerState.moved += Math.hypot(posX - pointerState.x, posY - pointerState.y)
        }
        pointerState.x = posX
        pointerState.y = posY
        pointerState.t = now
        pointerState.placed = true
      }

      const onPointerDown = (e: PointerEvent) => {
        if (
          config.current.interactive &&
          isRunning() &&
          (e.pointerType !== 'mouse' || e.button === 0)
        ) {
          pointerState.id = e.pointerId
          pointerState.moved = 0
        }
      }

      const onPointerUp = (e: PointerEvent) => {
        if (pointerState.id !== e.pointerId) return
        pointerState.id = -1
        const cur = config.current
        if (!cur.dropInk || !cur.interactive || !isRunning() || pointerState.moved > 12) return
        const [posX, posY] = toCanvasCoords(e.clientX, e.clientY)
        if (
          posX < 0 ||
          posY < 0 ||
          posX > bounds.x1 - bounds.x0 ||
          posY > bounds.y1 - bounds.y0
        )
          return
        spawnDrop(posX, posY, clamp(cur.dropSize, 0.05, 2) * bounds.size * 0.5)
        requestTick()
      }

      const onPointerLeave = () => {
        pointerState.placed = false
      }

      el.addEventListener('pointermove', onPointerMove)
      el.addEventListener('pointerdown', onPointerDown)
      el.addEventListener('pointerup', onPointerUp)
      el.addEventListener('pointercancel', onPointerUp)
      el.addEventListener('pointerleave', onPointerLeave)

      const resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(el)

      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          isVisible = entries.some((entry) => entry.isIntersecting)
          if (isVisible) requestTick()
        },
        { rootMargin: '80px' }
      )
      intersectionObserver.observe(el)

      const onVisibilityChange = () => {
        if (!document.hidden) requestTick()
      }
      document.addEventListener('visibilitychange', onVisibilityChange)

      if (document.fonts?.ready) {
        document.fonts.ready
          .then(() => {
            if (!isDestroyed) {
              prevLayoutKey = ''
              if (isInitialized) renderFrame()
            }
          })
          .catch(() => {})
      }

      const onContextLost = (e: Event) => e.preventDefault()
      canvas.addEventListener('webglcontextlost', onContextLost)

      handleResize()

      return {
        sync: () => {
          const newDpr =
            Math.min(window.devicePixelRatio || 1, 2) *
            clamp(config.current.quality, 0.25, 1)
          if (!isInitialized || Math.abs(newDpr - dpr) > 0.001) {
            handleResize()
          } else {
            if (!isRunning()) introTime = 1e9
            renderFrame()
          }
          requestTick()
        },
        destroy: () => {
          isDestroyed = true
          cancelAnimationFrame(rafId)
          el.removeEventListener('pointermove', onPointerMove)
          el.removeEventListener('pointerdown', onPointerDown)
          el.removeEventListener('pointerup', onPointerUp)
          el.removeEventListener('pointercancel', onPointerUp)
          el.removeEventListener('pointerleave', onPointerLeave)
          document.removeEventListener('visibilitychange', onVisibilityChange)
          canvas.removeEventListener('webglcontextlost', onContextLost)
          resizeObserver.disconnect()
          intersectionObserver.disconnect()
          maskTexture.dispose()
          mapTexture.dispose()
          stirTexture.dispose()
          planeGeom.dispose()
          material.dispose()
          renderer.dispose()
          renderer.forceContextLoss()
          canvas.remove()
        },
        drop: (x = 0.5, y = 0.5, size = 0.5) => {
          if (isRunning() && isInitialized) {
            layoutText()
            spawnDrop(
              clamp(x, 0, 1) * (bounds.x1 - bounds.x0),
              clamp(y, 0, 1) * (bounds.y1 - bounds.y0),
              clamp(size, 0.05, 2) * bounds.size * 0.5
            )
            requestTick()
          }
        },
        stir: (from: [number, number], to: [number, number], duration = 1) => {
          if (isRunning() && isInitialized) {
            stirSequences.push({
              from,
              to,
              duration: clamp(duration, 0.05, 10),
              elapsed: 0,
            })
            requestTick()
          }
        },
        replay: () => {
          if (isRunning() && isInitialized) {
            introTime = 0
            requestTick()
          }
        },
      }
    }

    const inst = initInstance(container, configRef)
    instanceRef.current = inst

    return () => {
      inst?.destroy()
      instanceRef.current = null
    }
  }, [])

  useImperativeHandle(
    forwardedRef,
    () => ({
      drop: (x = 0.5, y = 0.5, size = 0.5) => instanceRef.current?.drop(x, y, size),
      stir: (from: [number, number], to: [number, number], duration = 1) =>
        instanceRef.current?.stir(from, to, duration),
      replay: () => instanceRef.current?.replay(),
    }),
    []
  )

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={text}
      className={cn('relative isolate h-full min-h-[140px] sm:min-h-[180px] w-full overflow-hidden', className)}
      style={{ touchAction: 'pan-y', ...style }}
    >
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
})

export default StippleType
