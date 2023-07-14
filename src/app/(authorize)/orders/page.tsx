'use client';

import { useEffect } from 'react';
import useStore from '@/stores/store';

export default function Orders() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle('orders');
  }, [setPageTitle]);

  return <>Orders</>;
}
