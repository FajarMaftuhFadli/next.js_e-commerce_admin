export default function AddProduct() {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Add Product</h2>
      <form className="flex max-w-2xl flex-col">
        <label htmlFor="product-name">Products name</label>
        <input
          id="product-name"
          type="text"
          className="mb-4 w-full rounded-md p-2 outline outline-1 outline-slate-400 focus:outline-blue-400"
        />
        <label htmlFor="product-description">Description</label>
        <textarea
          id="product-description"
          className="mb-4 w-full rounded-md p-2 outline outline-1 outline-slate-400 focus:outline-blue-400"
        />
        <label htmlFor="product-price">Price</label>
        <input
          type="number"
          id="product-price"
          className="mb-4 w-full rounded-md p-2 outline outline-1 outline-slate-400 focus:outline-blue-400"
        />
        <input
          type="submit"
          className="rounded-md bg-blue-400 p-2 font-semibold text-white"
        />
      </form>
    </>
  );
}
