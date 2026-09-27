import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { ChatPanel } from '@/components/ChatPanel';

export default function ChatPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">AI chat</p>
            <h1 className="mt-2 text-3xl font-bold">Study, money, and growth copilot</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
            Dashboard
          </Link>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
          <ChatPanel />

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
            <h2 className="text-xl font-semibold">Suggested prompts</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <div className="rounded-xl border border-white/10 bg-slate-950 p-3">Turn this topic into a 5-day learning plan.</div>
              <div className="rounded-xl border border-white/10 bg-slate-950 p-3">Generate a 30-day content strategy for my brand.</div>
              <div className="rounded-xl border border-white/10 bg-slate-950 p-3">Summarize this book and turn it into a business model.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
