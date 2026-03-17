import { useEffect, useRef, useState } from 'react'
import { Shield, ChevronDown, Star, CheckCircle2 } from 'lucide-react'
import { openConsultantWA } from '../utils/openWA'

const operadoras = [
  'Unimed', 'MedSênior', 'Amil', 'Bradesco Saúde',
  'Sul América', 'Hapvida', 'Notre Dame', 'Paraná Clínicas'
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-hero-pattern flex flex-col justify-center overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-600/8 blur-3xl" />
        {/* Diagonal line accent */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow badge */}
            <div
              className={`inline-flex items-center gap-2 glass-card gold-border rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Shield size={14} className="text-amber-400" />
              <span className="text-amber-400/90 font-body text-xs font-medium tracking-widest uppercase">
                22 anos protegendo famílias
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 transition-all duration-700 delay-150 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Compare planos de saúde e{' '}
              <em className="text-gradient-gold not-italic">
                pague menos
              </em>
            </h1>

            {/* Sub headline */}
            <p
              className={`font-body text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Receba uma cotação gratuita e descubra a melhor opção entre
              as principais operadoras em minutos. Sem compromisso.
            </p>

            {/* Trust signals */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-10 transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                '✓ Cotação gratuita',
                '✓ Até 10 operadoras',
                '✓ Retorno em até 1h',
              ].map((item) => (
                <span
                  key={item}
                  className="inline-block bg-white/10 text-white/80 text-sm font-body px-3 py-1.5 rounded-full border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={openConsultantWA}
                className="whatsapp-btn group inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-body font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-600/30 hover:shadow-amber-400/50 hover:-translate-y-1 animate-pulse-gold"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com especialista
              </button>
              <a
                href="#cotacao"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/90 hover:bg-white/10 font-body font-medium text-lg px-8 py-4 rounded-2xl transition-all duration-200"
              >
                Pedir cotação online
              </a>
            </div>

            {/* Social proof row */}
            <div
              className={`flex items-center justify-center lg:justify-start gap-4 mt-10 transition-all duration-700 delay-1000 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex -space-x-2">
                {['#3b82f6', '#10b981', '#f59e0b', '#ef4444'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-navy-950 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {['M', 'J', 'A', 'R'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-white/60 text-xs font-body">+230 mil vidas atendidas</p>
              </div>
            </div>
          </div>

          {/* Right — Operadoras showcase */}
          <div
            className={`relative transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="glass-card rounded-3xl p-8 border border-white/15">
              <p className="text-white/50 text-xs font-body uppercase tracking-widest text-center mb-6">
                Operadoras disponíveis
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {operadoras.map((op, i) => (
                  <div
                    key={op}
                    className="bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 text-center transition-all duration-200 cursor-default"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="text-white font-body font-medium text-sm">{op}</span>
                  </div>
                ))}
              </div>
              {/* Value proposition card */}
              <div className="bg-amber-500/15 border border-amber-400/30 rounded-2xl p-5 text-center">
                <p className="text-amber-300 font-body text-xs uppercase tracking-widest mb-1">Planos a partir de</p>
                <p className="text-white font-display text-4xl font-bold">
                  R$ 96<span className="text-lg text-white/60 font-body font-normal">/mês</span>
                </p>
                <p className="text-white/50 text-xs mt-1 font-body">por pessoa · sem taxa de adesão</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-2xl px-4 py-3 shadow-xl shadow-amber-600/30 animate-float">
              <p className="text-xs font-body font-medium leading-none mb-0.5">Comparamos até</p>
              <p className="text-2xl font-display font-bold leading-none">10</p>
              <p className="text-xs font-body font-medium leading-none">operadoras</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs font-body uppercase tracking-widest">Saiba mais</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
