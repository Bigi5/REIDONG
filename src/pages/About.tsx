import { motion } from "framer-motion";

const ZONES = ["Atlantique", "Littoral", "Ouémé", "Plateaux", "Zou", "Collines", "Mono", "Couffo"];
const COMPETENCES = [
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

export function About() {
  return (
    <main className="bg-slate-950 text-slate-100 pt-20">
      <section className="relative overflow-hidden bg-slate-950 py-28">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-emerald-700/20 to-transparent" />
        <div className="container-xl relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-4">
            Présentation officielle
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-display text-white mb-6">
            Recherche – Éducation – Initiatives et Développement
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-300 text-xl max-w-3xl mx-auto leading-9">
            REID-ONG agit pour apporter un appui moral, matériel et financier aux enfants de la rue, abandonnés, malades mentaux et handicapés ; pour l’éducation de la jeunesse et le développement des localités du Bénin ; pour la lutte contre les enfants placés, le VIH/SIDA, le paludisme et autres maladies ; pour la protection de l’environnement et le développement durable ; pour la lutte contre la corruption ; pour la gouvernance et le développement.
          </motion.p>
        </div>
      </section>

      <section className="section-padding border-t border-slate-900">
        <div className="container-xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">
              <h2 className="text-white text-2xl font-semibold mb-6">Domaines</h2>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li>Éducation</li>
                <li>Santé</li>
                <li>Recherche</li>
                <li>Environnement</li>
                <li>Développement</li>
                <li>Initiatives</li>
                <li>Loisirs</li>
                <li>Microfinance</li>
              </ul>
            </div>
            <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">
              <h2 className="text-white text-2xl font-semibold mb-6">Zones d’intervention</h2>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                {ZONES.map((zone) => (
                  <li key={zone}>{zone}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPETENCES.map((item) => (
              <div key={item} className="rounded-[28px] border border-slate-800 bg-slate-900 p-6 text-slate-300 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
