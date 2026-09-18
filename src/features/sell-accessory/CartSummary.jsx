import { Button, Checkbox, Input } from "antd";
import { useGetProduct } from "./useGetProduct";
import { useSearchParams } from "react-router-dom";
import ContainerSpinner from "../../components/ContainerSpinner";
import { useSelector } from "react-redux";
import { selectCounter } from "./counterSlice";
import { formatCurrency } from "../../helper/format";
import { useSale } from "./useSale";
import { useState } from "react";

const { TextArea } = Input;

function CartSummary() {
  const { isLoading, product } = useGetProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAdding, addSale } = useSale();
  const [remark, setRemark] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const quantity = useSelector(selectCounter);

  const isActive = searchParams.get("productId") || false;

  if (isLoading || isAdding) return <ContainerSpinner />;

  const { id: productId, name, model, category, unit_price } = product;

  const total_price = unit_price * quantity;

  function handleSellProduct() {
    const sale = { total_price, quantity, remark, isPaid, productId };
    addSale(sale);
    searchParams.delete("productId");
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-surface space-y-5 rounded-lg px-10 py-8 shadow-sm">
      {isActive ? (
        <>
          <p className="text-center text-[2rem] font-semibold">Summary</p>
          <div className="grid grid-cols-[10rem_1fr] space-y-3 text-[1.4rem]">
            <p>Name</p>
            <p>{name}</p>
            <p>Model</p>
            <p>{model}</p>
            <p>Category</p>
            <p>{category}</p>
            <p>Price</p>
            <p>{formatCurrency(unit_price)}</p>
            <p>Amount</p>
            <p>{quantity}</p>
          </div>
          <p>
            Total price:{" "}
            <span className="text-tertiary ml-10 text-[2rem] font-semibold">
              {formatCurrency(total_price)}
            </span>
          </p>
          <TextArea
            rows={3}
            placeholder="Add remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <Checkbox onChange={() => setIsPaid((prev) => !prev)}>
            <span className="text-[1.2rem] font-medium text-gray-500">
              Paid when buy
            </span>
          </Checkbox>
          <Button
            variant="solid"
            style={{
              backgroundColor: "#6366f1",
              textAlign: "center",
              width: "100%",
              marginTop: "2rem",
            }}
            onClick={handleSellProduct}
          >
            Sell item
          </Button>
        </>
      ) : (
        <div className="flex h-160 w-full items-center justify-center text-[1.8rem] font-medium">
          <p>No product select</p>
        </div>
      )}
    </div>
  );
}

export default CartSummary;
