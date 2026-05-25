import { motion } from "framer-motion";
import React from "react";

export function Section({ id, title, eyebrow, children, className = "" }: { id?: string; title?: React.ReactNode; eyebrow?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-xl">
        {eyebrow && <p className="text-brand-300 text-sm tracking-[0.2em] uppercase mb-4">{eyebrow}</p>}
        {title && (
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-section text-white mb-8">
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
