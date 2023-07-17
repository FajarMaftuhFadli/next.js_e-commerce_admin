'use client';

import { useEffect } from 'react';
import useStore from '@/stores/store';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle('products');
  }, [setPageTitle]);

  return <>{children}</>;
}
