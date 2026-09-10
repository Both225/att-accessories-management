function TableHeader() {
  return (
    <div className="mt-10 grid w-full grid-cols-[repeat(2,5rem)_repeat(2,1fr)_10rem_10rem_10rem_5rem] grid-rows-1 gap-12 bg-blue-100 py-4 pl-12 font-medium">
      <p className="text-center">ID</p>
      <p>Image</p>
      <p>Name</p>
      <p>Model</p>
      <p>Category</p>
      <p>Price</p>
      <p>Amount</p>
    </div>
  );
}

export default TableHeader;
