'use client';

import IconPencilSquare from '@/components/icons/pencil-square';
import IconTrash from '@/components/icons/trash';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
  description: string;
  name: string;
  price: number;
  __v: number;
  _id: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setProducts(await response.json());
      console.log(products);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mb-4 w-full">
        <Link
          className="block w-fit rounded-md bg-blue-400 p-2 font-semibold text-white"
          href="/products/addproduct"
        >
          Add Product
        </Link>
      </div>
      <table className="w-full border border-slate-300 bg-white text-sm shadow-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="w-3/12 border border-slate-300 p-2 text-left font-semibold text-slate-900">
              Name
            </th>
            <th className="w-5/12 border border-slate-300 p-2 text-left font-semibold text-slate-900">
              Description
            </th>
            <th className="w-2/12 border border-slate-300 p-2 text-left font-semibold text-slate-900">
              Price
            </th>
            <th className="w-2/12 border border-slate-300 p-2 text-left font-semibold text-slate-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr key={product._id} className="hover:bg-slate-50">
              <td className="border border-slate-300 p-2 text-slate-500">
                {product.name}
              </td>
              <td className="border border-slate-300 p-2 text-slate-500">
                {product.description}
              </td>
              <td className="border border-slate-300 p-2 text-slate-500">
                {product.price}
              </td>
              <td className="border border-slate-300 p-2 text-slate-500">
                <div className="flex space-x-2">
                  <Link
                    href={`/products/edit/${product._id}`}
                    className="flex items-center rounded-md border border-slate-300 p-1 hover:border-blue-400 hover:text-blue-400"
                  >
                    <IconPencilSquare className="h-4 w-4" />
                    <span>EDIT</span>
                  </Link>
                  <Link
                    href={`/products/delete/${product._id}`}
                    className="flex items-center rounded-md border border-slate-300 p-1 hover:border-red-400 hover:text-red-400"
                  >
                    <IconTrash className="h-4 w-4" />
                    <span>DELETE</span>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
