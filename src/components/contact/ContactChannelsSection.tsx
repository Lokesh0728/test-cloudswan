import React from 'react'
import {
  PhoneCall,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { CONTACT_CHANNELS } from './contactData'

export const ContactChannelsSection: React.FC = () => {
  return (
    <section
      aria-label="Direct Communication Channels"
      className="py-12 sm:py-16 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-12">
          <span className="eyebrow-badge text-accent-600">
            Instant Communication
          </span>
          <h2 className="display-h2 text-slate-900">
            Reach Us Through Your <span className="text-accent-500">Preferred</span> Channel
          </h2>
          <p className="caption-text text-slate-500 text-xs sm:text-sm">
            Whether you need urgent counseling or want to send an email inquiry, our staff responds promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CONTACT_CHANNELS.map((channel, idx) => {
            return (
              <a
                key={idx}
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-accent-500 border border-orange-100 flex items-center justify-center transition-all group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-white shadow-2xs">
                      {channel.icon === 'PhoneCall' && <PhoneCall className="w-5 h-5" />}
                      {channel.icon === 'Phone' && <Phone className="w-5 h-5" />}
                      {channel.icon === 'MessageCircle' && <MessageCircle className="w-5 h-5" />}
                      {channel.icon === 'Mail' && <Mail className="w-5 h-5" />}
                    </div>

                    <span className="eyebrow-badge text-[9px] px-2.5 py-0.5 rounded-full bg-orange-50 text-accent-700 border border-orange-200/60">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-accent-600 transition-colors min-h-[2.5rem] sm:min-h-[3rem] flex items-start">
                    {channel.title}
                  </h3>

                  <p
                    className={`font-heading font-extrabold text-slate-800 mt-1 flex items-center min-h-[1.75rem] sm:min-h-[2rem] ${
                      channel.icon === 'Mail' ? 'text-xs sm:text-[13px] tracking-tight' : 'text-base sm:text-lg'
                    }`}
                    title={channel.value}
                  >
                    <span className="truncate">{channel.value}</span>
                  </p>

                  <p className="caption-text text-slate-500 mt-1.5 text-xs line-clamp-2 min-h-[2.25rem] sm:min-h-[2.5rem] flex items-start">
                    {channel.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-heading font-bold text-slate-700 group-hover:text-accent-600 transition-colors">
                  <span>{channel.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
