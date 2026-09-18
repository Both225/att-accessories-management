import { Button, Checkbox } from "antd";
import { formatCurrency } from "../../helper/format";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter, decrement, increment, reset } from "./counterSlice";

function SellTableRow({ item, onSelect }) {
  const { id, name, model, category, unit_price } = item;

  const [searchParams, setSearchParams] = useSearchParams();

  const count = useSelector(selectCounter);

  const dispatch = useDispatch();

  const selected = Number(searchParams.get("productId")) || null;

  const isSelect = selected === id;

  function handleChecked() {
    searchParams.set("productId", id);
    setSearchParams(searchParams);
    dispatch(reset());
    onSelect(id);
  }

  return (
    <div className="grid w-full grid-rows-1 items-center gap-12 border-b border-gray-300 pb-4 text-[1.4rem] min-[1050px]:pl-12 md:grid-cols-[repeat(2,2rem)_5rem_13rem_repeat(2,10rem)_5rem_1fr] md:gap-6 md:pl-4 lg:grid-cols-[repeat(2,2rem)_5rem_15rem_repeat(2,1fr)_5rem_1fr] lg:gap-12">
      <Checkbox onChange={handleChecked} checked={isSelect}></Checkbox>
      <p>{id}</p>
      <img src="./assets/images/1.jpg" />
      <p>{name}</p>
      <p>{model}</p>
      <p>{category}</p>
      <p>{formatCurrency(unit_price)}</p>
      {isSelect ? (
        <div className="flex items-center gap-3">
          <Button
            size="small"
            variant="outlined"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
          <p>{count}</p>
          <Button
            size="small"
            variant="outlined"
            onClick={() => dispatch(increment())}
          >
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
