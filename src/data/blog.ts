export type BlogPost = {
  id:        string;
  title:     string;
  excerpt:   string;
  content:   string;
  author:    string;
  authorAvatar: string;
  date:      string;
  readTime:  string;
  category:  "environment" | "education" | "social" | "news";
  image:     string;
  tags:      string[];
  featured:  boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "rapport-annuel-2024",
    title: "Rapport d'impact 2024 : Une année de records",
    excerpt: "Découvrez comment REID ONG a atteint de nouveaux sommets en 2024, avec plus de 47 000 bénéficiaires et 51 projets menés à bien sur 4 continents.",
    content: "Contenu complet de l'article...",
    author: "Direction REID ONG",
    authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop",
    date: "15 janvier 2025",
    readTime: "8 min",
    category: "news",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop",
    tags: ["rapport", "impact", "2024"],
    featured: true,
  },
  {
    id: "mangroves-victoire",
    title: "Les mangroves togolaises renouées avec la vie",
    excerpt: "À Lomé, notre projet de restauration des mangroves franchit un cap historique : 45 000 plants survivants et une biodiversité marine en plein renouveau.",
    content: "Contenu complet de l'article...",
    author: "Équipe Environnement",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    date: "3 décembre 2024",
    readTime: "5 min",
    category: "environment",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop",
    tags: ["mangroves", "Togo", "biodiversité"],
    featured: true,
  },
  {
    id: "ecoles-solaires-inauguration",
    title: "Inauguration de 3 nouvelles écoles solaires au Sahel",
    excerpt: "Dans une cérémonie émouvante à Ouagadougou, 3 nouvelles salles de classe équipées de panneaux solaires ont ouvert leurs portes à 280 enfants.",
    content: "Contenu complet de l'article...",
    author: "Équipe Éducation",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    date: "18 novembre 2024",
    readTime: "4 min",
    category: "education",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&auto=format&fit=crop",
    tags: ["éducation", "solaire", "Burkina Faso"],
    featured: false,
  },
  {
    id: "microfinance-bilan",
    title: "Microfinance au Sénégal : 340 micro-entreprises créées",
    excerpt: "Le bilan du programme Femmes Entrepreneures dépasse toutes nos espérances. Retour sur une aventure humaine et économique extraordinaire.",
    content: "Contenu complet de l'article...",
    author: "Équipe Sociale",
    authorAvatar: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=200&auto=format&fit=crop",
    date: "5 octobre 2024",
    readTime: "6 min",
    category: "social",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&auto=format&fit=crop",
    tags: ["microfinance", "femmes", "Sénégal"],
    featured: false,
  },
  {
    id: "cop-29-reid",
    title: "REID ONG à la COP29 : nos engagements climatiques",
    excerpt: "Notre délégation a participé activement aux négociations climatiques et signé 3 accords de partenariat avec des ONG internationales.",
    content: "Contenu complet de l'article...",
    author: "Direction REID ONG",
    authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop",
    date: "22 novembre 2024",
    readTime: "7 min",
    category: "environment",
    image: "https://images.unsplash.com/photo-1532453288672-3a17ac36f5ec?w=800&auto=format&fit=crop",
    tags: ["COP29", "climat", "partenariat"],
    featured: false,
  },
  {
    id: "eau-mali-inaugurations",
    title: "48 pompes à eau : l'accès à l'eau potable pour 8 500 Maliens",
    excerpt: "Après 18 mois de travaux dans des conditions difficiles, la dernière pompe solaire est opérationnelle. Une victoire collective pour la vie.",
    content: "Contenu complet de l'article...",
    author: "Équipe Eau & Santé",
    authorAvatar: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=200&auto=format&fit=crop",
    date: "12 septembre 2024",
    readTime: "5 min",
    category: "social",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?w=800&auto=format&fit=crop",
    tags: ["eau", "Mali", "santé"],
    featured: false,
  },
];
