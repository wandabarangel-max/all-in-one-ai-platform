# All-in-One AI Platform

A cloud-ready AI platform for learning, productivity, automation, device management, and revenue growth.

## Live Demo

🌐 **Your app is deployed!** Access it at the Vercel URL provided in your deployment.

## Features

✅ User authentication with Supabase (sign-up/sign-in)
✅ AI-powered study assistant
✅ Random joke generator (external API integration)
✅ Dashboard and workspace
✅ Book summaries and lesson generation ready
✅ Content creation studio scaffolding
✅ Money-tracking dashboard
✅ Account and device management hub
✅ AI chat interface ready
✅ Integration-ready for Gmail, WhatsApp, and devices
✅ Cloud-first scalable foundation
✅ Real-time data persistence with Supabase PostgreSQL

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes, Node.js
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth (email/password)
- **Hosting:** Vercel
- **External APIs:** Official Joke API, OpenAI/Gemini ready

## Quick Start

### Local Development

```bash
git clone https://github.com/wandabarangel-max/all-in-one-ai-platform.git
cd all-in-one-ai-platform
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

Then:

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
app/
  auth/              # Sign-up, sign-in pages
  api/               # API routes (jokes, health, etc.)
  dashboard/         # Main dashboard
  study/             # Study workspace
  chat/              # AI chat interface
  money/             # Revenue tracking
  content/           # Content generator
  accounts/          # Account management
  devices/           # Device management
  integrations/      # Integration status
  joke/              # Joke generator page

components/
  Sidebar.tsx        # Navigation
  AuthForm.tsx       # Auth UI (connected to Supabase)
  ChatPanel.tsx      # AI chat component
  JokeGenerator.tsx  # Joke generator component

lib/
  supabase.ts        # Supabase client & auth functions

database/
  schema.sql         # PostgreSQL schema
```

## Features Breakdown

### 1. Authentication
- Email/password sign-up and sign-in
- Supabase Auth manages user sessions
- Password reset ready

### 2. Study Engine
- Create study plans
- Save study notes
- Book summarization ready
- Lesson generation scaffolded

### 3. AI Chat
- Chat interface ready
- Save chat history to database
- Connected to OpenAI/Gemini APIs (configure keys)

### 4. Money Dashboard
- Track income streams
- Monitor revenue sources
- Automation workflows ready

### 5. Joke Generator
- Real external API integration
- Fetches random jokes
- Works on all devices
- Great test for API endpoints

### 6. Account & Device Hub
- Manage connected services
- Track devices
- Store OAuth tokens securely (implement RLS)

## Database Schema

Tables created in Supabase PostgreSQL:

- `users` — User profiles
- `study_plans` — Study goals and roadmaps
- `study_notes` — Book notes and summaries
- `content_ideas` — AI-generated content
- `income_streams` — Revenue tracking
- `connected_accounts` — OAuth integrations (Gmail, WhatsApp)
- `devices` — Connected devices
- `ai_chat_history` — Saved conversations

## Environment Variables

```bash
NEXT_PUBLIC_APP_NAME="All-in-One AI Platform"
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
OPENAI_API_KEY="" (optional)
GEMINI_API_KEY="" (optional)
CLAUDE_API_KEY="" (optional)
```

## Roadmap

✅ Phase 1: MVP dashboard and UI
✅ Phase 2: Authentication and database
✅ Phase 3: Joke generator (test API integration)
🚀 Phase 4: AI chat with real history
🚀 Phase 5: Study engine and notes
🚀 Phase 6: Money dashboard and automation
🚀 Phase 7: Gmail/WhatsApp integrations
🚀 Phase 8: Mobile app (React Native)
🚀 Phase 9: Desktop app (Electron)

## Deployment

This app is deployed on **Vercel** and connected to **Supabase** for the database.

- Frontend: Vercel
- Database: Supabase PostgreSQL
- Auth: Supabase Auth
- APIs: Next.js serverless functions

## Mobile App (Coming Soon)

We'll build a native mobile app using:
- **React Native** or **Flutter**
- Same backend (Supabase)
- Native features (camera, contacts, notifications)
- Offline-first sync
- App Store + Google Play distribution

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to GitHub
- Use Row-Level Security (RLS) on Supabase tables
- Store sensitive tokens server-side only
- Validate all API inputs
- Use HTTPS in production

## Contributing

Fork the repo, create a feature branch, and submit a PR.

## Support

For issues or questions, open a GitHub issue.

## License

MIT

---

**Built with ❤️ for learning, creating, and earning.**
