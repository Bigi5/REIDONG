import { motion } from "framer-motion";
import { BookOpen, Heart, Leaf, Globe, Sparkles, Users, ShieldCheck } from "lucide-react";

const DOMAIN_CARDS = [
  { icon: BookOpen, label: "Éducation", description: "Renforcement de l’accès à l’école et sensibilisation des jeunes." },
  { icon: Heart, label: "Santé", description: "Lutte contre le VIH/SIDA, le paludisme et l’accompagnement des personnes vulnérables." },
  { icon: Leaf, label: "Environnement", description: "Promotion d’un environnement sain et durable, et protection des écosystèmes." },
  { icon: Users, label: "Développement", description: "Appui aux collectivités et initiatives locales pour un rayonnement durable." },
  { icon: ShieldCheck, label: "Gouvernance", description: "Proposition de projets de développement et de gouvernance éthique." },
  { icon: Sparkles, label: "Microfinance", description: "Accompagnement des initiatives économiques locales et des micro-entrepreneurs." },
];

const ZONES = [
  "Atlantique",
  "Littoral",
  "Ouémé",
  "Plateaux",
  "Zou",
  "Collines",
  "Mono",
  "Couffo",
];

export function DomainInterventionsSection() {
  return (
    <section id="domaines" className="section-padding bg-slate-50">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-emerald-700 text-sm font-semibold tracking-[0.28em] uppercase mb-4">Domaines d'intervention</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">
            Les domaines réels<br />de l’action REID ONG.
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mt-5 text-lg leading-8">
            REID ONG travaille au Bénin dans des domaines essentiels définis par sa mission : éducation, santé, recherche, environnement, développement, initiatives, loisirs et microfinance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mb-12">
          {DOMAIN_CARDS.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-card-premium"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 mb-5">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-3">{item.label}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-card-premium">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-emerald-500 text-sm uppercase tracking-[0.28em] mb-3">Zones d’intervention</p>
              <h3 className="text-3xl font-semibold text-slate-950 mb-4">Présence nationale au Bénin</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                REID ONG intervient notamment dans les départements de l’Atlantique, du Littoral, de l’Ouémé, des Plateaux, du Zou, des Collines, du Mono et du Couffo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ZONES.map((zone) => (
                <span key={zone} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 text-center">
                  {zone}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
