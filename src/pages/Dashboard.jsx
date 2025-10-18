'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push('/login');
      else setUser(user);
    });
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Welcome, {user.email}</h1>
      <button
  onClick={async () => {
    await supabase.auth.signOut();
    router.push('/login');
  }}
  className="px-4 py-2 bg-red-500 text-white rounded-md mt-4"
>
  Logout
</button> 

    </div>
  );
}
