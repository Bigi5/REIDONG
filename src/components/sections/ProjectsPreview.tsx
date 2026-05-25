import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { DOMAIN_COLORS, DOMAIN_LABELS, cn } from "@/lib/utils";

const STATUS_COLORS: Record<string, string> = {
  ongoing:   "bg-brand-500/15 text-brand-500 border-brand-500/30",
  completed: "bg-ocean-500/15 text-ocean-500 border-ocean-500/30",
  upcoming:  "bg-slate-100 text-slate-700 border-slate-200",
};

export function ProjectsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const featured = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-emerald-700 text-sm font-semibold tracking-[0.28em] uppercase mb-4">Programmes</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">
              Programmes documentés<br />pour un impact réel.
            </h2>
          </div>
          <Link to="/projets" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50">
            Voir tous les projets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-card-premium group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className={cn("text-[11px] font-semibold uppercase px-3 py-1 rounded-full border backdrop-blur-sm", DOMAIN_COLORS[project.domain].bg, DOMAIN_COLORS[project.domain].text, DOMAIN_COLORS[project.domain].border)}>
                    {DOMAIN_LABELS[project.domain]}
                  </span>
                  <span className={cn("text-[11px] font-semibold uppercase px-3 py-1 rounded-full border backdrop-blur-sm", STATUS_COLORS[project.status])}>
                    {DOMAIN_LABELS[project.status]}
                  </span>
                </div>
                <div className="absolute top-3 right-3 text-sm text-white font-semibold">{project.country}</div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-slate-950 mb-3 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-4 text-slate-500 text-xs mb-5">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />{project.location.split(",")[0]}
                  </span>
                </div>

                <Link
                  to={`/projets/${project.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 transition"
                >
                  Découvrir ce projet <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
