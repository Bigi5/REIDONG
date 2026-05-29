import { Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_LINKS, ORG_INFO } from "@/constants/nav";

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

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0B1F3A] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        {/* CTA SECTION */}
        <div className="mb-14 grid gap-8 rounded-[2rem] bg-gradient-to-r from-[#1E5AA8] to-[#143d6e] p-8 shadow-2xl md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
              Agissons ensemble
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Soutenir les actions de REID ONG au Bénin
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100">
              REID ONG œuvre dans les domaines de l'éducation, de la santé, du développement communautaire
              et de la sensibilisation sociale au Bénin.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-emerald-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-950 transition duration-300 hover:bg-emerald-400 hover:scale-105"
          >
            Nous contacter
          </Link>
        </div>

        {/* FOOTER CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          {/* LOGO - Sans encadrement, plus grand */}
          <div>
            <div className="mb-6">
              <img
                src="/images/Logo.png"
                alt="Logo REID ONG"
                className="h-28 w-auto object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-white mt-2">{ORG_INFO.name}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Recherche – Éducation – Initiatives et Développement.
                Organisation non gouvernementale engagée dans
                les actions communautaires et le développement social.
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="transition duration-300 hover:text-emerald-300 hover:pl-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DOMAINES */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Domaines
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {domaines.map((domaine) => (
                <li key={domaine} className="hover:text-emerald-300 transition">
                  {domaine}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3 items-start">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span className="break-all">{ORG_INFO.email}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 shrink-0 text-emerald-300" />
                <span>{ORG_INFO.phone}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 shrink-0 text-emerald-300" />
                <span>{ORG_INFO.phoneAlt}</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{ORG_INFO.address}</span>
              </li>
            </ul>

            {/* Petite touche finale */}
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
              <Heart className="h-3 w-3 text-emerald-400" />
              <span>ONG apolitique et à but non lucratif</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 px-4 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>© 2026 {ORG_INFO.name}. Tous droits réservés.</span>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/mentions-legales" className="transition hover:text-emerald-300">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="transition hover:text-emerald-300">
              Confidentialité
            </Link>
            <button
              type="button"
              onClick={scrollTop}
              className="flex items-center gap-2 transition hover:text-emerald-300"
            >
              <ArrowUp className="h-4 w-4" />
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}