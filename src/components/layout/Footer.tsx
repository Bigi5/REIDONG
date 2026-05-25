import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { ORG_INFO } from "@/constants/nav";

const domaines = [
  "Éducation",
  "Santé",
  "Recherche",
  "Environnement",
  "Développement",
  "Initiatives",
  "Loisirs",
  "Microfinance",
];

const zones = ["Atlantique", "Littoral", "Ouémé", "Plateaux", "Zou", "Collines", "Mono", "Couffo"];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#12372a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mb-14 grid gap-8 rounded-[2rem] bg-emerald-500 p-8 text-slate-950 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em]">Agissons ensemble</p>
            <h2 className="font-display text-3xl font-semibold md:text-5xl">Soutenir les actions de REID ONG</h2>
          </div>
          <Link to="/contact" className="inline-flex whitespace-nowrap items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-slate-800">
            Faire un don
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-800">
                <Globe2 className="h-7 w-7" />
              </div>
              <div>
                <p className="font-display text-3xl font-semibold">{ORG_INFO.name}</p>
                <p className="mt-1 max-w-sm text-sm leading-6 text-emerald-50">{ORG_INFO.tagline}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-emerald-50">
              Site vitrine en cours de préparation. Les photos et certains contenus de présentation sont des exemples temporaires.
            </p>
            <div className="mt-7 flex gap-3">
              {["Fb", "In", "Ig"].map((label) => (
                <span key={label} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Domaines</h4>
            <ul className="space-y-3 text-sm text-emerald-50">
              {domaines.map((domaine) => (
                <li key={domaine}>{domaine}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Zones</h4>
            <ul className="grid grid-cols-2 gap-3 text-sm text-emerald-50 lg:grid-cols-1">
              {zones.map((zone) => (
                <li key={zone}>{zone}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Nous contacter</h4>
            <ul className="space-y-4 text-sm text-emerald-50">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{ORG_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{ORG_INFO.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{ORG_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-emerald-100 md:flex-row md:items-center md:justify-between">
          <span>{ORG_INFO.name}</span>
          <div className="flex flex-wrap gap-5">
            <Link to="/mentions-legales" className="transition hover:text-white">
              Mentions légales
            </Link>
            <button type="button" onClick={scrollTop} className="transition hover:text-white">
              Retour en haut de page
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
