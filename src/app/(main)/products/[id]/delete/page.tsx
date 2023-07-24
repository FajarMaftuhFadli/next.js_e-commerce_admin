'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Product from '@/types/Product';
import { METHODS } from 'http';

export default function Delete({ params }: { params: { id: string } }) {
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (goToProducts) {
      router.push('/products');
    }

    const fetchProduct = async () => {
      const response = await fetch(`/api/products?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      setProduct(data);
    };

    fetchProduct();
  }, [goToProducts, id, router]);

  const deleteProduct = async () => {
    const response = await fetch(`/api/products?id=${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setGoToProducts(true);
    }
  };

  return (
    <>
      <h2 className="mb-6 text-2xl">
        Do you really want to delete product{' '}
        <span className="font-semibold">{product?.name}</span>?
      </h2>
      <div className="flex space-x-4">
        <button
          type="button"
          className="rounded-md bg-white p-4 font-semibold shadow-md"
          onClick={() => deleteProduct()}
        >
          YES
        </button>
        <button
          type="button"
          className="rounded-md bg-white p-4 font-semibold shadow-md"
        >
          NO
        </button>
      </div>
    </>
  );
}
