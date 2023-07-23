'use client';
import { useEffect, useState } from 'react';

interface Product {
  description: string;
  name: string;
  price: number;
  __v: number;
  _id: string;
}

export default function Edit({ params }: { params: { id: string } }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [products, setProducts] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/products?id=${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProducts(await response.json());
    };

    fetchData();
  }, [params.id]);

  console.log(products);

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Edit Product</h2>
      <span>{'id: ' + params.id}</span>
      <form className="flex max-w-2xl flex-col">
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
