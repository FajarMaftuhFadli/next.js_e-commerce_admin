import { signOut } from 'next-auth/react';

export default function AuthSighOutButton() {
  return (
    <button
      onClick={() => signOut()}
      type="button"
      className="my-auto block w-full rounded-md border border-slate-400 bg-white p-4 font-semibold transition-colors hover:bg-slate-50 hover:text-slate-800"
    >
      Sign out
    </button>
  );
}
