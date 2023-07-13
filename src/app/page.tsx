'use client';

import AuthPopUp from '@/components/authPopUp';
import Aside from '@/components/aside';
// import ShowSession from '@/components/showSession';
import { useSession } from 'next-auth/react';
import Header from '@/components/header';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Header />
        <main className="flex h-full border-t border-slate-400">
          <Aside />
          <div className="h-full overflow-y-auto p-4">
            Hello Lorem ipsum dolor sit amet.
          </div>
          {/* <ShowSession /> */}
        </main>
      </>
    );
  }
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <AuthPopUp />
    </div>
  );
}
