import Link from 'next/link';
import AuthSighOutButton from './authSignOutButton';
import IconBuildingStoreFront from './icons/building-storefront';
import { useSession } from 'next-auth/react';
import IconHome from './icons/home';
import IconCog6Tooth from './icons/cog-6-tooth';
import IconArchiveBox from './icons/archive-box';
import IconQueueList from './icons/queue-list';

export default function Nav() {
  const { data: session } = useSession();
  return (
    <aside className="flex h-screen w-60 flex-col justify-between space-y-10 overflow-y-auto border-2 border-slate-400 p-4">
      <div className="space-y-10">
        <Link href="/" className="flex space-x-2">
          <IconBuildingStoreFront />
          <span>E-Commerce Admin</span>
        </Link>
        <nav className="space-y-4">
          <Link href="/" className="flex space-x-2">
            <IconHome />
            <span>Dashboard</span>
          </Link>
          <Link href="/" className="flex space-x-2">
            <IconQueueList />
            <span>Orders</span>
          </Link>
          <Link href="/" className="flex space-x-2">
            <IconArchiveBox />
            <span>Products</span>
          </Link>
          <Link href="/" className="flex space-x-2">
            <IconCog6Tooth />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      <div>
        <span>Login as {session?.user?.name}</span>
        <AuthSighOutButton />
      </div>
    </aside>
  );
}
