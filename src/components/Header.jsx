import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { openConsultantWA } from '../utils/openWA'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-950/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-navy-gradient flex items-center justify-center shadow-lg">
            <span className="text-amber-400 font-display font-bold text-lg leading-none">A</span>
          </div>
          <div className="leading-tight">
            <span className={`font-display font-bold text-lg tracking-wide ${scrolled ? 'text-navy-900' : 'text-white'}`}>
              AllCross
            </span>
            <p className={`text-xs font-body ${scrolled ? 'text-gray-500' : 'text-white/60'}`}>
              Seguros & Planos de Saúde
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => openConsultantWA()}
          className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-amber-400/40 hover:shadow-lg hover:-translate-y-0.5"
          aria-label="Falar com especialista no WhatsApp"
        >
          <Phone size={15} strokeWidth={2.5} />
          Falar com especialista
        </button>
        <button
          onClick={() => openConsultantWA()}
          className="sm:hidden flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-white font-body font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200"
        >
          <Phone size={14} />
          Cotação
        </button>
      </div>
    </header>
  )
}
