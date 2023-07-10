'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        <span className="font-semibold text-slate-800">
          Signed in as {session.user.email}
        </span>
        <button
          onClick={() => signOut()}
          type="button"
          className="my-auto block w-full rounded-md bg-slate-200 p-4 font-semibold text-slate-800 shadow-md transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <span className="font-semibold text-slate-800">Not signed in</span>
      <button
        onClick={() => signIn('google')}
        type="button"
        className="my-auto block w-full rounded-md bg-slate-200 p-4 font-semibold text-slate-800 shadow-md transition-colors hover:bg-slate-100 hover:text-slate-700"
      >
        Login with Google
      </button>
    </>
  );
}
