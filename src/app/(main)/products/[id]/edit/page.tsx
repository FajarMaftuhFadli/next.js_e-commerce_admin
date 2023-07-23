'use client';
import FormProduct from '@/components/formProduct';
import { useEffect, useState } from 'react';

import Product from '@/types/Product';

export default function Edit({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/products?id=${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProduct(await response.json());
    };

    fetchData();
  }, [params.id]);

  // product && console.log(product);

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Edit Product</h2>
      {product && <FormProduct {...product} />}
    </>
  );
}
