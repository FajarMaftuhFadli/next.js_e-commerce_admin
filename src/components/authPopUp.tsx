import { signIn } from 'next-auth/react';

export default function AuthPopUp() {
  return (
    <div className="rounded-md border border-slate-400 p-10 sm:p-20">
      <div className="max-w-xs space-y-10">
        <h2 className="text-2xl font-bold">Welcome back!</h2>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing</span>
        <div className="space-y-6">
          <button
            onClick={() => signIn('google')}
            type="button"
            className="my-auto block w-full rounded-md border border-slate-400 bg-white p-4 font-semibold transition-colors hover:bg-slate-50 hover:text-slate-800"
          >
            Google
          </button>
          <button
            onClick={() => signIn('github')}
            type="button"
            className="my-auto block w-full rounded-md border border-slate-400 bg-white p-4 font-semibold transition-colors hover:bg-slate-50 hover:text-slate-800"
          >
            Github
          </button>
        </div>
        <div className="text-center">
          Don&apos;t you have an account?{' '}
          <a className="font-semibold text-blue-500">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
