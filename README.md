# AllCross — Landing Page

Landing page de alta conversão para captação de leads de planos de saúde, desenvolvida em **React + Vite + Tailwind CSS**.
O projeto conta com integração com o Meta Pixel, disparando eventos do tipo Lead com metadados ricos (tipo de plano, perfil de pessoa física/jurídica, localização e quantidade de beneficiários),
permitindo a otimização precisa de campanhas de tráfego pago.

---

## Funcionalidades

- **Round-robin global de consultores** — leads distribuídos automaticamente entre 8 consultores via Supabase, sem depender do dispositivo do visitante
- **Formulário de cotação** com validação, máscara de telefone e disparo de evento para o Meta Pixel
- **Salvamento de leads** no Supabase em tempo real (formulário e cliques de botão)
- **Sincronização automática** com Google Sheets via Apps Script (a cada hora)
- **Relatório semanal** por e-mail toda segunda-feira às 9h
- **Meta Pixel** integrado com evento `Lead` no envio do formulário
- **Cronjob** configurado no cron-job.org para manter o Supabase ativo

---

## Stack

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS v3](https://tailwindcss.com)
- [Supabase](https://supabase.com) — round-robin + log de leads
- [Google Apps Script](https://script.google.com) — sincronização com planilha e relatório por e-mail
- [Lucide React](https://lucide.dev) — ícones

---

## Segurança e boas práticas
**Segregação de Chaves:** Uso estrito de chaves públicas (anon_key) no frontend, seguindo as políticas de segurança do Supabase.
**Componentização:** Interface baseada em componentes funcionais para facilitar a manutenção e escalabilidade.
**Responsividade:** Design mobile-first garantindo conversão em todos os tamanhos de tela.

## Estrutura do projeto

```
allcross-lp/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ForWhom.jsx
│   │   ├── HumanSection.jsx
│   │   ├── Differentials.jsx
│   │   ├── LeadForm.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── utils/
│   │   ├── roundRobin.js   ← round-robin de consultores (Supabase)
│   │   ├── openWA.js       ← abre WhatsApp do consultor da vez
│   │   └── saveLead.js     ← salva lead no Supabase
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

---

## Configuração do Supabase

> A chave usada é a `anon public`, segura para uso no frontend. Nunca use a `service_role` key no código client-side.

---

## Configuração do cron-job.org

Para manter o Supabase ativo (evitar pausa por inatividade no plano gratuito), configurei um cronjob em [cron-job.org](https://cron-job.org) que faz uma requisição GET todos os dias, mantendo o banco em funcionamento

---

## Round-robin de consultores

A distribuição de leads entre consultores é feita via contador global no Supabase (tabela `round_robin`). A cada conversão, um novo consultor é selecionado.

---

Colunas registradas:

| Coluna | Descrição |
|---|---|
| ID | ID do Supabase |
| Data/Hora | Horário de Brasília |
| Origem | 📋 Formulário ou 🖱️ Botão |
| Nome | Nome preenchido no formulário |
| WhatsApp | Telefone com DDD |
| Cidade | Cidade informada |
| Tipo de Plano | Plano selecionado |
| Nº Pessoas | Quantidade de beneficiários |
| PF / PJ | Pessoa Física ou Jurídica |
| Observações | Campo livre |
| Consultor | Nome do consultor atribuído |
| Telefone Consultor | WhatsApp do consultor |
