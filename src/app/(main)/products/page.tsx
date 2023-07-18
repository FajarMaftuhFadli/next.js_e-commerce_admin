'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProducts(await response.json());
      // console.log(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Link
          className="block w-fit rounded-md bg-blue-400 p-2 font-semibold text-white"
          href="/products/addproduct"
        >
          Add Product
        </Link>
      </div>
      <table className="w-full border border-slate-400 bg-white text-sm shadow-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900">
              Name
            </th>
            <th className="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900">
              Description
            </th>
            <th className="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td className="border border-slate-300 p-4 text-slate-500">
                {product.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
