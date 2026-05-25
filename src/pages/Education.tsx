import { motion } from "framer-motion";
import { BookOpen, Users, Building2, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import { CTASection } from "@/components/sections/CTASection";

const PROGRAMS = [
  { icon: Building2, title: "Construction d'écoles", desc: "12 écoles construites avec énergie solaire, eau potable et équipements pédagogiques modernes dans les zones les plus défavorisées.", stat: "12 écoles" },
  { icon: Award,     title: "Programme de bourses",  desc: "Attribution annuelle de 400 bourses scolaires aux enfants les plus vulnérables, couvrant frais de scolarité, fournitures et transport.", stat: "400 bourses/an" },
  { icon: Users,     title: "Formation des enseignants", desc: "120 enseignants formés aux pédagogies modernes et aux outils numériques pour améliorer la qualité de l'enseignement.", stat: "120 enseignants" },
  { icon: BookOpen,  title: "Bibliothèques communautaires", desc: "Création de 8 bibliothèques numériques accessibles aux enfants et aux adultes, avec plus de 5 000 ressources pédagogiques.", stat: "8 bibliothèques" },
];

export function Education() {
  const eduProjects = PROJECTS.filter((p) => p.domain === "education");
  return (
    <div className="pt-20">
      <section className="relative py-28 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #020617 0%, #0c1f3d 50%, #020617 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-[130px] opacity-8" />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4">Pilier #1</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="heading-display text-white mb-6">
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent italic">Éducation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-slate-400 text-xl max-w-2xl mx-auto">
            L'éducation est le levier le plus puissant pour briser le cycle de la pauvreté. Nos programmes touchent plus de 7 200 apprenants chaque année.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-slate-950 border-b border-white/5">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: "7 200+", lbl: "Apprenants / an" },
              { val: "12",     lbl: "Écoles construites" },
              { val: "400",    lbl: "Bourses attribuées" },
              { val: "38%",    lbl: "Budget REID" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="card-glass p-5 text-center">
                <p className="font-display text-3xl font-semibold text-blue-400 mb-1">{val}</p>
                <p className="text-slate-400 text-sm">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4">Nos programmes</p>
            <h2 className="heading-section text-white">Éduquer pour <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent italic">émanciper</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-7 flex gap-5 group hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0 group-hover:bg-blue-500/25 transition-colors">
                  <p.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <span className="text-xs bg-blue-500/15 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full">{p.stat}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-slate-950/50">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-10">
            <h2 className="heading-section text-white">Projets <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent italic">éducatifs</span></h2>
            <Link to="/projets" className="btn-outline text-sm">Tous les projets <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eduProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark overflow-hidden group hover:-translate-y-1 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                  <span className="absolute top-3 right-3 text-2xl">{project.country}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <Link to={`/projets/${project.id}`} className="flex items-center gap-2 text-blue-400 text-sm hover:gap-3 transition-all">
                    Voir le projet <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
