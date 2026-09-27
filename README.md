# All-in-One AI Platform

A cloud-ready AI platform for learning, productivity, automation, device management, and revenue growth.

## Features

- User authentication with Supabase
- AI-powered study assistant
- Book summaries and lesson generation
- Content creation studio for articles, social posts, scripts, and images
- Money-tracking and automation dashboard
- Account and device management hub
- Google, Gmail, WhatsApp, and device integration-ready architecture
- Cloud-first scalable foundation for later desktop and mobile deployment
- Real-time chat history and persistent data storage

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Supabase (Auth + PostgreSQL Database)
- OpenAI / Gemini / Claude integration ready

## Getting started

### Prerequisites

- Node.js 18+
- Supabase account

### Installation

1. Clone the repo.
2. Install dependencies:

```bash
npm install
```

3. Create your environment file:

```bash
cp .env.example .env.local
```

4. Add your Supabase credentials in `.env.local`.
5. Run the database schema in your Supabase SQL editor or with:

```bash
npm run db:push
```

6. Start the app:

```bash
npm run dev
```

Open http://localhost:3000

## Project structure

- app/auth
- app/api
- app/dashboard
- app/study
- app/chat
- app/money
- app/content
- app/accounts
- app/devices
- app/integrations
- components/
- lib/
- database/

## Environment variables

```bash
NEXT_PUBLIC_APP_NAME="All-in-One AI Platform"
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
OPENAI_API_KEY=""
GEMINI_API_KEY=""
CLAUDE_API_KEY=""
```

## Roadmap

1. ✅ MVP dashboard and AI workspace
2. ✅ Auth and database scaffolding
3. 🚀 AI chat with real prompt history
4. 🚀 Study engine and learning modules
5. 🚀 Money dashboard and workflow automation
6. 🚀 Gmail/WhatsApp/phone integrations
7. 🚀 Desktop + mobile app expansion
