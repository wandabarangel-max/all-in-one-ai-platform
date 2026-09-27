import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';

const metrics = [
  { label: 'This week', value: '$420', note: '+18%' },
  { label: 'Leads', value: '38', note: '+12' },
  { label: 'Automations', value: '9', note: 'active' },
  { label: 'Expenses', value: '$145', note: '-7%' },
];

const streams = [
  { name: 'Freelance design', amount: '$210', status: 'Paid', color: 'bg-emerald-500/20 text-emerald-300' },
  { name: 'Affiliate content', amount: '$90', status: 'Pending', color: 'bg-amber-500/20 text-amber-300' },
  { name: 'Digital product', amount: '$120', status: 'In progress', color: 'bg-sky-500/20 text-sky-300' },
];

export default function MoneyPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">Money engine</p>
            <h1 className="mt-2 text-3xl font-bold">Revenue & automation dashboard</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
              Dashboard
            </Link>
            <button className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400">
              New revenue plan
            </button>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-sm text-slate-300">{metric.label}</p>
              <div className="mt-4 flex items-end justify-between">
                <span className="text-3xl font-semibold">{metric.value}</span>
                <span className="text-sm text-emerald-400">{metric.note}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Income streams</h2>
            <div className="mt-5 space-y-4">
              {streams.map((stream) => (
                <div key={stream.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div>
                    <p className="font-medium">{stream.name}</p>
                    <p className="text-sm text-slate-400">{stream.amount}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs ${stream.color}`}>{stream.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/10 to-slate-900 p-6">
            <h2 className="text-xl font-semibold">AI money strategy</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-200">
              <li className="rounded-xl border border-white/10 bg-slate-950/40 p-3">Create a premium digital product from study notes.</li>
              <li className="rounded-xl border border-white/10 bg-slate-950/40 p-3">Launch a simple lead magnet and email funnel.</li>
              <li className="rounded-xl border border-white/10 bg-slate-950/40 p-3">Automate outreach using AI summaries and social templates.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
