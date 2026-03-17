import { useReveal } from '../hooks/useReveal'
import { openConsultantWA } from '../utils/openWA'

export function FinalCTA() {
  const { ref, visible } = useReveal()

  return (
    <section
      className="py-20 bg-navy-gradient relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-amber-500/8 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className={`relative max-w-3xl mx-auto px-4 sm:px-6 text-center reveal ${visible ? 'visible' : ''}`}>
        <div className="w-16 h-16 rounded-3xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center mx-auto mb-8">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-6">
          Sua saúde não pode esperar.{' '}
          <em className="not-italic text-gradient-gold">Proteja sua família hoje.</em>
        </h2>
        <p className="text-white/60 font-body text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Cotação gratuita, comparativo personalizado e especialista pronto para atender. Sem compromisso.
        </p>

        <button
          onClick={() => openConsultantWA()}
          className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-body font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-300 shadow-2xl shadow-amber-600/40 hover:shadow-amber-400/60 hover:-translate-y-1 animate-pulse-gold"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Quero minha cotação gratuita
        </button>

        <p className="text-white/30 text-sm font-body mt-6">
          Retorno garantido em até 1 hora · Curitiba e região metropolitana
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/40 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-navy-gradient flex items-center justify-center">
              <span className="text-amber-400 font-display font-bold text-base">A</span>
            </div>
            <div>
              <span className="text-white font-display font-semibold text-base">AllCross</span>
              <p className="text-white/30 text-xs font-body">Seguros & Planos de Saúde</p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs font-body leading-relaxed">
              Rua André de Barros, 226 · Curitiba, PR
            </p>
            <p className="text-xs font-body mt-1">
              Corretora certificada SUSEP · Parceira das principais operadoras
            </p>
            <p className="text-xs font-body mt-1">
              © {new Date().getFullYear()} AllCross Seguros. Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <p className="text-xs font-body text-center text-white/20 leading-relaxed max-w-2xl mx-auto">
          As cotações apresentadas são estimativas e podem variar conforme perfil, operadora e vigência da tabela. Os valores são atualizados pelas operadoras periodicamente.
          A AllCross é uma corretora intermediária e não representa exclusivamente nenhuma operadora de saúde.
        </p>
      </div>
    </footer>
  )
}
