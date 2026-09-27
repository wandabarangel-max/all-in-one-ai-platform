import Link from 'next/link';

const stats = [
  { label: 'Study streak', value: '12 days', trend: '+4%' },
  { label: 'Income tracked', value: '$1,240', trend: '+$280' },
  { label: 'Content created', value: '38 pieces', trend: '+12' },
  { label: 'Accounts secured', value: '19', trend: '+3' },
];

const modules = [
  {
    title: 'AI Study Engine',
    description: 'Summarize books, prepare notes, generate step-by-step lessons, and build flashcards.',
    badge: 'Smart learning',
  },
  {
    title: 'Money Automation',
    description: 'Track freelance income, automate lead workflows, and find monetization opportunities.',
    badge: 'Growth',
  },
  {
    title: 'Content Studio',
    description: 'Generate blog posts, hooks, social captions, images, and short-form video scripts.',
    badge: 'Creator tools',
  },
  {
    title: 'Account & Device Hub',
    description: 'Manage passwords, secure devices, linked services, and multi-account access from one place.',
    badge: 'Secure sync',
  },
];

const tasks = [
  'Summarize “Atomic Habits” into a 5-day study plan',
  'Generate content calendar for a business coach brand',
  'Review Gmail inbox and draft a response workflow',
  'Track one new revenue stream and automate daily reports',
];

const integrations = [
  'Gmail & Google Workspace',
  'WhatsApp Business',
  'Phone / device management',
  'OpenAI GPT',
  'Google Gemini',
  'Anthropic Claude',
  'Perplexity',
  'Kings Chat / social workflow tools',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">AI Operating System</p>
            <h1 className="mt-2 text-2xl font-bold">All-in-One AI Platform</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
              Dashboard
            </Link>
            <Link href="/study" className="rounded-full border border-brand-500/40 bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-brand-400">
              Launch workspace
            </Link>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
              <p className="text-sm text-slate-300">{item.label}</p>
              <div className="mt-4 flex items-end justify-between">
                <span className="text-3xl font-semibold">{item.value}</span>
                <span className="text-sm text-emerald-400">{item.trend}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Core modules</h2>
              <span className="rounded-full border border-brand-500/40 bg-brand-500/10 px-2.5 py-1 text-xs uppercase tracking-[0.2em] text-brand-200">
                Active
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {modules.map((module) => (
                <article key={module.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                      {module.badge}
                    </span>
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{module.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-slate-900 p-6">
            <h2 className="text-xl font-semibold">Daily focus</h2>
            <ul className="mt-4 space-y-3">
              {tasks.map((task, index) => (
                <li key={task} className="flex gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-3 text-sm text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Connected integrations</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {integrations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-800 px-3 py-1.5 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">AI prompt workspace</h2>
            <div className="mt-4 rounded-2xl border border-brand-500/30 bg-slate-950 p-4">
              <p className="text-sm text-slate-400">Prompt</p>
              <p className="mt-3 text-lg font-medium text-brand-200">
                “Turn this book into a study roadmap, generate a lesson plan, and create a 7-day income plan.”
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <Link href="/dashboard" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-400">
                Run AI task
              </Link>
              <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
                Save workflow
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
