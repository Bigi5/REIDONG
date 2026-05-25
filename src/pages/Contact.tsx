import { useState } from "react";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { ORG_INFO } from "@/constants/nav";
import { PAGES_SEO } from "@/constants/seo";

const contactCards = [
  { icon: Phone, label: "Téléphone", value: ORG_INFO.phone },
  { icon: Phone, label: "Téléphone secondaire", value: ORG_INFO.phoneAlt },
  { icon: Mail, label: "Email", value: ORG_INFO.email },
  { icon: MapPin, label: "Localisation", value: ORG_INFO.address },
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

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-[#fbfaf4] pb-20 pt-32">
      <SEO {...PAGES_SEO.contact} />
      <section className="px-4 md:px-8">
        <div className="container-xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 px-6 py-20 text-white md:px-12">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=85"
                alt="Équipe africaine en réunion"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
              <div className="relative max-w-3xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Contact</p>
                <h1 className="font-display text-5xl font-semibold leading-tight md:text-7xl">Échanger avec REID ONG</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                  Formulaire et coordonnées factices pour préparer la version finale du site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8">
              {sent ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="mb-6 h-16 w-16 text-emerald-600" />
                  <h2 className="mb-4 text-3xl font-semibold text-slate-950">Message envoyé</h2>
                  <p className="max-w-md text-slate-600">Merci. Ceci est une confirmation factice pour la démonstration du formulaire.</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  className="grid gap-5"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      Nom complet
                      <input name="name" autoComplete="name" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-500 focus:bg-white" placeholder="Ex : Aïcha Mensah" required maxLength={120} />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      Téléphone
                      <input name="phone" type="tel" autoComplete="tel" inputMode="tel" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-500 focus:bg-white" placeholder="+229 00 00 00 00" required maxLength={32} />
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Email
                    <input name="email" type="email" autoComplete="email" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-500 focus:bg-white" placeholder="nom@example.com" required maxLength={160} />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Sujet
                    <select name="subject" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-500 focus:bg-white" required>
                      <option value="">Choisir un sujet</option>
                      <option>Partenariat</option>
                      <option>Don</option>
                      <option>Bénévolat</option>
                      <option>Demande d’information</option>
                      <option>Autre</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Message
                    <textarea name="message" className="min-h-40 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-emerald-500 focus:bg-white" placeholder="Votre message..." required maxLength={1500} />
                  </label>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-emerald-500">
                    Envoyer le message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <div className="grid gap-4">
                {contactCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 rounded-[1.5rem] bg-white p-5 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                      <p className="mt-1 font-semibold text-slate-950">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <iframe
                  title="Localisation REID ONG à Cotonou"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.3500%2C6.3400%2C2.4700%2C6.4200&layer=mapnik&marker=6.3703%2C2.3912"
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-600">{ORG_INFO.address}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
