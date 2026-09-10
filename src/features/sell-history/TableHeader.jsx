function HistoryTableHeader() {
  return (
    <div className="mt-10 grid w-full grid-cols-[repeat(2,5rem)_18rem_14rem_repeat(3,10rem)_8rem_7rem_1fr] grid-rows-1 gap-8 bg-blue-100 py-4 pl-5 font-medium">
      <p className="text-center">ID</p>
      <p>Image</p>
      <p>Name</p>
      <p>Model</p>
      <p>Category</p>
      <p>Price</p>
      <p>Amount</p>
      <p>Status</p>
      <p>Remark</p>
      <p>Time</p>
    </div>
  );
}

export default HistoryTableHeader;
