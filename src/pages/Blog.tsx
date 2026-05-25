import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { DOMAIN_COLORS, DOMAIN_LABELS, cn } from "@/lib/utils";

export function Blog() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const regular  = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="pt-20">
      <section className="relative py-28 px-4 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm tracking-[0.2em] uppercase mb-4">Actualités</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-display text-white mb-6">
            Blog & <span className="text-gradient italic">Actualités</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-xl max-w-xl mx-auto">
            Suivez nos missions, nos résultats et nos réflexions sur le développement durable.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          {/* Featured */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {featured.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={cn("text-xs px-3 py-1 rounded-full border backdrop-blur-sm", DOMAIN_COLORS[post.category]?.bg || "bg-purple-500/20", DOMAIN_COLORS[post.category]?.text || "text-purple-400", DOMAIN_COLORS[post.category]?.border || "border-purple-500/30")}>
                      {DOMAIN_LABELS[post.category] || post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="font-display text-xl font-semibold text-white leading-snug">{post.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-white text-xs font-medium">{post.author}</p>
                        <p className="text-slate-500 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-slate-500 text-xs">
                      <Clock className="w-3.5 h-3.5" />{post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Regular posts */}
          <h3 className="font-display text-2xl text-white mb-8">Tous les articles</h3>
          <div className="space-y-5">
            {regular.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card-glass p-5 flex gap-5 group hover:-translate-y-0.5 transition-all"
              >
                <img src={post.image} alt={post.title} className="w-24 h-20 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={cn("text-xs px-2 py-0.5 rounded-full border", DOMAIN_COLORS[post.category]?.bg || "bg-purple-500/20", DOMAIN_COLORS[post.category]?.text || "text-purple-400", DOMAIN_COLORS[post.category]?.border || "border-purple-500/30")}>
                      {DOMAIN_LABELS[post.category] || post.category}
                    </span>
                    <span className="text-slate-500 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-emerald-300 transition-colors line-clamp-2 text-sm">{post.title}</h3>
                  <p className="text-slate-500 text-xs">{post.date} · {post.author}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0 self-center" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
