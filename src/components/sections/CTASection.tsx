import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Globe, Users } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="cta" className="section-padding relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
      <div className="absolute inset-0 bg-grid opacity-12" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/20 to-transparent" />

      <div className="container-xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-brand-300/10 border border-brand-300/20 rounded-full px-5 py-2 mb-8">
            <Heart className="w-4 h-4 text-brand-300" />
            <span className="text-brand-200 text-sm font-medium">Participez à nos actions</span>
          </div>

          <h2 className="heading-section text-white mb-6">
            Rejoignez le mouvement.<br />
            <span className="text-gradient italic">Agissez maintenant.</span>
          </h2>

          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Votre soutien permet à REID ONG de poursuivre ses actions terrain.
            <br />
            <span className="text-slate-100">Un geste simple pour un impact durable.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link to="/a-propos" className="btn-primary text-base px-10 py-4">
              <Heart className="w-5 h-5" />
              S'engager
            </Link>
            <Link to="/contact" className="btn-outline text-base px-10 py-4">
              <Users className="w-5 h-5" />
              Devenir bénévole
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
            {[
              { icon: Globe, text: "Présent dans 28 pays" },
              { icon: Users, text: "Partenaires locaux" },
              { icon: Heart, text: "96% des fonds en action" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-brand-300" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
