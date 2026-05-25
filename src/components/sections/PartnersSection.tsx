import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PARTNERS = [
  { name: "UNICEF", logo: "UNICEF" },
  { name: "WWF", logo: "WWF" },
  { name: "ONU", logo: "ONU" },
  { name: "AFD", logo: "AFD" },
  { name: "UE", logo: "UE" },
  { name: "GIZ", logo: "GIZ" },
  { name: "PNUD", logo: "PNUD" },
  { name: "UNESCO", logo: "UNESCO" },
];

export function PartnersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="partners" className="py-20 px-4 bg-white">
      <div className="container-xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-ocean-700 text-sm font-semibold tracking-[0.28em] uppercase mb-4">Partenaires</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-slate-950 leading-tight">
            Des institutions engagées,
            <br />
            une confiance partagée.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.07 + 0.2 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 py-8 px-4 flex items-center justify-center text-center shadow-sm"
            >
              <span className="text-slate-700 text-sm font-semibold tracking-[0.15em] uppercase">{p.logo}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
