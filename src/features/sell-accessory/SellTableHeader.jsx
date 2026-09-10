function SellTableHeader() {
  return (
    <div className="mt-10 grid w-full grid-cols-[repeat(2,2rem)_5rem_15rem_repeat(2,1fr)_5rem_1fr] grid-rows-1 gap-12 bg-blue-100 py-4 pl-12 font-medium">
      <p></p>
      <p className="">ID</p>
      <p>Image</p>
      <p>Name</p>
      <p>Model</p>
      <p>Category</p>
      <p>Price</p>
    </div>
  );
}

export default SellTableHeader;
