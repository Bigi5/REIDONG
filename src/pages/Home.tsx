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
} from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { PAGES_SEO } from "@/constants/seo";

const heroImage =
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1800&q=85";

const missions = [
  "appui moral, matériel et financier aux enfants de la rue, abandonnés, malades mentaux et handicapés",
  "éducation de la jeunesse et développement des localités du Bénin",
  "lutte contre enfants placés, VIH/SIDA, paludisme et autres maladies",
  "protection de l’environnement et développement durable",
  "lutte contre la corruption",
  "gouvernance et développement",
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

const competences = [
  "Financiers",
  "Économistes",
  "Gestionnaires",
  "Juristes",
  "Médecins",
  "Sociologues",
  "Auditeurs",
  "Environnementalistes",
  "Géoéconomistes",
  "Ingénieurs agronomes",
  "Experts RH",
];

const activityItems = [
  "Événement : 22ème journée mondiale de lutte contre le SIDA",
  "Lieu : Hall des dockers de la SOBEMAP",
  "Heure de début : 10h",
  "Heure de fin : 18h",
  "Plus de 2 000 usagers sensibilisés",
];

const activityTargets = [
  "Conducteurs",
  "Transporteurs de gros porteurs",
  "Dockers",
  "Autres usagers du Port Autonome de Cotonou",
  "Usagers de la SOBEMAP",
];

const activityOrganizers = [
  "ONG REID (initiatrice)",
  "Unités locales de lutte contre le SIDA du Port Autonome de Cotonou",
  "SOBEMAP",
  "CNCB",
  "CNSR",
  "SONACOP",
];

const preventionItems = [
  "Distribution de plus de 10 000 condoms masculins et féminins",
  "Distribution de gadgets",
  "Conseils des spécialistes du PSI sur les comportements à tenir en cas de séropositivité et les moyens de prévention",
];

const meetingNotes = [
  "Film projeté : « L’épidémie de l’Ombre »",
  "Impact : a retenu l’attention et a eu un impact réel sur les mentalités à travers des cas réels de malades du SIDA et de MST",
  "Après le Hall des dockers, déplacement au stade de l’Amitié pour animer le stand de l’unité focale de la SOBEMAP",
  "Fin de la journée vers 18h sur une note de satisfaction de toutes et de tous",
  "Demande de la cible : pérennisation de l’action 2 à 4 fois par an",
  "Condition : partenariat entre REID ONG, Port Autonome de Cotonou, SOBEMAP et autres structures",
];

const partnerLogos = [
  { name: "Port Autonome de Cotonou", domain: "portdecotonou.bj", logo: "https://www.google.com/s2/favicons?sz=128&domain=portdecotonou.bj" },
  { name: "PSI-Bénin", domain: "psi.org", logo: "https://www.google.com/s2/favicons?sz=128&domain=psi.org" },
  { name: "SOBEMAP", domain: "sobemap.com", logo: "https://www.google.com/s2/favicons?sz=128&domain=sobemap.com" },
  { name: "ORTB", domain: "ortb.bj", logo: "https://www.google.com/s2/favicons?sz=128&domain=ortb.bj" },
  { name: "Corridor Abidjan-Lagos", domain: "corridor-wa.org", logo: "https://www.google.com/s2/favicons?sz=128&domain=corridor-wa.org" },
];

const programme = [
  ["09h30", "Mise en place de chaque composante de la cible", ""],
  ["10h00", "Installation des invités et membres du comité d'organisation", "REID ONG, PSI, UF SOBEMAP, UF PAPC"],
  ["11h00", "Allocution de bienvenue", "Mr APOVO Christophe (UF SOBEMAP)"],
  ["11h15", "Discours", "Mr HOUNDJE Gabin M (REID ONG / PSI Réunion)"],
  ["11h30", "Projections cinématographiques et télévisuelles suivies de débats", ""],
  ["15h00", "Projection du film « Épidémie de l'Ombre »", "REID ONG"],
  ["15h00", "Fin de la sensibilisation", ""],
];

const sampleProjects = [
  {
    category: "Rencontre",
    title: "Journée mondiale de lutte contre le SIDA",
    zone: "Hall des dockers de la SOBEMAP",
    date: "1er décembre 2009",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=85",
    text: "Sensibilisation de plus de 2 000 usagers du Port Autonome de Cotonou et de la SOBEMAP, avec projection de films, débats et conseils spécialisés de PSI-Bénin.",
  },
  {
    category: "Milieu scolaire",
    title: "Sensibilisation sur le SIDA en milieu scolaire",
    zone: "15 établissements",
    date: "Mai 2009",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=85",
    text: "Débats, causeries et projections de films dans les établissements scolaires, avec une équipe de 10 animateurs.",
  },
  {
    category: "Prévention",
    title: "Projection du film « L’épidémie de l’Ombre »",
    zone: "Port Autonome de Cotonou",
    date: "1er décembre 2009",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85",
    text: "Le film a retenu l’attention et a eu un impact réel sur les mentalités à travers des cas réels de malades du SIDA et de MST.",
  },
];

const sampleNews = [
  {
    title: "Exemple d’actualité : rencontre avec les jeunes",
    text: "Contenu factice à remplacer par une actualité réelle de REID ONG.",
    date: "12 mai 2026",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Exemple d’actualité : action de sensibilisation",
    text: "Contenu factice pour présenter une mise à jour terrain.",
    date: "28 avril 2026",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Exemple d’actualité : atelier communautaire",
    text: "Contenu factice à enrichir avec les communiqués officiels.",
    date: "17 mars 2026",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85",
  },
];

const sampleStats = [
  ["2 000+", "usagers sensibilisés en 2009"],
  ["10 000+", "préservatifs distribués en 2009"],
  ["8", "zones d’intervention"],
  ["11", "compétences internes"],
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
const sponsors = ["Corridor", "Port Autonome de Cotonou", "Psi Bénin"];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
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

function SectionTitle({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
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
    <main className="bg-[#fbfaf4] text-slate-950">
      <SEO {...PAGES_SEO.home} />
      <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">
        <motion.img
          src={heroImage}
          alt="Enfants africains souriants"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          decoding="async"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/10" />
        <div className="container-xl relative z-10 flex min-h-[calc(100vh-7rem)] items-center px-4 py-20 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-emerald-300">Bienvenue</p>
            <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">REID ONG</h1>
            <p className="mb-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
              Recherche – Éducation – Initiatives et Développement
            </p>
            <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-100">
              ONG engagée pour éducation, santé, développement et protection des populations vulnérables
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-slate-950 transition hover:bg-emerald-300">
                Voir le contenu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-slate-950">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-[#fbfaf4]">
        <div className="container-xl">
          <Reveal>
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
              <SectionTitle kicker="Nos projets" title="Zones & interventions" />
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {zones.map((zone) => (
                  <span key={zone} className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-7 lg:grid-cols-3">
            {sampleProjects.map((project, index) => (
          <Reveal key={project.title} className="h-full">
                <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                  <div className="relative h-72 overflow-hidden">
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-5 top-5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-950">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="mb-5 text-2xl font-semibold leading-tight text-slate-950">{project.title}</h3>
                    <p className="mb-6 text-sm leading-7 text-slate-600">{project.text}</p>
                    <div className="flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-slate-500">
                      <span>{project.zone}</span>
                      <span>{project.date}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="presentation" className="section-padding bg-white">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Qui sommes-nous ?" title="REID-ONG agit pour :" text="Une présentation officielle structurée autour des missions, domaines et zones d’intervention." />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr]">
            <div className="space-y-4">
              {missions.map((mission) => (
                <Reveal key={mission}>
                  <div className="rounded-3xl bg-[#f7f4e8] p-6">
                    <p className="text-base leading-7 text-slate-700">{mission}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="rounded-[2rem] bg-sky-950 p-8 text-white">
                <h3 className="mb-8 text-2xl font-semibold">Domaines d’intervention</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {domaines.map(({ label, Icon }) => (
                    <div key={label} className="rounded-2xl bg-white/10 p-4">
                      <Icon className="mb-4 h-6 w-6 text-emerald-300" />
                      <p className="text-sm font-semibold">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="actions" className="section-padding bg-[#fbfaf4]">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Nos domaines" title="Axes d’intervention" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {axes.map(({ label, Icon }) => (
              <Reveal key={label}>
                <article className="rounded-[1.75rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <Icon className="mb-8 h-8 w-8 text-emerald-700" />
                  <h3 className="text-xl font-semibold leading-tight text-slate-950">{label}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-emerald-700 text-white">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Quelques chiffres" title="Repères de présentation" light />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sampleStats.map(([value, label]) => (
              <Reveal key={label}>
                <div className="rounded-[2rem] bg-white p-7 text-slate-950">
                  <p className="mb-3 text-5xl font-semibold">{value}</p>
                  <p className="text-sm font-semibold leading-6 text-slate-600">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="activite-2009" className="section-padding bg-white">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Rencontre du mardi 1er décembre 2009" title="Journée mondiale de lutte contre le SIDA" text="Hall des dockers de la SOBEMAP, de 10h à 18h" />
          </Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white">
                <img src="https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=900&q=85" alt="Agent de santé africain" loading="lazy" decoding="async" className="h-72 w-full object-cover opacity-90" />
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
                <div className="rounded-[2rem] bg-sky-950 p-8 text-white">
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

      <section className="section-padding bg-[#fbfaf4]">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Rapport d’activités" title="Sensibilisation sur le SIDA en milieu scolaire" text="Période : Mois de mai 2009" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              ["Lieux", schoolPlaces],
              ["Activité", schoolActivities],
              ["Animateurs", facilitators],
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

      <section id="actualites" className="section-padding bg-white">
        <div className="container-xl">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionTitle kicker="Actualités" title="Exemples de contenus" />
              <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-emerald-800">
                Proposer une actualité
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-7 lg:grid-cols-3">
            {sampleNews.map((item) => (
              <Reveal key={item.title}>
                <article className="overflow-hidden rounded-[2rem] bg-[#f7f4e8]">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-64 w-full object-cover" />
                  <div className="p-7">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">{item.date}</p>
                    <h3 className="mb-4 text-2xl font-semibold leading-tight text-slate-950">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="galeries" className="section-padding bg-[#fbfaf4]">
        <div className="container-xl">
          <Reveal>
            <SectionTitle kicker="Galeries" title="Photos REID ONG" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=85",
              "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=85",
              "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85",
            ].map((image, index) => {
              const labels = ["Galerie Santé", "Galerie Éducation", "Galerie Terrain"];
              const hrefs = ["/galerie?sante", "/galerie?education", "/galerie?terrain"];
              return (
              <Reveal key={image}>
                <Link to={hrefs[index]} className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={image} alt="Photo REID ONG exemple" loading="lazy" decoding="async" className="h-80 w-full object-cover" />
                  <div className="flex items-center justify-between p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{labels[index]}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800">
                      Voir tout
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sky-950 px-4 py-16 text-white md:px-8">
        <Reveal className="container-xl grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Agir avec nous</p>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Participer au développement des actions REID ONG</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-slate-950 transition hover:bg-emerald-300">
            Faire un don
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
