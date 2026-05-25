import { type ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SEO } from "@/components/seo/SEO";
import { PAGES_SEO } from "@/constants/seo";

const sections = [
  {
    id: "sante",
    title: "Galerie Santé",
    subtitle: "Rencontre du mardi 1er décembre 2009",
    description:
      "Photos d’exemple pour illustrer la journée mondiale de lutte contre le SIDA au Hall des dockers de la SOBEMAP, avec sensibilisation, prévention et projection de films.",
    images: [
      "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  {
    id: "education",
    title: "Galerie Éducation",
    subtitle: "Sensibilisation sur le SIDA en milieu scolaire",
    description:
      "Photos d’exemple pour représenter les activités de mai 2009 : débats, causeries et projections de films dans les établissements scolaires.",
    images: [
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",
    ],
  },
  {
    id: "terrain",
    title: "Galerie Terrain",
    subtitle: "Actions et mobilisation",
    description:
      "Photos d’exemple pour illustrer les rencontres, déplacements, équipes et actions communautaires autour des activités REID ONG.",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85",
    ],
  },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Gallery() {
  const location = useLocation();

  useEffect(() => {
    const key = location.search.replace("?", "");
    if (!key) return;
    window.setTimeout(() => {
      document.getElementById(key)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [location.search]);

  return (
    <main className="bg-[#fbfaf4] pb-20 pt-32 text-slate-950">
      <SEO {...PAGES_SEO.gallery} />
      <section className="px-4 md:px-8">
        <div className="container-xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 px-6 py-20 text-white md:px-12">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=85"
                alt="Galerie REID ONG"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
              <div className="relative max-w-3xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Galerie</p>
                <h1 className="font-display text-5xl font-semibold leading-tight md:text-7xl">Toutes les photos REID ONG</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                  Photos d’exemple en attendant les archives réelles des activités.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="rounded-full bg-white px-5 py-3 text-sm font-bold text-emerald-800 shadow-sm">
                  {section.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl space-y-16">
          {sections.map((section) => (
            <Reveal key={section.id}>
              <div id={section.id} className="scroll-mt-32 rounded-[2.25rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">{section.subtitle}</p>
                    <h2 className="font-display text-4xl font-semibold text-slate-950 md:text-5xl">{section.title}</h2>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-slate-600">{section.description}</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {section.images.map((image, index) => (
                    <div key={image} className="group overflow-hidden rounded-[1.5rem] bg-[#f7f4e8]">
                      <img src={image} alt={`${section.title} ${index + 1}`} loading="lazy" decoding="async" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105" />
                      <p className="p-4 text-sm font-bold text-slate-600">Photo REID ONG {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="rounded-[2rem] bg-sky-950 p-8 text-white md:flex md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Archives</p>
                <h2 className="text-3xl font-semibold">Ajouter les photos réelles</h2>
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-sm font-bold text-slate-950 md:mt-0">
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
