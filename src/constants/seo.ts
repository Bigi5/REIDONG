export const SEO_CONFIG = {
  siteName: "REID ONG",
  siteUrl: "https://reid-ong.org",
  defaultTitle: "REID ONG | Recherche – Éducation – Initiatives et Développement",
  defaultDescription:
    "REID ONG agit pour l’éducation, la santé, le développement, la gouvernance et la protection des populations vulnérables au Bénin.",
  defaultImage: "https://reid-ong.org/og-image.jpg",
  locale: "fr_FR",
  themeColor: "#047857",
};

export const PAGES_SEO = {
  home: {
    title: "REID ONG | ONG engagée au Bénin",
    description:
      "Découvrez REID ONG, ses actions de sensibilisation VIH/SIDA, ses activités en milieu scolaire, ses domaines d’intervention et ses zones d’action au Bénin.",
    path: "/",
  },
  gallery: {
    title: "Galerie | Photos des actions REID ONG",
    description:
      "Consultez les galeries santé, éducation et terrain de REID ONG, avec des photos d’exemple en attendant les archives officielles.",
    path: "/galerie",
  },
  contact: {
    title: "Contact | REID ONG",
    description:
      "Contactez REID ONG pour un partenariat, une demande d’information, un don ou une action de terrain.",
    path: "/contact",
  },
  legal: {
    title: "Mentions légales | REID ONG",
    description:
      "Retrouvez les mentions légales et documents officiels à joindre au site institutionnel de REID ONG.",
    path: "/mentions-legales",
  },
} as const;
