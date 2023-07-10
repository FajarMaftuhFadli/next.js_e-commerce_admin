'use client';

import { useSession } from 'next-auth/react';

export default function ShowSession() {
  const { data: session } = useSession();

  return (
    <div className="fixed bottom-0 left-0 right-0 overflow-x-auto whitespace-nowrap bg-slate-800 py-10 font-mono text-slate-100">
      <pre>
        <code className="p-10">{JSON.stringify(session)}</code>
      </pre>
    </div>
  );
}
