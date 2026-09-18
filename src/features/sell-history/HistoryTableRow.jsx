import { Button } from "antd";
import { formatCurrency, formatHourMinute } from "../../helper/format";

import { useUpdateStatus } from "./useUpdateStatus";
import Spinner from "../../components/Spinner";

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

  const { isUpdating, updatePaid } = useUpdateStatus();

  const { name, model, category } = productId;

  function handleCheckPaid() {
    updatePaid({ id, paid: true });
    console.log("click");
  }

  if (isUpdating) return <Spinner />;

  return (
    <div className="grid w-full grid-cols-[repeat(2,5rem)_18rem_14rem_repeat(4,10rem)_8rem_7rem_1fr] grid-rows-1 gap-8 border-b border-gray-300 py-4 pl-5 text-[1.4rem]">
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
      {!isPaid && <Button onClick={handleCheckPaid}>Paid</Button>}
    </div>
  );
}

export default HistoryTableRow;
