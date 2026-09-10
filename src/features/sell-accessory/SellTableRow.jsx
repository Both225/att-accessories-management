import { Button, Checkbox } from "antd";
import { useState } from "react";
import { formatCurrency } from "../../helper/format";

function SellTableRow({ item }) {
  const { id, name, model, category, price, amount } = item;
  const [isSelected, setIsSelected] = useState(false);

  function onCheck() {
    setIsSelected((prev) => !prev);
  }

  return (
    <div className="grid w-full grid-cols-[repeat(2,2rem)_5rem_15rem_repeat(2,1fr)_5rem_1fr] grid-rows-1 items-center gap-12 border-b border-gray-300 pb-4 pl-12 text-[1.4rem]">
      <Checkbox onChange={onCheck}></Checkbox>
      <p className="">{id}</p>
      <img src="./assets/images/1.jpg" />
      <p>{name}</p>
      <p>{model}</p>
      <p>{category}</p>
      <p>{formatCurrency(price)}</p>
      {isSelected ? (
        <div className="flex items-center gap-3">
          <Button size="small" variant="outlined">
            -
          </Button>
          <p>1</p>
          <Button size="small" variant="outlined">
            +
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SellTableRow;
