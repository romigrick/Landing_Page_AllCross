import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'
import { openConsultantWA } from '../utils/openWA'

const planTypes = [
  { value: '',            label: 'Selecione o tipo de plano' },
  { value: 'individual',  label: 'Individual' },
  { value: 'familiar',    label: 'Familiar (2 ou mais pessoas)' },
  { value: 'mei',         label: 'Empresarial — MEI' },
  { value: 'empresarial', label: 'Empresarial — PME (2 a 29 vidas)' },
  { value: 'senior',      label: 'MedSênior (60+ anos)' },
]

const EMPTY_FORM = { name: '', phone: '', city: '', planType: '', message: '' }

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-body font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  )
}

export default function LeadForm() {
  const { ref, visible } = useReveal()
  const [form, setForm]       = useState(EMPTY_FORM)
  const [errors, setErrors]   = useState({})
  const [submitted, setSubmitted] = useState(false)

  /* ── Máscara de telefone ── */
  const formatPhone = (v) => {
    const d = v.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 2) return d
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  }

  const handle = (field) => (e) => {
    const val = field === 'phone' ? formatPhone(e.target.value) : e.target.value
    setForm(f => ({ ...f, [field]: val }))
    if (errors[field]) setErrors(err => ({ ...err, [field]: '' }))
  }

  /* ── Validação ── */
  const validate = () => {
    const e = {}
    if (!form.name.trim())                          e.name     = 'Nome obrigatório'
    if (form.phone.replace(/\D/g, '').length < 10) e.phone    = 'WhatsApp inválido'
    if (!form.planType)                             e.planType = 'Selecione o tipo de plano'
    return e
  }

  /* ── Submit: round-robin → abre WA do consultor da vez ── */
  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    // Salva lead + abre WhatsApp do consultor da vez (round-robin global)
    await openConsultantWA(form)
    setSubmitted(true)
  }

  return (
    <section
      className="py-20 bg-navy-gradient relative overflow-hidden"
      id="cotacao"
      ref={ref}
    >
      {/* BG blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <span className="inline-block text-amber-400 font-body text-sm font-semibold uppercase tracking-widest mb-4">
              Cotação gratuita
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-6">
              Receba sua cotação{' '}
              <em className="not-italic text-gradient-gold">personalizada</em>{' '}agora
            </h2>
            <p className="text-white/60 font-body text-lg leading-relaxed mb-8">
              Preencha o formulário e um especialista entrará em contato em até 1 hora
              com um comparativo das melhores opções para o seu perfil.
            </p>

            <ul className="space-y-4">
              {[
                'Comparamos até 10 operadoras para você',
                'Análise personalizada de rede, cobertura e preço',
                'Sem compromisso e totalmente gratuito',
                '1.500+ corretores especializados prontos para atender',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-amber-400" />
                  </div>
                  <span className="text-white/70 font-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: form ── */}
          <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
            {submitted ? (
              /* Success state */
              <div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={36} className="text-emerald-500" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy-900 mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                  Seu WhatsApp já está aberto. Um especialista retornará em até 1 hora
                  com sua cotação personalizada.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(EMPTY_FORM) }}
                  className="text-amber-600 font-body font-medium text-sm underline underline-offset-2"
                >
                  Preencher novamente
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={submit}
                className="bg-white rounded-3xl p-8 shadow-2xl shadow-navy-950/40"
                noValidate
                aria-label="Formulário de cotação de plano de saúde"
              >
                <h3 className="font-display text-2xl font-semibold text-navy-900 mb-6">
                  Solicite sua cotação
                </h3>

                <div className="space-y-4">
                  <Field label="Nome completo *" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handle('name')}
                      placeholder="Seu nome"
                      className={`input-field ${errors.name ? 'border-red-300' : ''}`}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="WhatsApp *" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={handle('phone')}
                      placeholder="(41) 99999-9999"
                      className={`input-field ${errors.phone ? 'border-red-300' : ''}`}
                      autoComplete="tel"
                      inputMode="numeric"
                    />
                  </Field>

                  <Field label="Cidade" error={errors.city}>
                    <input
                      type="text"
                      value={form.city}
                      onChange={handle('city')}
                      placeholder="Ex: Curitiba"
                      className="input-field"
                      autoComplete="address-level2"
                    />
                  </Field>

                  <Field label="Tipo de plano de interesse *" error={errors.planType}>
                    <div className="relative">
                      <select
                        value={form.planType}
                        onChange={handle('planType')}
                        className={`input-field appearance-none pr-10 ${errors.planType ? 'border-red-300' : ''}`}
                      >
                        {planTypes.map(p => (
                          <option key={p.value} value={p.value} disabled={!p.value}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </Field>

                  <Field label="Observações (opcional)">
                    <textarea
                      value={form.message}
                      onChange={handle('message')}
                      placeholder="Número de beneficiários, plano atual, dúvidas..."
                      rows={3}
                      className="input-field resize-none"
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="whatsapp-btn mt-6 w-full flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-body font-semibold text-lg py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-amber-400/30 hover:-translate-y-0.5"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar cotação gratuita
                </button>

                <p className="text-center text-gray-400 text-xs font-body mt-4">
                  🔒 Seus dados são protegidos e não serão compartilhados
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
