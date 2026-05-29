import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Scale,
  ShieldCheck,
  Users,
  Star,
  Quote,
} from "lucide-react";
import { Seo } from "@/components/seo/SEO";
import { PAGES_SEO } from "@/constants/seo";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const heroImage = "/images/1.png";

// ========== IMAGES LIBRES DE DROITS (AFRIQUE) ==========
// Remplacer ces URLs par les vraies images du client plus tard
const IMAGES = {
  // Projets
  education: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  sante: "https://images.pexels.com/photos/4226031/pexels-photo-4226031.jpeg?auto=compress&cs=tinysrgb&w=800",
  communautaire: "https://images.pexels.com/photos/7703885/pexels-photo-7703885.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Actualités
  newsPrevention: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
  newsConsultation: "https://images.pexels.com/photos/4266552/pexels-photo-4266552.jpeg?auto=compress&cs=tinysrgb&w=800",
  newsEducation: "https://images.pexels.com/photos/3769977/pexels-photo-3769977.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Galerie
  gallerySante: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
  galleryEducation: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  galleryJeunesse: "https://images.pexels.com/photos/3769977/pexels-photo-3769977.jpeg?auto=compress&cs=tinysrgb&w=800",
  galleryCommunaute: "https://images.pexels.com/photos/7703885/pexels-photo-7703885.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Santé
  healthWorker: "https://images.pexels.com/photos/4226031/pexels-photo-4226031.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const missions = [
  "Apporter un appui moral, matériel et financier aux enfants de la rue, abandonnés, malades mentaux et handicapés",
  "Œuvrer pour l'éducation de la couche juvénile et le renforcement des parcours scolaires",
  "Lutter contre la pratique des enfants placés",
  "Combattre le VIH/SIDA, le paludisme et d'autres maladies",
  "Encourager la protection et la promotion d'un environnement sain et durable",
  "Lutter contre la corruption sous toutes ses formes",
  "Proposer des projets de développement et de gouvernance",
];

const domaines = [
  { label: "Éducation", Icon: GraduationCap },
  { label: "Santé", Icon: HeartPulse },
  { label: "Recherche", Icon: BookOpen },
  { label: "Environnement", Icon: Leaf },
  { label: "Développement", Icon: Users },
  { label: "Initiatives", Icon: BriefcaseBusiness },
  { label: "Loisirs", Icon: Users },
  { label: "Microfinance", Icon: Landmark },
];

const zones = ["Atlantique", "Littoral", "Ouémé", "Plateaux", "Zou", "Collines", "Mono", "Couffo"];

const axes = [
  { label: "Protection des enfants vulnérables", Icon: ShieldCheck },
  { label: "Santé publique (VIH/SIDA, paludisme)", Icon: HeartPulse },
  { label: "Éducation et sensibilisation jeunesse", Icon: GraduationCap },
  { label: "Développement communautaire", Icon: Users },
  { label: "Environnement", Icon: Leaf },
  { label: "Lutte contre la corruption", Icon: Scale },
  { label: "Gouvernance", Icon: Landmark },
];

const activityItems = [
  "Événement : Journée mondiale de lutte contre le Sida",
  "Lieu : Hall des dockers de la SOBEMAP à Cotonou",
  "Heure : à partir de 10h",
  "Public cible : conducteurs, transporteurs de gros porteurs, dockers et usagers du Port Autonome de Cotonou",
  "Plus de 2 000 usagers sensibilisés",
];

const activityTargets = [
  "Conducteurs",
  "Transporteurs de gros porteurs",
  "Dockers",
  "Usagers du Port Autonome de Cotonou",
];

const activityOrganizers = [
  "REID ONG (initiatrice)",
  "Port Autonome de Cotonou",
  "SOBEMAP",
  "CNCB",
  "CNSR",
  "SONACOP",
  "PSI Bénin",
];

const preventionItems = [
  "Distribution de plus de 10 000 condoms masculins et féminins",
  "Conseils de prévention donnés par les spécialistes du PSI",
  "Projection du film « L'épidémie de l'Ombre » et débats éducatifs",
];

const meetingNotes = [
  "Plus de 2 000 usagers sensibilisés",
  "Projection de films de sensibilisation VIH/SIDA",
  "Le film « L'épidémie de l'Ombre » a fortement marqué les participants",
  "Conseils de prévention donnés par les spécialistes du PSI",
  "Distribution de plus de 10 000 condoms masculins et féminins",
];

const partnerLogos = [
  { name: "Port Autonome de Cotonou", domain: "portdecotonou.bj", logo: "https://www.google.com/s2/favicons?sz=128&domain=portdecotonou.bj" },
  { name: "PSI-Bénin", domain: "psi.org", logo: "https://www.google.com/s2/favicons?sz=128&domain=psi.org" },
  { name: "SOBEMAP", domain: "sobemap.com", logo: "https://www.google.com/s2/favicons?sz=128&domain=sobemap.com" },
  { name: "ORTB", domain: "ortb.bj", logo: "https://www.google.com/s2/favicons?sz=128&domain=ortb.bj" },
  { name: "Corridor Abidjan-Lagos", domain: "corridor-wa.org", logo: "https://www.google.com/s2/favicons?sz=128&domain=corridor-wa.org" },
];

const programme = [
  ["09h30", "Mise en place de chaque composante de la cible", "Organisation REID ONG"],
  ["10h00", "Installation des invités et membres du comité d'organisation", "REID ONG et partenaires"],
  ["11h00", "Allocution de bienvenue", "REID ONG"],
  ["11h15", "Discours du Président de REID ONG", "GABIN MAGLOIRE HOUNDJE"],
  ["11h30", "Projections cinématographiques et débats", "Participants et équipe de sensibilisation"],
  ["15h00", "Projection du film « L'épidémie de l'Ombre »", "PSI Bénin"],
  ["15h00", "Fin de la sensibilisation", "Retour sur les engagements"],
];

const sampleProjects = [
  {
    category: "Éducation",
    title: "Programme scolaire de prévention VIH/SIDA",
    zone: "Écoles de Cotonou et Porto-Novo",
    image: IMAGES.education,
    text: "Sensibilisation des élèves et des enseignants avec des outils éducatifs concrets, plaidoyer et formation sur la santé reproductive.",
  },
  {
    category: "Santé",
    title: "Campagne mobile de santé communautaire",
    zone: "Quartiers populaires du Littoral",
    image: IMAGES.sante,
    text: "Consultations médicales, dépistage et distribution de kits de prévention pour les familles vulnérables.",
  },
  {
    category: "Communauté",
    title: "Actions de terrain et mobilisation locale",
    zone: "Zones du Bénin Atlantique",
    image: IMAGES.communautaire,
    text: "Rencontres de proximité avec les leaders locaux, constructions d'espaces scolaires et animations de groupes.",
  },
];

const sampleNews = [
  {
    title: "Campagne de prévention VIH/SIDA dans les écoles primaires",
    text: "Ateliers de sensibilisation et distribution d'outils pédagogiques auprès des enfants et des enseignants.",
    image: IMAGES.newsPrevention,
  },
  {
    title: "Session santé et consultation mobile à Cotonou",
    text: "Un stand de santé a permis des consultations de proximité et la sensibilisation des familles sur les risques sanitaires.",
    image: IMAGES.newsConsultation,
  },
  {
    title: "Atelier communautaire pour l'éducation des jeunes filles",
    text: "Journée de formation et d'échange avec les leaders locaux autour de l'accès à l'éducation et à la protection.",
    image: IMAGES.newsEducation,
  },
];

const sampleStats = [
  ["2 000+", "personnes sensibilisées"],
  ["10 000+", "kits de prévention"],
  ["8", "départements actifs"],
  ["15+", "établissements scolaires"],
];

const schoolActivities = ["débats", "causeries", "projections de films"];
const schoolPlaces = [
  "CEG VEDOKO",
  "CEG GODOMEY",
  "CEG ABOMEY CALAVI",
  "CEG ENTENTE",
  "CEG ZOGBO",
  "CEG GBEGAMEY",
  "CEG DANTOKPA",
  "CEG HOUEYIHO",
  "CEG LE NOKOUE",
  "LYCEE DES PRINCES",
  "LA PERFORMANCE",
  "CAFRET",
  "LES PYRAMIDES",
  "LE DESIR",
  "LA FLÈCHE",
];

const facilitators = [
  "DAGBA Christine",
  "KINDJIHOSSOU Hermann",
  "KINDJIHOSSOU Wilfrid",
  "ATTINMALINHEKOU Bernard",
  "BOYINOU Iréné",
  "HOUENOU Antoine",
  "GBEDIGA Paul",
  "GBOWUI Franck",
  "BINANZON Pierre",
  "ASSOGBA Cédrik",
];

const sponsors = ["Corridor Abidjan-Lagos", "PSI Bénin", "Port Autonome de Cotonou", "SOBEMAP", "ORTB"];

const testimonials = [
  {
    name: "Jean-Marc Assogba",
    role: "Chef de quartier, Cotonou",
    content: "REID ONG a transformé notre communauté. Les actions de sensibilisation ont eu un réel impact sur nos jeunes.",
    rating: 5,
  },
  {
    name: "Dr. Alice Kouton",
    role: "Médecin coordinateur",
    content: "Professionnalisme et dévouement exceptionnels. Les campagnes de santé menées par REID ONG sont d'une grande efficacité.",
    rating: 5,
  },
  {
    name: "Mamadou Diallo",
    role: "Parent d'élève",
    content: "Grâce aux programmes éducatifs, mes enfants sont mieux informés sur les risques du SIDA. Merci REID ONG !",
    rating: 5,
  },
];

function Reveal({ children, className = "" }: { readonly children: ReactNode; readonly className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ kicker, title, text, light = false }: { readonly kicker: string; readonly title: string; readonly text?: string; readonly light?: boolean }) {
  return (
    <div className="mb-12 max-w-4xl">
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.22em] ${light ? "text-emerald-200" : "text-emerald-700"}`}>
        {kicker}
      </p>
      <h2 className={`font-display text-4xl font-semibold leading-[1.05] md:text-6xl ${light ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 max-w-2xl text-lg leading-8 ${light ? "text-emerald-50" : "text-slate-600"}`}>{text}</p> : null}
    </div>
  );
}

export function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-[#F5F7FA] to-white text-slate-950">
      <Seo {...PAGES_SEO.home} />
      <FloatingWhatsApp />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">
        <motion.img
          src={heroImage}
          alt="Actions terrain REID ONG au Bénin"
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        
        <div className="container-xl relative z-10 flex min-h-[calc(100vh-7.5rem)] items-center px-4 py-24 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/15 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-200 backdrop-blur-sm">
              🇧🇯 ONG humanitaire – Bénin
            </span>
            
            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Ensemble, nous construisons un avenir meilleur pour les communautés béninoises.
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl">
              REID ONG agit concrètement pour l'éducation, la santé et le développement local. 
              Sensibilisation, prévention et accompagnement sur tout le territoire.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/#actions" className="rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-emerald-400">
                Découvrir nos actions
              </Link>
              <Link to="/contact" className="rounded-full border border-white/30 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Nous rejoindre
              </Link>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-8 border-t border-white/20 pt-8">
              <div>
                <p className="text-3xl font-bold text-emerald-300">+4 500</p>
                <p className="text-sm text-slate-300">Enfants accompagnés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-300">+120</p>
                <p className="text-sm text-slate-300">Campagnes menées</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-300">8</p>
                <p className="text-sm text-slate-300">Départements actifs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="relative -mt-20 z-20 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">Notre territoire</span>
                <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Zones d'intervention</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {zones.map((zone, idx) => (
                  <motion.span
                    key={zone}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 px-5 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm hover:shadow-md transition-all"
                  >
                    {zone}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="section-padding pt-32">
        <div className="container-xl">
          <Reveal>
            <SectionTitle 
              kicker="Notre raison d'être" 
              title="REID ONG agit pour :" 
              text="Une organisation engagée au service des communautés béninoises."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => (
              <Reveal key={mission}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl border border-slate-100"
                >
                  <div className="mb-4 h-1 w-12 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-20"></div>
                  <p className="text-base leading-relaxed text-slate-700">{mission}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINES D'INTERVENTION */}
      <section className="section-padding bg-gradient-to-br from-emerald-700 to-emerald-800 text-white">
        <div className="container-xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">Nos domaines</span>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Secteurs d'intervention</h2>
              <p className="mt-4 max-w-2xl mx-auto text-emerald-100">8 domaines d'expertise au service du développement</p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domaines.map(({ label, Icon }) => (
              <Reveal key={label}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group rounded-2xl bg-white/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-white/20"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/20 group-hover:bg-emerald-400/30 transition-all">
                    <Icon className="h-7 w-7 text-emerald-200" />
                  </div>
                  <p className="font-semibold text-lg">{label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-4">
              {sampleStats.map(([value, label], idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <p className="text-5xl font-bold text-emerald-600">{value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-wide">{label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJETS PHARES */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Nos réalisations" title="Projets phares" text="Des actions concrètes qui transforment les communautés." />
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-3">
            {sampleProjects.map((project) => (
              <Reveal key={project.title}>
                <motion.article 
                  whileHover={{ y: -8 }}
                  className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-slate-950">{project.title}</h3>
                    <p className="mb-4 text-sm text-slate-600 leading-relaxed">{project.text}</p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-emerald-600">{project.zone}</span>
                      <Link to="/#" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition">En savoir plus →</Link>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAGNE VIH/SIDA */}
      <section id="activites-terrain" className="section-padding bg-white">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Action terrain" title="Campagne de sensibilisation VIH/SIDA" text="Mobilisation des communautés et prévention auprès des populations du port de Cotonou." />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white">
                <img src={IMAGES.healthWorker} alt="Agent de santé" loading="lazy" decoding="async" className="h-72 w-full object-cover opacity-90" />
                <div className="p-8">
                  <h3 className="mb-6 text-2xl font-semibold">Contexte</h3>
                  <ul className="space-y-4 text-sm leading-7 text-slate-100">
                    {activityItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <div className="space-y-7">
              <Reveal>
                <div className="rounded-[2rem] bg-[#f7f4e8] p-8">
                  <h3 className="mb-6 text-2xl font-semibold text-slate-950">Cible</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activityTargets.map((target) => (
                      <span key={target} className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="rounded-[2rem] bg-[#f7f4e8] p-8">
                  <h3 className="mb-6 text-2xl font-semibold text-slate-950">Organisateurs et partenaires</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {activityOrganizers.map((organizer) => (
                      <div key={organizer} className="rounded-3xl bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                        {organizer}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-3xl bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Intervenant spécialisé</p>
                    <p className="mt-2 text-sm font-semibold text-slate-700">PSI-Bénin (projection de films et conseils spécialisés)</p>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="rounded-[2rem] bg-[#f7f4e8] p-8">
                  <h3 className="mb-6 text-2xl font-semibold text-slate-950">Logos partenaires</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {partnerLogos.map((partenaire) => (
                      <div key={partenaire.name} className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50">
                          <img src={partenaire.logo} alt={`Logo ${partenaire.name}`} loading="lazy" decoding="async" className="h-10 w-10 object-contain" />
                        </div>
                        <div>
                          <p className="text-sm font-bold leading-snug text-slate-950">{partenaire.name}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{partenaire.domain}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
                  <div className="bg-emerald-50 px-6 py-5">
                    <h3 className="text-xl font-semibold text-slate-950">Programme horaire</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm text-slate-700">
                      <thead className="bg-white text-xs uppercase tracking-[0.16em] text-slate-400">
                        <tr>
                          <th className="px-6 py-4">Horaire</th>
                          <th className="px-6 py-4">Programme</th>
                          <th className="px-6 py-4">Responsable</th>
                        </tr>
                      </thead>
                      <tbody>
                        {programme.map(([heure, item, responsable]) => (
                          <tr key={`${heure}-${item}`} className="border-t border-slate-100">
                            <td className="whitespace-nowrap px-6 py-4 font-semibold text-emerald-800">{heure}</td>
                            <td className="px-6 py-4">{item}</td>
                            <td className="px-6 py-4">{responsable || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="rounded-[2rem] bg-[#1E5AA8] p-8 text-white">
                  <h3 className="mb-6 text-2xl font-semibold">Prévention, suite et demande de la cible</h3>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Prévention</p>
                      <ul className="space-y-3 text-sm leading-7 text-sky-50">
                        {preventionItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Suite de la journée</p>
                      <ul className="space-y-3 text-sm leading-7 text-sky-50">
                        {meetingNotes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RAPPORT SCOLAIRE */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Rapport d'activités" title="Sensibilisation sur le SIDA en milieu scolaire" text="Exemples d'actions de terrain et de sensibilisation au sein des écoles." />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              ["Lieux (15 écoles)", schoolPlaces.slice(0, 8)],
              ["Activités", schoolActivities],
              ["Animateurs (10)", facilitators],
              ["Sponsors", sponsors],
            ].map(([title, items]) => (
              <Reveal key={title as string}>
                <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                  <h3 className="mb-5 text-2xl font-semibold text-slate-950">{title as string}</h3>
                  <ul className="space-y-3 text-sm text-slate-700">
                    {(items as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section id="actualites" className="section-padding bg-white">
        <div className="container-xl">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionTitle kicker="Actualités" title="Dernières nouvelles" />
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-emerald-800">
                Proposer une actualité
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-7 lg:grid-cols-3">
            {sampleNews.map((item) => (
              <Reveal key={item.title}>
                <article className="overflow-hidden rounded-[2rem] bg-[#f7f4e8] transition-all duration-300 hover:shadow-xl">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-64 w-full object-cover" />
                  <div className="p-7">
                    <h3 className="mb-4 text-2xl font-semibold leading-tight text-slate-950">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-xl">
          <Reveal>
            <div className="text-center mb-12">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600">Ils nous font confiance</span>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 md:text-4xl">Témoignages</h2>
              <p className="mt-3 text-slate-500 max-w-2xl mx-auto">Ce que nos partenaires et bénéficiaires disent de notre travail.</p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Reveal key={t.name}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-gradient-to-br from-white to-[#f7f4e8] p-6 shadow-md border border-slate-100"
                >
                  <Quote className="mb-4 h-8 w-8 text-emerald-300" />
                  <p className="mb-4 text-slate-700 italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galeries" className="section-padding bg-white">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Galerie" title="Moments de terrain et actions communautaires" />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <Link to="/galerie?sante" className="group block overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-2xl">
                <img src={IMAGES.gallerySante} alt="Campagne santé communautaire" loading="lazy" decoding="async" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="flex items-center justify-between border-t border-slate-100 px-6 py-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-700">Santé communautaire</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                    Voir tout
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
            <div className="grid gap-5">
              {[
                { src: IMAGES.galleryEducation, label: "Éducation scolaire", href: "/galerie?education" },
                { src: IMAGES.galleryJeunesse, label: "Jeunesse en action", href: "/galerie?terrain" },
                { src: IMAGES.galleryCommunaute, label: "Mobilisation locale", href: "/galerie?communautaire" },
              ].map((item) => (
                <Reveal key={item.src}>
                  <Link to={item.href} className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                    <img src={item.src} alt={item.label} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="flex items-center justify-between p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                        Voir tout
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}