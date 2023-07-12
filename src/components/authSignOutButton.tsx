import { signOut } from 'next-auth/react';

export default function AuthSighOutButton() {
  return (
    <button
      onClick={() => signOut()}
      type="button"
      className="my-auto block w-full rounded-md bg-slate-200 p-4 font-semibold text-slate-800 shadow-md transition-colors hover:bg-slate-100 hover:text-slate-700"
    >
      Sign out
    </button>
  );
}
