import Link from 'next/link';
import IconHome from './icons/home';
import IconCog6Tooth from './icons/cog-6-tooth';
import IconArchiveBox from './icons/archive-box';
import IconQueueList from './icons/queue-list';

export default function Aside() {
  return (
    <aside className="flex h-full flex-col justify-between space-y-10 overflow-y-auto border-r border-slate-400 p-4">
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
    </aside>
  );
}
