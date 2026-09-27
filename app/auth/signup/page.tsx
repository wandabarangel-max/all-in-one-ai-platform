'use client';

import { AuthForm } from '@/components/AuthForm';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-300">Get Started</p>
          <h1 className="mt-2 text-3xl font-bold">Create account</h1>
          <p className="mt-2 text-sm text-slate-400">Join thousands learning, creating, and earning</p>
        </div>

        <AuthForm mode="signup" />
      </div>
    </main>
  );
}
