export type Project = {
  id:          string;
  title:       string;
  domain:      "education" | "environment" | "social";
  status:      "ongoing" | "completed" | "upcoming";
  location:    string;
  country:     string;
  year:        number;
  beneficiaries: number;
  budget:      string;
  description: string;
  image:       string;
  tags:        string[];
};

export const PROJECTS: Project[] = [
  {
    id: "ecoles-vertes",
    title: "Écoles Vertes du Sahel",
    domain: "education",
    status: "ongoing",
    location: "Ouagadougou, Burkina Faso",
    country: "🇧🇫",
    year: 2023,
    beneficiaries: 4200,
    budget: "380 000 €",
    description:
      "Construction de 12 salles de classe solaires avec accès à l'eau potable et programme de bourses pour 400 élèves défavorisés. Ce projet innovant allie éducation de qualité et durabilité environnementale.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&auto=format&fit=crop",
    tags: ["éducation", "solaire", "sahel", "bourses"],
  },
  {
    id: "reforestation-congo",
    title: "Corridor Vert du Congo",
    domain: "environment",
    status: "ongoing",
    location: "Kinshasa, RD Congo",
    country: "🇨🇩",
    year: 2022,
    beneficiaries: 18000,
    budget: "520 000 €",
    description:
      "Programme de reforestation couvrant 2 500 hectares avec implication des communautés locales. Plantation de 180 000 arbres endémiques et formation de 200 éco-gardes.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop",
    tags: ["reforestation", "biodiversité", "Congo", "forêt"],
  },
  {
    id: "microfinance-senegal",
    title: "Femmes Entrepreneures du Sénégal",
    domain: "social",
    status: "completed",
    location: "Dakar, Sénégal",
    country: "🇸🇳",
    year: 2021,
    beneficiaries: 1240,
    budget: "215 000 €",
    description:
      "Programme de microfinance et de formation entrepreneuriale pour 1 240 femmes en situation précaire. Taux de remboursement de 96% et création de 340 micro-entreprises pérennes.",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&auto=format&fit=crop",
    tags: ["microfinance", "femmes", "entrepreneuriat", "Sénégal"],
  },
  {
    id: "eau-mali",
    title: "Eau Pure pour Tous",
    domain: "social",
    status: "ongoing",
    location: "Bamako & régions, Mali",
    country: "🇲🇱",
    year: 2023,
    beneficiaries: 8500,
    budget: "290 000 €",
    description:
      "Installation de 48 pompes à eau solaires dans les zones rurales, approvisionnant 8 500 personnes en eau potable. Formation des communautés à la maintenance des équipements.",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=800&auto=format&fit=crop",
    tags: ["eau", "solaire", "rural", "santé"],
  },
  {
    id: "numerique-madagascar",
    title: "Digital pour Demain",
    domain: "education",
    status: "upcoming",
    location: "Antananarivo, Madagascar",
    country: "🇲🇬",
    year: 2025,
    beneficiaries: 3000,
    budget: "160 000 €",
    description:
      "Déploiement de 60 laboratoires numériques dans les écoles secondaires et formation de 120 enseignants au numérique. Objectif : préparer la jeunesse malgache aux emplois de demain.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
    tags: ["numérique", "éducation", "formation", "jeunesse"],
  },
  {
    id: "mangroves-togo",
    title: "Mangroves de l'Atlantique",
    domain: "environment",
    status: "ongoing",
    location: "Lomé, Togo",
    country: "🇹🇬",
    year: 2022,
    beneficiaries: 12000,
    budget: "175 000 €",
    description:
      "Restauration de 800 hectares de mangroves sur la côte togolaise, protégeant les villages côtiers de l'érosion et préservant la biodiversité marine. 45 000 plants mis en terre.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop",
    tags: ["mangroves", "côte", "biodiversité", "Togo"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name:    "Aminata Koné",
    role:    "Bénéficiaire - Projet Écoles Vertes",
    country: "Burkina Faso",
    quote:   "Grâce à REID ONG, ma fille peut aller à l'école dans une salle fraîche et lumineuse. L'avenir lui appartient désormais.",
    avatar:  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop&crop=face",
    rating:  5,
  },
  {
    id: 2,
    name:    "Dr. Emmanuel Mvondo",
    role:    "Partenaire local — RD Congo",
    country: "Congo",
    quote:   "Le Corridor Vert est une réussite exemplaire. Les communautés s'approprient le projet et les résultats sur la biodiversité sont déjà visibles.",
    avatar:  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=200&auto=format&fit=crop&crop=face",
    rating:  5,
  },
  {
    id: 3,
    name:    "Mariam Diallo",
    role:    "Entrepreneuse — Projet Femmes",
    country: "Sénégal",
    quote:   "Mon salon de coiffure tourne bien maintenant. J'emploie deux femmes de mon quartier. REID ONG m'a donné bien plus qu'un prêt — une confiance en moi.",
    avatar:  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&auto=format&fit=crop&crop=face",
    rating:  5,
  },
  {
    id: 4,
    name:    "Sophie Laurent",
    role:    "Donatrice depuis 2018",
    country: "France",
    quote:   "Je donne chaque mois à REID ONG car je sais que chaque euro est utilisé avec rigueur et transparence. Le rapport annuel en est la preuve.",
    avatar:  "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop&crop=face",
    rating:  5,
  },
];
