export const person = {
  name: "Costanza Pasquotto Assef",
  title: "Desenvolvedora Full Stack",
  focus: "Full stack, viés em front",
  location: "Santa Catarina, Brasil",
  availability: "Florianópolis presencial ou remoto — A combinar.",
  phone: "(47) 98804-1237",
  phoneHref: "tel:+5547988041237",
  email: "pinassef22@gmail.com",
  linkedin: "https://www.linkedin.com/in/costanzaassef",
  github: "https://github.com/Costanza22",
} as const;

export const intro =
  "Olá! Me chamo Costanza, sou Engenheira de Software, estudante de Especialização em Inteligência Aplicada pela UFPR";
export const experience = [
  {
    role: "Desenvolvedora Mobile",
    org: "Rota Financeira · Freelance",
    location: "Remoto",
    period: "mar. 2026 — atual",
    bullets: [
      "App em React Native e Expo",
      "Consumo de APIs REST e tratamento de dado no fluxo do app.",
      "Git no dia a dia, commits no padrão Conventional Commits; código organizado.",
      "Time 100% remoto — alinhar entrega com produto e prioridade do negócio faz parte do trabalho.",
    ],
  },
  {
    role: "Desenvolvedora Full Stack · Voluntária",
    org: "Instituto Alume",
    location: "Ilhéus, BA · remoto",
    period: "jan. 2025 — atual",
    bullets: [
      "Site com foco em meio ambiente: Next.js no front, TypeScript no back, cuidado com acessibilidade e UX.",
      "Entro em planejamento de requisitos e arquitetura com o time; Scrum e review de PR fazem parte da rotina.",
    ],
  },
  {
    role: "Analista de Suporte Júnior",
    org: "Schulze Advogados",
    location: "Joinville, SC",
    period: "nov. 2024 — atual",
    bullets: [
      "Instalação e configuração de Active Directory, suporte a usuários, manutenção de hardware e software, monitoramento de sistemas e resolução de problemas técnicos para garantir o funcionamento eficiente da infraestrutura de TI do escritório.",
    ],
  },
  {
    role: "Estagiária de Inteligência de Mercado",
    org: "WEG S.A.",
    location: "Jaraguá do Sul, SC",
    period: "mar. 2024 — ago. 2024",
    bullets: [
      "Análise de dados de mercado, concorrência e tendências para fornecer insights estratégicos. Criação de dashboards e relatórios utilizando ferramentas como Tableau e Excel avançado, contribuindo para a tomada de decisões informadas pela equipe de inteligência de mercado.",
    ],
  },
] as const;

export const projects = [
  {
    name: "GlucoCare",
    tagline: "Glicose no bolso — React + Node + SQLite",
    period: "projeto autoral",
    context: "Full stack · Vite + Express",
    description:
      "App para registrar medições (mg/dL), ver tendência e histórico. Com o servidor no ar, tudo vai para SQLite via API; se cair, o front segue no localStorage e o header avisa “Dados locais”.",
    bullets: [
      "Dashboard e resumo (média 7 dias, meta 70–140, tendência), gráfico com Recharts, tema claro/escuro.",
      "CRUD completo, filtros, busca, export CSV, backup/restauração em JSON.",
    ],
    links: [
      { label: "Código", href: "https://github.com/Costanza22/gluco-care" },
      { label: "Demo", href: "https://gluco-care-kappa.vercel.app" },
    ],
    accent: "coral" as const,
  },
  {
    name: "FindThem",
    tagline: "TCC (UFPR) — desaparecidos e reconhecimento facial",
    period: "especialização IA · UFPR",
    context: "React · FastAPI · vetores",
    description:
      "Trabalho de conclusão da especialização em IA: sistema para apoiar identificação de pessoas desaparecidas com visão computacional e busca por similaridade de embeddings. Há documento de arquitetura, ética e privacidade no repo.",
    bullets: [
      "Front em React: casos, avistamentos, tela de possíveis matches.",
      "Back em FastAPI: embeddings faciais, API REST, base vetorial para similaridade.",
    ],
    links: [
      { label: "Código", href: "https://github.com/Costanza22/Find-Them" },
      { label: "Demo", href: "https://find-them-swart.vercel.app" },
    ],
    accent: "teal" as const,
  },
  {
    name: "Joi Patrio",
    tagline: "Patrimônio histórico em mapa (Joinville)",
    period: "abr. 2024 — jan. 2026",
    context: "Projeto independente · Remoto",
    description:
      "Projeto pessoal que saiu da curiosidade pelos casarões da cidade. Hoje tem site, variante mobile e um app de mapa",
    bullets: [
      "Desenvolvimento de um site e aplicativo móvel para mapear o patrimônio histórico de Joinville, utilizando React, Next.js e React Native. O projeto inclui um back-end em Node.js.",
    ],
    links: [
      { label: "Web", href: "https://github.com/Costanza22/Joi-Patrio-Novo" },
      { label: "Mobile", href: "https://github.com/Costanza22/patrio-visio-pro" },
      { label: "Mapa", href: "https://github.com/Costanza22/Heritage-App" },
    ],
    accent: "coral" as const,
  },
  {
    name: "BHT Detector",
    tagline: "Detector com visão computacional",
    period: "jun. 2024 — dez. 2025",
    context: "Projeto independente · Remoto",
    description:
      "Desenvolvimento de um detector de BHT  butylated hydroxytoluene usando visão computacional, com back-end em Python e FastAPI, e front-end em React e TypeScript. O projeto inclui experimentação com modelos de machine learning para detecção precisa de alergias alimentares, utilizando PyTorch e TensorFlow.",
    bullets: [
      "PyTorch e TensorFlow na parte de modelo.",
      "FastAPI ou Flask servindo inferência; React + TypeScript na interface; Docker para acesso fácil e portabilidade.",
    ],
    links: [{ label: "Repositório", href: "https://github.com/Costanza22/BHT-Detector" }],
    accent: "teal" as const,
  },
] as const;

export const volunteering = [
  {
    role: "Segurança Cibernética · Voluntária",
    org: "CyberDimension",
    period: "fev. 2025 — atual",
    bullets: [
      "Conteúdo e prática em segurança — reforço o que já venho estudando por fora do trabalho formal.",
    ],
  },
] as const;

export const education = [
  {
    degree: "Especialização em IA Aplicada (em andamento)",
    school: "Universidade Federal do Paraná (UFPR)",
    period: "fev. 2025 — fev. 2027",
  },
  {
    degree: "Bacharelado em Engenharia de Software",
    school: "Universidade Católica de Santa Catarina",
    location: "Joinville, SC",
    period: "mar. 2021 — dez. 2024",
  },
] as const;

export const skillGroups = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "TypeScript", "Express", "SQLite", "FastAPI", "Flask", "REST APIs"],
  },
  {
    title: "IA / Visão computacional",
    items: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
  },
  {
    title: "DevOps & ferramentas",
    items: ["Git", "Docker", "Postman", "MySQL", "Tableau"],
  },
] as const;

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Alemão", level: "Avançado" },
  { name: "Inglês", level: "Avançado" },
] as const;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#voluntariado", label: "Voluntariado" },
  { href: "#formacao", label: "Formação" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
] as const;
