import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-5" />
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-[10rem] md:text-[15rem] font-bold leading-none text-gradient opacity-20 select-none">404</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="-mt-8 md:-mt-16"
        >
          <h1 className="font-display text-3xl md:text-5xl text-white mb-4">Page introuvable</h1>
          <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
            Cette page n'existe pas ou a été déplacée. Revenez à l'accueil pour continuer votre exploration.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <button onClick={() => window.history.back()} className="btn-outline">
              <ArrowLeft className="w-4 h-4" />
              Page précédente
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
