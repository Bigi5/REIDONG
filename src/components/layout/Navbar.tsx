import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@/constants/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(t);
  }, [location]);

  const isActiveLink = (path: string) => {
    if (path.includes("#")) return `${location.pathname}${location.hash}` === path;
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl transition-all duration-300",
        scrolled && "bg-white/95 shadow-card-premium backdrop-blur-2xl"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-36 items-center justify-between gap-4">
          {/* LOGO - Très grand, sans encadrement */}
          <Link to="/" className="flex items-center transition hover:opacity-80">
            <img 
              src="/images/Logo.png" 
              alt="Logo REID ONG" 
              className="h-28 w-auto object-contain" 
            />
          </Link>

          {/* NAVIGATION DESKTOP */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "whitespace-nowrap rounded-full px-5 py-3 text-base font-semibold transition duration-200",
                  isActiveLink(link.path)
                    ? "bg-emerald-100 text-emerald-800 shadow-sm"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* BOUTON CONTACT DESKTOP */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-full bg-emerald-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-emerald-500 hover:scale-105 lg:inline-flex"
            >
              Nous contacter
            </Link>

            {/* BURGER MENU MOBILE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="grid gap-2 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="rounded-2xl bg-slate-50 px-5 py-4 text-base font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 rounded-2xl bg-emerald-600 px-5 py-4 text-center text-base font-semibold text-white transition hover:bg-emerald-500"
              >
                Nous contacter
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}