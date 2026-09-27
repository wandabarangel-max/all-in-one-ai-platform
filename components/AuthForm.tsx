'use client';

import Link from 'next/link';
import { useState } from 'react';

interface AuthFormProps {
  mode?: 'signin' | 'signup';
}

export function AuthForm({ mode = 'signin' }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      if (mode === 'signup') {
        setSuccess('Account creation flow is ready. Connect your Supabase project to enable live sign-up.');
      } else {
        setSuccess('Sign in flow is ready. Connect your Supabase project to enable live authentication.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</div>
      )}
      {success && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
          {success}
        </div>
      )}

      {mode === 'signup' && (
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-brand-500/50"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-brand-500/50"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        className="w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-brand-500/50"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-brand-500 px-4 py-3 font-medium text-white hover:bg-brand-400 disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : mode === 'signin' ? 'Sign in' : 'Create account'}
      </button>

      <div className="text-center text-sm text-slate-400">
        {mode === 'signin' ? (
          <>
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-brand-300 hover:text-brand-200">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-brand-300 hover:text-brand-200">
              Sign in
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
