import { useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex h-20 w-full items-center justify-between border-b px-10">
      <div className="text-3xl font-semibold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <span className="shrink-0">{session?.user?.name}</span>
        <button type="button" className="font-semibold hover:text-red-500">
          Sign Out
        </button>
      </div>
    </header>
  );
}
