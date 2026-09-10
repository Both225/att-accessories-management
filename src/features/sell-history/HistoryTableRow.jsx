import { formatCurrency } from "../../helper/format";

function HistoryTableRow({ item }) {
  const { id, name, model, category, price, amount, status, remark, time } =
    item;

  return (
    <div className="grid w-full grid-cols-[repeat(2,5rem)_18rem_14rem_repeat(3,10rem)_8rem_7rem_1fr] grid-rows-1 gap-8 border-b border-gray-300 py-4 pl-5 text-[1.4rem]">
      <p className="text-center">{id}</p>
      <img src="./assets/images/1.jpg" />
      <p>{name}</p>
      <p>{model}</p>
      <p>{category}</p>
      <p>{formatCurrency(price)}</p>
      <p>{amount}</p>
      <p>{status}</p>
      <p>{remark}</p>
      <p>{time}</p>
    </div>
  );
}

export default HistoryTableRow;
