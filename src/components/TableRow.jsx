import { formatCurrency } from "../helper/format";
import ActionDropDown from "./ActionDropDown";

function TableRow({ item }) {
  const { id, name, model, category, price, amount } = item;

  return (
    <div className="grid w-full grid-cols-[repeat(2,5rem)_repeat(2,1fr)_10rem_10rem_10rem_5rem] grid-rows-1 gap-8 border-b border-gray-300 py-4 pl-12 text-[1.4rem] md:grid-cols-[repeat(2,5rem)_repeat(2,1fr)_repeat(3,4rem)_5rem] md:pl-6 md:text-[1.4rem] lg:grid-cols-[repeat(2,5rem)_repeat(2,1fr)_repeat(3,10rem)_5rem]">
      <p className="text-center">{id}</p>
      <img src="./assets/images/1.jpg" />
      <p>{name}</p>
      <p>{model}</p>
      <p>{category}</p>
      <p>{formatCurrency(price)}</p>
      <p className="ml-7">{amount}</p>
      <ActionDropDown />
    </div>
  );
}

export default TableRow;
