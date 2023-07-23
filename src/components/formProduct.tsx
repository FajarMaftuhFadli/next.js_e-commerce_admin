'use client';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Product from '@/types/Product';

export default function FormProduct({
  _id,
  name: _name,
  description: _description,
  price: _price,
}: Partial<Pick<Product, '_id' | 'name' | 'description' | 'price'>>) {
  const [name, setName] = useState(_name || '');
  const [description, setDescription] = useState(_description || '');
  const [price, setPrice] = useState(_price || '');
  const [goToProducts, setGoToProducts] = useState(false);

  const submitProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (_id) {
      await fetch(`/api/products`, {
        method: 'PUT',
        body: JSON.stringify({
          _id,
          name,
          description,
          price,
        }),
      });
    } else {
      await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({
          name,
          description,
          price,
        }),
      });
    }

    setGoToProducts(true);
  };

  const router = useRouter();

  useEffect(() => {
    if (goToProducts) {
      router.push('/products');
    }
  }, [goToProducts, router]);

  return (
    <>
      <form className="flex max-w-2xl flex-col" onSubmit={submitProduct}>
        <label htmlFor="product-name">Products name</label>
        <input
          className="mb-4 w-full rounded-md p-2 outline outline-1 outline-slate-400 focus:outline-blue-400"
          type="text"
          id="product-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="product-description">Description</label>
        <textarea
          className="mb-4 w-full rounded-md p-2 outline outline-1 outline-slate-400 focus:outline-blue-400"
          id="product-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="product-price">Price</label>
        <input
          className="mb-4 w-full rounded-md p-2 outline outline-1 outline-slate-400 focus:outline-blue-400"
          type="number"
          id="product-price"
          value={price}
          min={0}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="rounded-md bg-blue-400 p-2 font-semibold text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
}
