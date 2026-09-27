const sampleMessages = [
  {
    role: 'assistant',
    text: 'I can help you build a 14-day study and income system. Tell me the topic, the goal, and your preferred time commitment.',
  },
  {
    role: 'user',
    text: 'Create a study plan for business growth and a simple way to make money online.',
  },
  {
    role: 'assistant',
    text: 'Here is the plan: 1) Learn the fundamentals, 2) Build a product or service, 3) Automate outreach, 4) Track leads and income weekly.',
  },
];

export function ChatPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">AI assistant</h2>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
          Online
        </span>
      </div>

      <div className="space-y-4">
        {sampleMessages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={message.role === 'assistant' ? 'mr-8 rounded-2xl bg-slate-800 p-3' : 'ml-8 rounded-2xl bg-brand-500/15 p-3 text-brand-100'}
          >
            <p className="text-sm leading-6">{message.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        <input
          className="flex-1 rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
          placeholder="Ask your AI assistant..."
        />
        <button className="rounded-2xl bg-brand-500 px-4 py-3 text-sm font-medium text-white hover:bg-brand-400">
          Send
        </button>
      </div>
    </div>
  );
}
