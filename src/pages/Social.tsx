import { motion } from "framer-motion";
import { Heart, Droplets, Coins, Baby, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import { CTASection } from "@/components/sections/CTASection";

const PROGRAMS = [
  { icon: Coins,   title: "Microfinance",         desc: "340 micro-entreprises créées grâce à nos prêts solidaires à taux zéro. Programme dédié aux femmes en situation précaire.", stat: "340 entreprises" },
  { icon: Droplets,title: "Accès à l'eau potable", desc: "48 pompes solaires installées dans des zones rurales isolées, donnant accès à l'eau potable à 8 500 personnes.", stat: "8 500 personnes" },
  { icon: Baby,    title: "Protection de l'enfance", desc: "Centres d'accueil pour enfants vulnérables, programmes de lutte contre le travail des enfants et aide à la scolarisation.", stat: "2 100 enfants" },
  { icon: Heart,   title: "Aide d'urgence",        desc: "Interventions rapides lors de crises humanitaires : distributions alimentaires, kits de première nécessité, hébergement d'urgence.", stat: "18 000 assistés" },
];

export function Social() {
  const socialProjects = PROJECTS.filter((p) => p.domain === "social");
  return (
    <div className="pt-20">
      <section className="relative py-28 px-4 overflow-hidden" style={{ background: "linear-gradient(135deg, #020617 0%, #1c0a00 60%, #020617 100%)" }}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-amber-500 rounded-full blur-[150px] opacity-6" />
        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-amber-400" />
            </div>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">Pilier #3</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="heading-display text-white mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-300 bg-clip-text text-transparent italic">Social</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-slate-400 text-xl max-w-2xl mx-auto">
            Nous intervenons directement auprès des personnes les plus vulnérables pour leur offrir dignité, autonomie et perspectives d'avenir.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-950 border-b border-white/5">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { val: "28 000+", lbl: "Personnes aidées" },
              { val: "1 240",   lbl: "Femmes accompagnées" },
              { val: "8 500",   lbl: "Accès à l'eau" },
              { val: "28%",     lbl: "Budget REID" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="card-glass p-5 text-center">
                <p className="font-display text-3xl font-semibold text-amber-400 mb-1">{val}</p>
                <p className="text-slate-400 text-sm">{lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">Nos programmes</p>
            <h2 className="heading-section text-white">Soutenir les <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent italic">communautés</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-7 flex gap-5 group hover:border-amber-500/30 transition-all hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0 group-hover:bg-amber-500/25 transition-colors">
                  <p.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <span className="text-xs bg-amber-500/15 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">{p.stat}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950/50">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-10">
            <h2 className="heading-section text-white">Projets <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent italic">sociaux</span></h2>
            <Link to="/projets" className="btn-outline text-sm">Voir tous <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialProjects.map((project, i) => (
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
                  <h3 className="text-white font-semibold mb-2 group-hover:text-amber-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <Link to={`/projets/${project.id}`} className="flex items-center gap-2 text-amber-400 text-sm hover:gap-3 transition-all">
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
