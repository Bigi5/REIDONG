import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, BookOpen, Heart, ArrowRight } from "lucide-react";
import { StatsSection }    from "@/components/sections/StatsSection";
import { MissionsSection } from "@/components/sections/MissionsSection";
import { CTASection }      from "@/components/sections/CTASection";

const PILLARS = [
  { icon: Leaf,     color: "emerald", label: "Environnement", path: "/environnement", headline: "Protéger les écosystèmes et lutter contre le changement climatique.", stats: ["3 200 arbres", "800 ha restaurés", "180 installations solaires"] },
  { icon: BookOpen, color: "blue",    label: "Éducation",     path: "/education",     headline: "Construire des écoles, distribuer des bourses, former des enseignants.", stats: ["12 écoles", "400 bourses/an", "120 enseignants formés"] },
  { icon: Heart,    color: "amber",   label: "Social",        path: "/social",        headline: "Microfinance, eau potable et protection des personnes vulnérables.", stats: ["1 240 femmes", "8 500 eau potable", "2 100 enfants"] },
];

const colorMap: Record<string, { bg: string; text: string; border: string; grad: string }> = {
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20 hover:border-emerald-400/40", grad: "from-emerald-500/5" },
  blue:    { bg: "bg-blue-500/10",    text: "text-blue-400",    border: "border-blue-500/20 hover:border-blue-400/40",       grad: "from-blue-500/5" },
  amber:   { bg: "bg-amber-500/10",   text: "text-amber-400",   border: "border-amber-500/20 hover:border-amber-400/40",     grad: "from-amber-500/5" },
};

export function Actions() {
  return (
    <div className="pt-20">
      <section className="relative py-28 px-4 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Ce que nous faisons</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-display text-white mb-6">
            Nos <span className="text-gradient italic">Actions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-xl max-w-2xl mx-auto">
            Trois domaines d'intervention complémentaires. Une seule ambition : un développement humain durable et équitable.
          </motion.p>
        </div>
      </section>

      <StatsSection />

      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`bg-gradient-to-b ${c.grad} to-transparent border ${c.border} rounded-2xl p-8 flex flex-col group hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center mb-6`}>
                    <p.icon className={`w-7 h-7 ${c.text}`} />
                  </div>
                  <h2 className={`font-display text-2xl font-semibold text-white mb-3`}>{p.label}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6 flex-1">{p.headline}</p>
                  <ul className="space-y-2 mb-8">
                    {p.stats.map((s) => (
                      <li key={s} className={`flex items-center gap-2 text-sm ${c.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${c.bg} border ${c.border}`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link to={p.path} className={`flex items-center gap-2 ${c.text} text-sm font-medium group-hover:gap-3 transition-all`}>
                    Explorer {p.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <MissionsSection />
      <CTASection />
    </div>
  );
}
