'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import useStore from '@/stores/store';

export default function Products() {
  const setPageTitle = useStore((state) => state.setPageTitle);

  useEffect(() => {
    setPageTitle('products');
  }, [setPageTitle]);

  return (
    <>
      <Link
        className="rounded-md bg-blue-400 p-2 font-semibold text-white"
        href="/products/addproduct"
      >
        Add Product
      </Link>
    </>
  );
}
