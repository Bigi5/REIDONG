import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Users, Filter, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { DOMAIN_COLORS, DOMAIN_LABELS, cn } from "@/lib/utils";

const FILTERS = [
  { id: "all",         label: "Tous" },
  { id: "education",   label: "Éducation" },
  { id: "environment", label: "Environnement" },
  { id: "social",      label: "Social" },
];
const STATUS_FILTERS = [
  { id: "all",       label: "Tous statuts" },
  { id: "ongoing",   label: "En cours" },
  { id: "completed", label: "Terminés" },
  { id: "upcoming",  label: "À venir" },
];
const STATUS_COLORS: Record<string, string> = {
  ongoing:   "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  upcoming:  "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export function Projects() {
  const [domain, setDomain]   = useState("all");
  const [status, setStatus]   = useState("all");

  const filtered = PROJECTS.filter((p) => {
    const byDomain = domain === "all" || p.domain === domain;
    const byStatus = status === "all" || p.status === status;
    return byDomain && byStatus;
  });

  return (
    <div className="pt-20">
      <section className="relative py-28 px-4 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Sur le terrain</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-display text-white mb-6">
            Nos <span className="text-gradient italic">Projets</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-slate-400 text-xl max-w-2xl mx-auto">
            {PROJECTS.length} projets dans {new Set(PROJECTS.map((p) => p.country)).size} pays différents.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              {FILTERS.map((f) => (
                <button key={f.id} onClick={() => setDomain(f.id)}
                  className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all border",
                    domain === f.id ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-white/4 text-slate-400 border-white/10 hover:border-white/20")}>
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              {STATUS_FILTERS.map((f) => (
                <button key={f.id} onClick={() => setStatus(f.id)}
                  className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all border",
                    status === f.id ? "bg-white/10 text-white border-white/20" : "bg-white/4 text-slate-400 border-white/10 hover:border-white/20")}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card-dark overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={cn("text-xs px-3 py-1 rounded-full border backdrop-blur-sm", DOMAIN_COLORS[project.domain].bg, DOMAIN_COLORS[project.domain].text, DOMAIN_COLORS[project.domain].border)}>
                      {DOMAIN_LABELS[project.domain]}
                    </span>
                    <span className={cn("text-xs px-3 py-1 rounded-full border backdrop-blur-sm", STATUS_COLORS[project.status])}>
                      {DOMAIN_LABELS[project.status]}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-2xl">{project.country}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex gap-4 text-slate-500 text-xs mb-4">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{project.location.split(",")[0]}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{project.beneficiaries.toLocaleString("fr-FR")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 text-sm font-mono">{project.budget}</span>
                    <Link to={`/projets/${project.id}`} className="flex items-center gap-1 text-emerald-400 text-sm hover:gap-2 transition-all">
                      Détails <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p className="text-xl">Aucun projet trouvé pour ces filtres.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
