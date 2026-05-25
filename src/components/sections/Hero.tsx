import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const heroImage =
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1800&q=85";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">
      <motion.img
        src={heroImage}
        alt="Enfants africains souriants"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        decoding="async"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/72 to-slate-950/10" />
      <div className="container-xl relative z-10 flex min-h-[calc(100vh-7rem)] items-center px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-emerald-300">Bienvenue</p>
          <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            REID ONG
          </h1>
          <p className="mb-5 text-2xl font-semibold leading-tight text-white md:text-4xl">
            Recherche – Éducation – Initiatives et Développement
          </p>
          <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-100">
            ONG engagée pour éducation, santé, développement et protection des populations vulnérables
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-slate-950 transition hover:bg-emerald-300"
            >
              Voir le contenu
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-white hover:text-slate-950"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
