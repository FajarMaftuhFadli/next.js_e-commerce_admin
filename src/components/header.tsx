import Link from 'next/link';
import IconBuildingStoreFront from './icons/building-storefront';
import AuthSighOutButton from './authSignOutButton';
import { useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="fixed top-0 z-10 flex h-14 w-full items-center justify-between px-4">
      <Link href="/" className="flex space-x-2">
        <IconBuildingStoreFront />
        <span>E-Commerce Admin</span>
      </Link>
      <div className="flex items-center space-x-4">
        <span className="shrink-0">{session?.user?.name}</span>
        <button>Sign Out</button>
      </div>
    </header>
  );
}
