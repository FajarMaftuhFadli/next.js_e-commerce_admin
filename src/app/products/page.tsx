'use client';

import { useEffect } from 'react';
import useStore from '@/stores/store';

import AuthCheckWrapper from '@/components/authCheckWrapper';

export default function Products() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle('products');
  }, [setPageTitle]);

  return (
    <AuthCheckWrapper>
      <main className="p-10">Products</main>
    </AuthCheckWrapper>
  );
}
