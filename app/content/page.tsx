import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';

const contentIdeas = [
  {
    title: 'Short-form video script',
    description: 'Build five 30-second hooks for a business education brand.',
  },
  {
    title: 'Blog outline',
    description: 'Research and structure a post on AI workflows for creators.',
  },
  {
    title: 'Email sequence',
    description: 'Draft a lead magnet funnel that turns interest into sales.',
  },
  {
    title: 'Course lesson',
    description: 'Turn a topic into a step-by-step teaching flow with worksheets.',
  },
];

const outputTypes = ['Blog posts', 'Image prompts', 'Video briefs', 'Newsletter copy', 'Social captions'];

export default function ContentPage() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-300">Content studio</p>
            <h1 className="mt-2 text-3xl font-bold">AI content engine</h1>
          </div>
          <Link href="/dashboard" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
            Dashboard
          </Link>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Ready-to-generate ideas</h2>
            <div className="mt-5 space-y-4">
              {contentIdeas.map((idea) => (
                <div key={idea.title} className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <p className="text-lg font-medium text-brand-200">{idea.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{idea.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/10 to-slate-900 p-6">
            <h2 className="text-xl font-semibold">Output formats</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {outputTypes.map((type) => (
                <span key={type} className="rounded-full border border-white/10 bg-slate-950 px-3 py-2 text-sm text-slate-200">
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-500/30 bg-slate-950 p-4">
              <p className="text-sm text-slate-400">Prompt</p>
              <p className="mt-3 text-base leading-7 text-brand-100">
                “Generate a 20-piece content plan for a business education page focused on AI, productivity, and growth.”
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
