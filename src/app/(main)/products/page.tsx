import Link from 'next/link';

export default function Products() {
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
