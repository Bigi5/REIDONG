import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { Users, TrendingUp, Heart, Eye, Globe, ArrowUp, ArrowDown, Activity } from "lucide-react";
import { DASHBOARD_MOCK, DOMAIN_STATS, ANNUAL_STATS } from "@/data/stats";
import { formatCurrency, cn } from "@/lib/utils";

function KpiCard({ icon: Icon, label, value, trend, sub, color = "emerald" }: {
  icon: React.ElementType; label: string; value: string; trend: string; sub: string; color?: string;
}) {
  const isUp = trend.startsWith("+");
  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-500/15 text-emerald-400",
    blue:    "bg-blue-500/15 text-blue-400",
    amber:   "bg-amber-500/15 text-amber-400",
    red:     "bg-red-500/15 text-red-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="card-glass p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center", colorMap[color])}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={cn("flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
          isUp ? "bg-emerald-500/15 text-emerald-400" : "bg-red-500/15 text-red-400")}>
          {isUp ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          {trend}
        </span>
      </div>
      <p className="font-display text-3xl font-semibold text-white mb-1">{value}</p>
      <p className="text-white text-sm font-medium">{label}</p>
      <p className="text-slate-500 text-xs mt-1">{sub}</p>
    </motion.div>
  );
}

const CHART_COLORS = {
  primary:   "#10b981",
  secondary: "#34d399",
  tertiary:  "#6ee7b7",
  grid:      "rgba(255,255,255,0.05)",
  text:      "#64748b",
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-slate-900 border border-white/10 rounded-xl p-3 shadow-2xl">
        <p className="text-slate-400 text-xs mb-2">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} className="text-sm font-medium" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === "number" && entry.value > 1000
              ? entry.value.toLocaleString("fr-FR") : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function Dashboard() {
  const [liveCount, setLiveCount] = useState(47);
  const { monthlyVisitors, recentDonations, topPages } = DASHBOARD_MOCK;

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((c) => c + Math.floor(Math.random() * 3 - 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-white/5 bg-slate-950/80 backdrop-blur-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-white font-semibold text-lg">Dashboard Analytics</h1>
            <p className="text-slate-500 text-sm">REID ONG · Données simulées · Mise à jour temps réel</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">{liveCount} visiteurs actifs</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard icon={Users}      label="Visiteurs ce mois"  value="34 210"    trend="+12.4%"  sub="vs mois dernier"       color="emerald" />
          <KpiCard icon={Heart}      label="Dons ce mois"       value="28 500 €"  trend="+18.2%"  sub="847 donateurs"         color="red" />
          <KpiCard icon={Eye}        label="Pages vues"         value="142 800"   trend="+8.7%"   sub="3.8 pages/session"     color="blue" />
          <KpiCard icon={TrendingUp} label="Taux d'engagement"  value="72%"       trend="+3.1%"   sub="Taux rebond : 28%"     color="amber" />
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Area Chart */}
          <div className="lg:col-span-2 card-glass p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold">Visiteurs & Dons</h3>
                <p className="text-slate-500 text-sm">Évolution annuelle 2024</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-400"><span className="w-3 h-0.5 bg-emerald-400 inline-block rounded" />Visiteurs</span>
                <span className="flex items-center gap-1.5 text-slate-400"><span className="w-3 h-0.5 bg-emerald-600 inline-block rounded" />Dons (€)</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={monthlyVisitors}>
                <defs>
                  <linearGradient id="gVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#10b981" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gDons" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#059669" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="visitors" name="Visiteurs" stroke="#10b981" strokeWidth={2} fill="url(#gVisitors)" />
                <Area type="monotone" dataKey="donations" name="Dons (€)" stroke="#059669" strokeWidth={2} fill="url(#gDons)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="card-glass p-6">
            <h3 className="text-white font-semibold mb-1">Répartition budgétaire</h3>
            <p className="text-slate-500 text-sm mb-4">Par domaine d'action</p>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={DOMAIN_STATS} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={3} dataKey="value">
                  {DOMAIN_STATS.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mt-2">
              {DOMAIN_STATS.map((d) => (
                <div key={d.domain} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                  <span className="text-slate-400 text-sm flex-1">{d.domain}</span>
                  <span className="text-white text-sm font-medium">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bar Chart + Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <div className="lg:col-span-2 card-glass p-6">
            <h3 className="text-white font-semibold mb-1">Bénéficiaires annuels</h3>
            <p className="text-slate-500 text-sm mb-6">Croissance 2020 – 2024</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={ANNUAL_STATS} barSize={28}>
                <CartesianGrid stroke={CHART_COLORS.grid} strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" tick={{ fill: CHART_COLORS.text, fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: CHART_COLORS.text, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="beneficiaries" name="Bénéficiaires" fill="#10b981" radius={[4, 4, 0, 0]}>
                  {ANNUAL_STATS.map((_, i) => (
                    <Cell key={i} fill={i === ANNUAL_STATS.length - 1 ? "#34d399" : "#10b981"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Pages */}
          <div className="card-glass p-6">
            <h3 className="text-white font-semibold mb-4">Pages les plus visitées</h3>
            <div className="space-y-3">
              {topPages.map((p, i) => (
                <div key={p.page} className="flex items-center gap-3">
                  <span className="text-slate-600 text-xs w-5 text-right font-mono">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-300 text-sm font-mono truncate">{p.page}</p>
                    <div className="mt-1 h-1 bg-white/5 rounded-full">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(p.views / topPages[0].views) * 100}%` }} />
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-white text-xs font-medium">{p.views.toLocaleString("fr-FR")}</p>
                    <p className={cn("text-xs", p.trend.startsWith("+") ? "text-emerald-400" : "text-red-400")}>{p.trend}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="card-glass p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white font-semibold">Dons récents</h3>
              <p className="text-slate-500 text-sm">Flux en temps réel (simulé)</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Live
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  {["Donateur", "Pays", "Montant", "Heure", "Statut"].map((h) => (
                    <th key={h} className="text-left text-slate-500 text-xs uppercase tracking-wider pb-3 pr-6 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentDonations.map((d, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-white/3 transition-colors"
                  >
                    <td className="py-3 pr-6 text-white font-medium">{d.name}</td>
                    <td className="py-3 pr-6 text-2xl">{d.country}</td>
                    <td className="py-3 pr-6 text-emerald-400 font-mono font-semibold">{formatCurrency(d.amount)}</td>
                    <td className="py-3 pr-6 text-slate-500">{d.date}</td>
                    <td className="py-3">
                      <span className="bg-emerald-500/15 text-emerald-400 text-xs px-2 py-0.5 rounded-full border border-emerald-500/20">Validé</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Geographic */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { country: "🇫🇷 France",        visits: "12 840", pct: 38 },
            { country: "🇧🇪 Belgique",       visits: "4 210",  pct: 12 },
            { country: "🇨🇮 Côte d'Ivoire", visits: "3 980",  pct: 12 },
            { country: "🇨🇭 Suisse",         visits: "2 840",  pct: 8 },
          ].map(({ country, visits, pct }) => (
            <div key={country} className="card-glass p-5">
              <p className="text-white text-sm font-medium mb-1">{country}</p>
              <p className="text-emerald-400 font-mono font-semibold mb-2">{visits}</p>
              <div className="h-1.5 bg-white/5 rounded-full">
                <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
              </div>
              <p className="text-slate-500 text-xs mt-1">{pct}% du trafic</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
