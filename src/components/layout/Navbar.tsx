import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, ORG_INFO } from "@/constants/nav";
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
    setIsOpen(false);
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
        "fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-shadow",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Globe2 className="h-5 w-5" />
            </div>
            <span className="font-display text-2xl font-semibold tracking-tight text-slate-950">{ORG_INFO.name}</span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold text-slate-700 transition xl:px-4",
                  isActiveLink(link.path) ? "bg-emerald-50 text-emerald-800" : "hover:bg-slate-100 hover:text-slate-950"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 lg:inline-flex"
          >
            Faire un don
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="grid gap-2 px-4 py-5">
              {NAV_LINKS.map((link) => (
                <Link key={link.path} to={link.path} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm font-bold text-slate-800">
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="rounded-2xl bg-emerald-500 px-4 py-4 text-center text-sm font-bold text-slate-950">
                Faire un don
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
