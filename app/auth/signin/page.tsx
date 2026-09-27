'use client';

import { AuthForm } from '@/components/AuthForm';

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-300">Welcome</p>
          <h1 className="mt-2 text-3xl font-bold">Sign in</h1>
          <p className="mt-2 text-sm text-slate-400">Access your AI-powered productivity workspace</p>
        </div>

        <AuthForm mode="signin" />

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-slate-400">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
