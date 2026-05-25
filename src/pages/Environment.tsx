import { motion } from "framer-motion";
import { Leaf, TreePine, Waves, Wind, Sun, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import { CTASection } from "@/components/sections/CTASection";

const ACTIONS = [
  { icon: TreePine, title: "Reforestation",      desc: "3 200 arbres plantés dans des zones déboisées critiques. Nos équipes collaborent avec les communautés locales pour un reboisement durable.", stat: "3 200 arbres" },
  { icon: Waves,    title: "Mangroves marines",  desc: "Restauration de 800 hectares de mangroves côtières au Togo et au Bénin, préservant la biodiversité marine et protégeant les villages côtiers.", stat: "800 ha restaurés" },
  { icon: Sun,      title: "Énergie solaire",    desc: "Installation de 180 systèmes solaires dans des écoles et centres de santé ruraux, réduisant la dépendance aux combustibles fossiles.", stat: "180 installations" },
  { icon: Wind,     title: "Sensibilisation",    desc: "Programmes d'éducation environnementale touchant 45 000 personnes, dont 12 000 jeunes dans les écoles partenaires.", stat: "45 000 sensibilisés" },
];

export function Environment() {
  const envProjects = PROJECTS.filter((p) => p.domain === "environment");
  return (
    <div className="pt-20">
      <section className="relative py-28 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #020617 0%, #071e07 60%, #020617 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-8" />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-emerald-400" />
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Pilier #2</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="heading-display text-white mb-6">
            <span className="text-gradient italic">Environnement</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-slate-400 text-xl max-w-2xl mx-auto">
            La crise climatique frappe d'abord les plus vulnérables. Nos actions environnementales cherchent à protéger les écosystèmes et à soutenir la résilience des communautés.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-950 border-b border-white/5">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: "3 200+",  lbl: "Arbres plantés" },
              { val: "800ha",   lbl: "Restaurés" },
              { val: "180",     lbl: "Installations solaires" },
              { val: "34%",     lbl: "Budget REID" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="card-glass p-5 text-center">
                <p className="font-display text-3xl font-semibold text-emerald-400 mb-1">{val}</p>
                <p className="text-slate-400 text-sm">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Nos actions</p>
            <h2 className="heading-section text-white">Pour une planète <span className="text-gradient italic">vivante</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACTIONS.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-7 flex gap-5 group hover:border-emerald-500/30 transition-all hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/25 transition-colors">
                  <a.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{a.title}</h3>
                    <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">{a.stat}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950/50">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-10">
            <h2 className="heading-section text-white">Projets <span className="text-gradient italic">environnementaux</span></h2>
            <Link to="/projets" className="btn-outline text-sm">Voir tous <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {envProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark overflow-hidden group hover:-translate-y-1 transition-all flex"
              >
                <div className="relative w-48 overflow-hidden shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col">
                  <span className="text-2xl mb-2">{project.country}</span>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-1">{project.description}</p>
                  <Link to={`/projets/${project.id}`} className="flex items-center gap-2 text-emerald-400 text-sm hover:gap-3 transition-all mt-auto">
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
