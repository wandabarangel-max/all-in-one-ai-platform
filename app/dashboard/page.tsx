import Link from 'next/link';

const overviewCards = [
  { label: 'Study Plan', value: '3 active courses', icon: '📚' },
  { label: 'Income Streams', value: '$1,240 tracked', icon: '💸' },
  { label: 'AI Content', value: '11 drafts', icon: '✍️' },
  { label: 'Devices', value: '6 connected', icon: '📱' },
];

const quickActions = [
  'Summarize book chapter',
  'Generate lesson outline',
  'Create content calendar',
  'Check account security',
  'Review Gmail inbox',
  'Track revenue source',
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900 p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-300">Workspace</p>
            <h1 className="mt-2 text-3xl font-bold">Business & learning dashboard</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
              Home
            </Link>
            <Link href="/study" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400">
              Study workspace
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <div className="mb-4 text-2xl">{card.icon}</div>
              <p className="text-sm text-slate-300">{card.label}</p>
              <p className="mt-2 text-2xl font-semibold">{card.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">AI command center</h2>
            <div className="mt-4 rounded-2xl border border-brand-500/30 bg-slate-950 p-4">
              <p className="text-sm text-slate-400">Prompt</p>
              <p className="mt-3 text-lg text-brand-200">
                “Create a complete 14-day learning sprint that combines reading, notes, and monetization tasks.”
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <span key={action} className="rounded-full border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-200">
                  {action}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/10 to-slate-900 p-6">
            <h2 className="text-xl font-semibold">Growth snapshot</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-200">
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Courses launched</span>
                <span className="font-semibold text-emerald-400">2</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Active leads</span>
                <span className="font-semibold text-emerald-400">14</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Automation tasks</span>
                <span className="font-semibold text-emerald-400">9</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
