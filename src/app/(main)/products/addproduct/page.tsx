'use client';
import { FormEvent, useState } from 'react';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const createProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        price,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Add Product</h2>
      <form className="flex max-w-2xl flex-col" onSubmit={createProduct}>
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
