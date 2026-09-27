import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';

const integrations = [
  { name: 'Gmail', status: 'Connected', detail: 'Inbox triage and email drafting', tone: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  { name: 'WhatsApp Business', status: 'Setup required', detail: 'Messaging automation and customer replies', tone: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
  { name: 'Google Workspace', status: 'Connected', detail: 'Docs, Drive, Calendar, and Admin sync', tone: 'bg-sky-500/10 text-sky-300 border-sky-500/30' },
  { name: 'Phone / SMS', status: 'Ready', detail: 'Call and SMS-ready routing layer', tone: 'bg-violet-500/10 text-violet-300 border-violet-500/30' },
];

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">Integrations</p>
            <h1 className="mt-2 text-3xl font-bold">Connected tools and channels</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
            Dashboard
          </Link>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {integrations.map((item) => (
            <div key={item.name} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-lg font-semibold">{item.name}</p>
                <span className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${item.tone}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-300">{item.detail}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Integration roadmap</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="rounded-xl border border-white/10 bg-slate-950 p-3">Connect Gmail OAuth and email workflow automation.</li>
            <li className="rounded-xl border border-white/10 bg-slate-950 p-3">Configure WhatsApp Business API for lead replies and notifications.</li>
            <li className="rounded-xl border border-white/10 bg-slate-950 p-3">Add a device registry and remote sync layer for secure phone and laptop management.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
