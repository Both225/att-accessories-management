function TableHeader() {
  return (
    <div className="mt-10 grid w-full grid-rows-1 gap-8 bg-blue-100 py-4 pl-12 font-medium md:grid-cols-[repeat(2,5rem)_repeat(2,1fr)_repeat(3,4rem)_5rem] md:pl-6 md:text-[1.4rem] lg:grid-cols-[repeat(2,5rem)_repeat(2,1fr)_repeat(3,10rem)_5rem]">
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
