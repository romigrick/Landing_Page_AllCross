import { useReveal } from '../hooks/useReveal'
import { openConsultantWA } from '../utils/openWA'
import { Users, Briefcase, Building2, Heart } from 'lucide-react'



const segments = [
  {
    icon: Users,
    tag: 'Família',
    title: 'Plano Familiar',
    desc: 'Proteja seus filhos e cônjuge com cobertura completa. Comparamos planos que cabem no seu orçamento sem abrir mão da qualidade.',
    highlight: 'Ideal para famílias com crianças',
    color: 'from-blue-500 to-blue-700',
    accent: 'blue',
  },
  {
    icon: Briefcase,
    tag: 'Autônomo / MEI',
    title: 'Plano Empresarial MEI',
    desc: 'Com CNPJ MEI você acessa planos coletivos até 45% mais em conta que planos individuais. Uma vantagem que poucos conhecem.',
    highlight: 'Até 45% mais econômico',
    color: 'from-amber-500 to-amber-700',
    accent: 'amber',
    featured: true,
  },
  {
    icon: Building2,
    tag: 'Empresa (PME)',
    title: 'Plano Coletivo Empresarial',
    desc: 'De 2 a 29 vidas. Benefício que atrai e retém talentos, com custo acessível e processo de contratação simples.',
    highlight: 'De 2 a 29 colaboradores',
    color: 'from-emerald-500 to-emerald-700',
    accent: 'emerald',
  },
  {
    icon: Heart,
    tag: 'Sênior 60+',
    title: 'MedSênior',
    desc: 'Plano especializado para quem tem 60 anos ou mais. Cobertura completa com rede de qualidade e preço justo para a melhor fase da vida.',
    highlight: 'Especializado para +60 anos',
    color: 'from-rose-500 to-rose-700',
    accent: 'rose',
  },
]

const accentColors = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  rose: 'bg-rose-50 text-rose-700 border-rose-200',
}

export default function ForWhom() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-20 bg-white" ref={ref} id="planos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="inline-block text-amber-600 font-body text-sm font-semibold uppercase tracking-widest mb-3">
            Para quem é
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-navy-900 mb-4">
            O plano certo para{' '}
            <em className="not-italic text-amber-500">cada situação</em>
          </h2>
          <p className="text-gray-500 font-body text-lg max-w-xl mx-auto">
            Não importa o seu perfil — temos especialistas prontos para encontrar a melhor solução para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg, i) => {
            const Icon = seg.icon
            return (
              <div
                key={seg.tag}
                className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''} relative group flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  seg.featured
                    ? 'border-amber-300 shadow-xl shadow-amber-100'
                    : 'border-gray-100 shadow-md'
                }`}
              >
                {seg.featured && (
                  <div className="bg-amber-500 text-white text-xs font-body font-semibold text-center py-1.5 px-4 uppercase tracking-widest">
                    ⭐ Mais popular
                  </div>
                )}
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${seg.color} p-6`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/70 text-xs font-body uppercase tracking-widest">{seg.tag}</span>
                  <h3 className="text-white font-display text-xl font-semibold mt-1">{seg.title}</h3>
                </div>
                {/* Body */}
                <div className="flex-1 flex flex-col p-6 bg-white">
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-4 flex-1">
                    {seg.desc}
                  </p>
                  <div className={`inline-flex items-center gap-1.5 text-xs font-body font-semibold px-3 py-1.5 rounded-full border ${accentColors[seg.accent]} mb-5`}>
                    <span>✓</span> {seg.highlight}
                  </div>
                  <button
                    onClick={() => openConsultantWA()}
                    className={`w-full text-center font-body font-semibold text-sm py-3 rounded-xl transition-all duration-200 ${
                      seg.featured
                        ? 'bg-amber-500 hover:bg-amber-400 text-white shadow-lg shadow-amber-200'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    Quero uma cotação
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
