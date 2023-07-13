'use client';

import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import AuthPopUp from '@/components/authPopUp';
import Aside from '@/components/aside';
import Header from '@/components/header';

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object
// We use client hydration to establish the <SessionProvider />
export default function AuthProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Auth>{children}</Auth>
    </SessionProvider>
  );
}

function Auth({ children }: { children?: React.ReactNode }) {
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
