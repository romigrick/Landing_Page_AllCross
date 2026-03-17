/**
 * saveLead — salva o lead na tabela `leads` do Supabase
 * É chamado no momento da conversão, antes de abrir o WhatsApp.
 * Falha silenciosamente para nunca bloquear a conversão.
 */

const SUPABASE_URL  = 'https://esmkhhpmrdvgmsfwszuq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbWtoaHBtcmR2Z21zZndzenVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0Mzc2NDEsImV4cCI6MjA4OTAxMzY0MX0.V0_Fu7_PhrNYT2mYNwaSljwd4CcQfk2gvNqFpoC9XeI'

const LEADS_URL = `${SUPABASE_URL}/rest/v1/leads`

const HEADERS = {
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
}

const PLAN_LABELS = {
  individual:  'Individual',
  familiar:    'Familiar',
  mei:         'Empresarial — MEI',
  empresarial: 'Empresarial — PME',
  senior:      'MedSênior (60+)',
}

/**
 * @param {object} formData  — dados do formulário
 * @param {object} consultant — consultor atribuído { name, phone }
 */
export async function saveLead(formData, consultant) {
  try {
    const payload = {
      nome:       formData.name      || null,
      whatsapp:   formData.phone     || null,
      cidade:     formData.city      || null,
      tipo_plano: PLAN_LABELS[formData.planType] || formData.planType || null,
      observacoes: formData.message  || null,
      consultor:  consultant.name,
      consultor_telefone: consultant.phone,
      origem:     'Landing Page',
      // created_at é preenchido automaticamente pelo Supabase (DEFAULT now())
    }

    await fetch(LEADS_URL, {
      method:  'POST',
      headers: HEADERS,
      body:    JSON.stringify(payload),
    })
  } catch (err) {
    // Nunca deixa o erro chegar ao usuário — conversão não pode ser bloqueada
    console.warn('[AllCross] Falha ao salvar lead:', err)
  }
}
