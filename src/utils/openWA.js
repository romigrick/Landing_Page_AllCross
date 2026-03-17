/**
 * openConsultantWA
 * 1. Busca o próximo consultor (round-robin global via Supabase)
 * 2. Salva o lead no Supabase (tabela leads) — não bloqueia se falhar
 * 3. Abre o WhatsApp do consultor com a mensagem pré-preenchida
 */
import { getNextConsultant, buildWhatsAppURL } from './roundRobin'
import { saveLead } from './saveLead'

const DEFAULT_FORM = {
  name: '',
  phone: '',
  city: '',
  planType: 'individual',
  message: 'Olá! Vi a página da AllCross e gostaria de receber uma cotação de plano de saúde.',
}

export async function openConsultantWA(formData = DEFAULT_FORM) {
  // 1. Próximo consultor
  const consultant = await getNextConsultant()

  // 2. Salva lead (fire-and-forget — não bloqueia a abertura do WA)
  saveLead(formData, consultant)

  // 3. Abre WhatsApp
  const url = buildWhatsAppURL(consultant, formData)
  window.open(url, '_blank', 'noopener,noreferrer')
}
