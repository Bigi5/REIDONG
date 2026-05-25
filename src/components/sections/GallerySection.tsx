import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { PROJECTS } from "@/data/projects";

export function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const projects = PROJECTS.slice(0, 9);

  return (
    <Section id="gallery" eyebrow="Galerie" title={"Nos actions en images"}>
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, scale: 0.98 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.05 }} className="overflow-hidden rounded-2xl">
            <img src={p.image} alt={p.title} className="w-full h-44 object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default GallerySection;
