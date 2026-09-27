import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';

const accountCards = [
  { title: 'Gmail', status: 'Connected', detail: 'Inbox automation ready' },
  { title: 'WhatsApp', status: 'Setup required', detail: 'Business API config pending' },
  { title: 'Google Workspace', status: 'Connected', detail: 'Drive, Docs, Calendar linked' },
  { title: 'Phone / Device hub', status: 'Secure', detail: '3 devices synced' },
];

export default function AccountsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">Accounts</p>
            <h1 className="mt-2 text-3xl font-bold">Secure account & workspace hub</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
            Main dashboard
          </Link>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {accountCards.map((account) => (
            <div key={account.title} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-sm text-slate-300">{account.title}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold">{account.status}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <p className="mt-3 text-sm text-slate-400">{account.detail}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Security actions</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="rounded-xl border border-white/10 bg-slate-950 p-3">Rotate 2FA codes for all high-priority accounts.</li>
            <li className="rounded-xl border border-white/10 bg-slate-950 p-3">Create secure password vault entries and export to cloud backup.</li>
            <li className="rounded-xl border border-white/10 bg-slate-950 p-3">Review Gmail filters and WhatsApp response workflow.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
