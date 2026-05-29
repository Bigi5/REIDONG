import { FileText } from "lucide-react";
import { Seo } from "@/components/seo/SEO";
import { PAGES_SEO } from "@/constants/seo";

const documents = [
  "Document légal à joindre",
  "Statuts ou récépissé à joindre",
  "Politique de confidentialité à joindre",
];

export function Legal() {
  return (
    <main className="bg-[#fbfaf4] px-4 pb-20 pt-32 md:px-8">
      <Seo {...PAGES_SEO.legal} />
      <section className="container-xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Documents</p>
          <h1 className="font-display text-5xl font-semibold leading-tight text-slate-950 md:text-7xl">Mentions légales</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Cette page est prête à recevoir les documents officiels qui seront joints au site.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {documents.map((document) => (
            <div key={document} className="rounded-[2rem] bg-white p-7 shadow-sm">
              <FileText className="mb-8 h-10 w-10 text-emerald-700" />
              <h2 className="text-xl font-semibold text-slate-950">{document}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Emplacement réservé pour le fichier ou le lien correspondant.</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
