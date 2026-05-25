import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Globe, UserCheck, BookOpen } from "lucide-react";

const COMMITMENTS = [
  {
    icon: BookOpen,
    title: "Objectifs concrets",
    description: "Appui moral, matériel et financier aux enfants vulnérables, accompagnement éducatif et lutte contre les maladies." ,
  },
  {
    icon: Globe,
    title: "Présence nationale",
    description: "Interventions dans les départements de l’Atlantique, du Littoral, de l’Ouémé, des Plateaux, du Zou, des Collines, du Mono et du Couffo.",
  },
  {
    icon: UserCheck,
    title: "Compétences spécialisées",
    description: "Financiers, juristes, médecins, géographes, sociologues, environnementalistes et spécialistes en éducation et en management.",
  },
  {
    icon: CheckCircle,
    title: "Méthodologie participative",
    description: "Approche fondée sur le contact de proximité, les entretiens individuels et les discussions de groupe pour convaincre.",
  },
];

function CommitmentCard({ commitment, index }: Readonly<{ commitment: typeof COMMITMENTS[0]; index: number }>) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-card-premium"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500">
          <commitment.icon className="w-6 h-6" />
        </div>
        <div className="h-2 w-2 rounded-full bg-emerald-500/30" />
      </div>
      <h3 className="text-2xl font-semibold text-slate-950 mb-3">{commitment.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{commitment.description}</p>
    </motion.div>
  );
}

export function StatsSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="impact" className="section-padding bg-slate-50">
      <div className="container-xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-700 text-sm font-semibold tracking-[0.28em] uppercase mb-4">Notre engagement</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-950 mb-5 leading-tight">
            Faits vérifiés,<br />
            <span className="text-emerald-500 italic">actions réelles</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-8">
            Le site présente les domaines, les initiatives et les méthodes dont l’existence est confirmée par le dossier documentaire fourni.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMITMENTS.map((commitment, i) => (
            <CommitmentCard key={commitment.title} commitment={commitment} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
