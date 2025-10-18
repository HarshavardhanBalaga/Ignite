'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let result;
    if (mode === 'login') {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
    }

    setLoading(false);
    if (result.error) {
      alert(result.error.message);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#171717]">
      <div className="w-full max-w-md p-8 rounded-2xl bg-[#1f1f1f] shadow-xl border border-[#2e2e2e]">
        <h1 className="text-3xl font-semibold text-center mb-6 text-[#e5e5e5]">
          {mode === 'login' ? (
            <>
              Welcome <span className="text-orange-600">Back</span>
            </>
          ) : (
            <>
              Create <span className="text-orange-600">Account</span>
            </>
          )}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#262626] text-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#262626] text-[#e5e5e5] focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition duration-200"
          >
            {loading
              ? 'Please wait...'
              : mode === 'login'
              ? 'Login'
              : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          {mode === 'login' ? (
            <>
              Don’t have an account?{' '}
              <button
                onClick={() => setMode('signup')}
                className="text-blue-400 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-blue-400 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
