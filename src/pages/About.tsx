import { motion } from "framer-motion";
import { ORG_INFO } from "@/constants/nav";

const ZONES = ["Atlantique", "Littoral", "Ouémé", "Plateaux", "Zou", "Collines", "Mono", "Couffo"];
const COMPETENCES = [
  "Financiers",
  "Économistes",
  "Gestionnaires",
  "Juristes",
  "Médecins",
  "Géographes",
  "Géoconomistes",
  "Sociologues",
  "Auditeurs",
  "Aménagistes",
  "Environnementalistes",
  "Spécialistes en Education",
  "Management",
  "Ressources Humaines",
  "Action Coopérative",
  "Ingénieurs agronomes",
];

export function About() {
  return (
    <main className="bg-slate-950 text-slate-100 pt-20">
      <section className="relative overflow-hidden bg-slate-950 py-28">
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-emerald-700/20 to-transparent" />
        <div className="container-xl relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm tracking-[0.3em] uppercase mb-4">
            Organisation citoyenne
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-display text-white mb-6">
            REID ONG au Bénin<br />Une ONG de terrain et de confiance.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-300 text-xl max-w-3xl mx-auto leading-9">
            REID ONG agit pour apporter un appui moral, matériel et financier aux enfants de la rue, abandonnés, malades mentaux et handicapés. Nous travaillons également pour l’éducation de la jeunesse, la lutte contre le VIH/SIDA, le paludisme, la corruption, la protection de l’environnement et la promotion du développement local.
          </motion.p>
        </div>
      </section>

      <section className="section-padding border-t border-slate-900">
        <div className="container-xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">
            <h2 className="text-3xl font-semibold text-white mb-6">Informations clés</h2>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                <span className="font-semibold text-slate-100">Nom :</span> {ORG_INFO.name}
              </p>
              <p>
                <span className="font-semibold text-slate-100">Type :</span> {ORG_INFO.type}
              </p>
              <p>
                <span className="font-semibold text-slate-100">Pays :</span> {ORG_INFO.country}
              </p>
              <p>
                <span className="font-semibold text-slate-100">Adresse :</span> {ORG_INFO.address}
              </p>
              <p>
                <span className="font-semibold text-slate-100">Email :</span> {ORG_INFO.email}
              </p>
              <p>
                <span className="font-semibold text-slate-100">Téléphone :</span> {ORG_INFO.phone}
              </p>
              <p>
                <span className="font-semibold text-slate-100">Président :</span> {ORG_INFO.president}
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-emerald-500/30 bg-emerald-500/10 p-10">
            <h2 className="text-3xl font-semibold text-white mb-6">Objectifs de l’ONG</h2>
            <ul className="space-y-4 text-slate-200 text-sm leading-relaxed">
              <li>Apporter un appui moral, matériel et financier aux enfants de la rue, abandonnés, malades mentaux et handicapés.</li>
              <li>Œuvrer pour l’éducation de la jeunesse et le développement des localités du Bénin.</li>
              <li>Lutter contre la pratique des enfants placés.</li>
              <li>Combattre le VIH/SIDA, le paludisme et autres maladies.</li>
              <li>Protéger l’environnement et promouvoir le développement durable.</li>
              <li>Lutter contre la corruption et renforcer la gouvernance locale.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">
            <h2 className="text-3xl font-semibold text-white mb-6">Méthodologie</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              REID ONG se déplace sur le terrain, travaille en réseau avec des partenaires institutionnels et associatifs, organise des actions de sensibilisation, des projections de films éducatifs, des ateliers de prévention et des distributions de matériel dans les zones prioritaires.
            </p>
            <ul className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <li>Mobilisation des autorités locales et partenaires publics.</li>
              <li>Participation active des communautés et des cibles prioritaires.</li>
              <li>Approche participative et suivi post-action.</li>
              <li>Valorisation des résultats et renforcement de la pérennité des actions.</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">
            <h2 className="text-3xl font-semibold text-white mb-6">Compétences mobilisées</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {COMPETENCES.map((item) => (
                <div key={item} className="rounded-[24px] bg-slate-950 border border-slate-800 p-4 text-slate-300 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] border border-slate-800 bg-slate-900 p-10">
          <h2 className="text-3xl font-semibold text-white mb-6">Zones d’intervention</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ZONES.map((zone) => (
              <div key={zone} className="rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 text-center">
                {zone}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
