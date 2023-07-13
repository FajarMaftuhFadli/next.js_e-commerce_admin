'use client';

import { useSession } from 'next-auth/react';

import AuthPopUp from '@/components/authPopUp';
import Aside from '@/components/aside';
import Header from '@/components/header';

export default function SessionChecker({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex h-full border-t">
        <Aside />
        <div className="h-full w-full overflow-y-auto bg-slate-100">
          <Header />
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <AuthPopUp />
    </div>
  );
}
