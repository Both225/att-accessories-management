function SellTableHeader() {
  return (
    <div className="mt-10 grid w-full grid-rows-1 bg-blue-100 py-4 font-medium min-[1050px]:pl-12 md:grid-cols-[repeat(2,2rem)_5rem_13rem_repeat(2,10rem)_5rem_1fr] md:gap-6 md:pl-2 lg:grid-cols-[repeat(2,2rem)_5rem_15rem_repeat(2,1fr)_5rem_1fr] lg:gap-12">
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
