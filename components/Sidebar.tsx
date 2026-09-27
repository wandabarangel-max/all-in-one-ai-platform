import Link from 'next/link';
import { Bot, BriefcaseBusiness, LayoutDashboard, NotebookText, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: LayoutDashboard },
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Study', href: '/study', icon: NotebookText },
  { label: 'AI Chat', href: '/chat', icon: Bot },
  { label: 'Money', href: '/money', icon: BriefcaseBusiness },
  { label: 'Accounts', href: '/accounts', icon: ShieldCheck },
  { label: 'Devices', href: '/devices', icon: Smartphone },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-slate-950 p-5 lg:block">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-200">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">AI OS</p>
            <h2 className="text-lg font-semibold">FlowPilot</h2>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-900/70 px-3 py-3 text-sm text-slate-200 transition hover:border-brand-500/40 hover:bg-slate-800"
          >
            <Icon className="h-4 w-4 text-brand-300" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
