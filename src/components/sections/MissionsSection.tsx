import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Leaf, Heart, ArrowRight } from "lucide-react";

const MISSION_CARDS = [
  {
    icon: Leaf,
    id: "environnement",
    label: "Environnement",
    title: "Promouvoir un environnement sain",
    description:
      "Encourager la protection et la promotion d'un environnement sain et durable dans les localités desservies par REID ONG.",
  },
  {
    icon: BookOpen,
    id: "education",
    label: "Éducation",
    title: "Soutenir la jeunesse",
    description:
      "Œuvrer pour l’éducation de la couche juvénile, soutenir les enfants de la rue et renforcer l’accès à l’école au Bénin.",
  },
  {
    icon: Heart,
    id: "social",
    label: "Social",
    title: "Protéger les populations vulnérables",
    description:
      "Apporter un appui moral, matériel et financier aux enfants abandonnés, aux malades mentaux et aux personnes handicapées.",
  },
];

export function MissionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="missions" className="section-padding bg-white">
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-emerald-500 text-sm font-semibold tracking-[0.28em] uppercase mb-4">Notre approche</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-950 leading-tight mb-6">
              Objectifs clairs,<br />une action documentée.
            </h2>
            <p className="text-slate-600 text-lg leading-8 mb-8">
              REID ONG s'appuie sur une méthodologie participative fondée sur le contact de proximité, les entretiens individuels et les discussions de groupe.
            </p>
            <div className="space-y-6 text-slate-600">
              <div>
                <p className="font-semibold text-slate-950 mb-2">Domaines ciblés</p>
                <p className="leading-relaxed">
                  Éducation, santé, recherche, environnement, développement, initiatives, loisirs et microfinance.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-950 mb-2">Sites d'intervention</p>
                <p className="leading-relaxed">
                  Interventions nationales au Bénin, notamment dans les départements de l’Atlantique, du Littoral, de l’Ouémé, des Plateaux, du Zou, des Collines, du Mono et du Couffo.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-[32px] shadow-card-premium"
          >
            <img
              src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=80"
              alt="Sensibilisation éducative"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MISSION_CARDS.map((mission, index) => (
            <motion.article
              key={mission.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-card-premium"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white border border-slate-200 mb-6">
                <mission.icon className="w-7 h-7 text-emerald-500" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] mb-3 text-slate-500">{mission.label}</p>
              <h3 className="font-display text-2xl font-semibold text-slate-950 mb-4">{mission.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{mission.description}</p>
              <Link to="/a-propos" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
