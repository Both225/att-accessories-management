import { formatCurrency, formatHourMinute } from "../../helper/format";

function HistoryTableRow({ product }) {
  const {
    id,
    productId,
    total_price,
    quantity,
    isPaid,
    remark,
    created_at: time,
  } = product;

  const { name, model, category } = productId;

  return (
    <div className="grid w-full grid-cols-[repeat(2,5rem)_18rem_14rem_repeat(3,10rem)_8rem_7rem_1fr] grid-rows-1 gap-8 border-b border-gray-300 py-4 pl-5 text-[1.4rem]">
      <p className="text-center">{id}</p>
      <img src="./assets/images/1.jpg" />
      <p>{name}</p>
      <p>{model}</p>
      <p>{category}</p>
      <p>{formatCurrency(total_price)}</p>
      <p>{quantity}</p>
      <p>{isPaid ? "paid" : "not paid"}</p>
      <p>{remark || "none"}</p>
      <p>{formatHourMinute(time)}</p>
    </div>
  );
}

export default HistoryTableRow;
