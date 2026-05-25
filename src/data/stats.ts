export const IMPACT_STATS = [
  { id: 1, value: 47820,  suffix: "+", label: "Bénéficiaires",       description: "Personnes aidées directement", icon: "Users" },
  { id: 2, value: 156,    suffix: "",  label: "Projets réalisés",    description: "Projets menés à travers nos programmes",        icon: "CheckCircle" },
  { id: 3, value: 28,     suffix: "",  label: "Pays partenaires",    description: "Présence internationale",      icon: "Globe" },
  { id: 4, value: 3200,   suffix: "+", label: "Arbres plantés",      description: "Pour la reforestation",        icon: "TreePine" },
  { id: 5, value: 94,     suffix: "%", label: "Taux de satisfaction", description: "Selon nos bénéficiaires",     icon: "Star" },
  { id: 6, value: 12.4,   suffix: "M€",label: "Fonds mobilisés",     description: "Depuis notre création",        icon: "TrendingUp" },
];

export const ANNUAL_STATS = [
  { year: "2020", beneficiaries: 18000, projects: 22, funds: 1.8 },
  { year: "2021", beneficiaries: 24500, projects: 28, funds: 2.1 },
  { year: "2022", beneficiaries: 31000, projects: 34, funds: 2.6 },
  { year: "2023", beneficiaries: 39000, projects: 41, funds: 3.1 },
  { year: "2024", beneficiaries: 47820, projects: 51, funds: 2.8 },
];

export const DOMAIN_STATS = [
  { domain: "Éducation",     value: 38, color: "#10b981" },
  { domain: "Environnement", value: 34, color: "#34d399" },
  { domain: "Social",        value: 28, color: "#6ee7b7" },
];

export const DASHBOARD_MOCK = {
  visitors: {
    today:       1284,
    thisWeek:    8940,
    thisMonth:   34210,
    trend:       "+12.4%",
  },
  donations: {
    today:       3420,
    thisMonth:   28500,
    thisYear:    342000,
    count:       847,
    avg:         403,
  },
  engagement: {
    bounceRate:  "28%",
    avgSession:  "4m 32s",
    pagesPerSession: 3.8,
  },
  monthlyVisitors: [
    { month: "Jan", visitors: 22400, donations: 18200 },
    { month: "Fév", visitors: 19800, donations: 15600 },
    { month: "Mar", visitors: 28900, donations: 24100 },
    { month: "Avr", visitors: 31200, donations: 27800 },
    { month: "Mai", visitors: 34210, donations: 28500 },
    { month: "Jun", visitors: 29100, donations: 22900 },
    { month: "Jul", visitors: 26800, donations: 19400 },
    { month: "Aoû", visitors: 24500, donations: 17800 },
    { month: "Sep", visitors: 32100, donations: 26200 },
    { month: "Oct", visitors: 38900, donations: 31400 },
    { month: "Nov", visitors: 42300, donations: 35600 },
    { month: "Déc", visitors: 48100, donations: 41200 },
  ],
  recentDonations: [
    { name: "Marie D.",    amount: 150,  date: "Il y a 2 min",   country: "🇫🇷" },
    { name: "John S.",     amount: 500,  date: "Il y a 8 min",   country: "🇬🇧" },
    { name: "Amara K.",    amount: 75,   date: "Il y a 15 min",  country: "🇸🇳" },
    { name: "Léa M.",      amount: 250,  date: "Il y a 23 min",  country: "🇧🇪" },
    { name: "Carlos R.",   amount: 1000, date: "Il y a 31 min",  country: "🇪🇸" },
    { name: "Fatou B.",    amount: 50,   date: "Il y a 45 min",  country: "🇨🇮" },
    { name: "Pierre V.",   amount: 300,  date: "Il y a 1h",      country: "🇨🇭" },
  ],
  topPages: [
    { page: "/",           views: 12840, trend: "+8%" },
    { page: "/projets",    views: 8920,  trend: "+14%" },
    { page: "/contact",    views: 7340,  trend: "+22%" },
    { page: "/education",  views: 5210,  trend: "+5%" },
    { page: "/blog",       views: 4180,  trend: "-2%" },
  ],
};
