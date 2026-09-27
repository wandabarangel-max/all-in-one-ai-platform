import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';

const deviceList = [
  { name: 'MacBook Pro', status: 'Active', location: 'Office desk' },
  { name: 'iPhone 14', status: 'Synced', location: 'Daily carry' },
  { name: 'Samsung tablet', status: 'Secured', location: 'Field use' },
  { name: 'Windows laptop', status: 'Pending', location: 'Travel kit' },
];

const securityChecks = [
  'Two-factor validation enabled',
  'Suspicious login alerts monitored',
  'App permissions review completed',
  'Cloud backups scheduled',
];

export default function DevicesPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">Device hub</p>
            <h1 className="mt-2 text-3xl font-bold">Manage devices & security</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
            Dashboard
          </Link>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Connected devices</h2>
            <div className="mt-5 space-y-4">
              {deviceList.map((device) => (
                <div key={device.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div>
                    <p className="font-medium">{device.name}</p>
                    <p className="text-sm text-slate-400">{device.location}</p>
                  </div>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
                    {device.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-slate-900 p-6">
            <h2 className="text-xl font-semibold">Security checks</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-200">
              {securityChecks.map((check) => (
                <li key={check} className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
