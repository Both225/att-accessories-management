import { Button, Checkbox, Input } from "antd";

const { TextArea } = Input;

function CartSummary() {
  return (
    <div className="bg-surface space-y-5 rounded-lg px-10 py-8 shadow-sm">
      <p className="text-center text-[2rem] font-semibold">Summary</p>
      <div className="grid grid-cols-[10rem_1fr] space-y-3 text-[1.4rem]">
        <p>Name</p>
        <p>Tempered Glass Protector</p>
        <p>Model</p>
        <p>iPhone 15 Pro</p>
        <p>Category</p>
        <p>Screen</p>
        <p>Model</p>
        <p>iPhone 15 Pro</p>
        <p>Price</p>
        <p>$5.00</p>
        <p>Amount</p>
        <p>1</p>
      </div>
      <p>
        Total price:{" "}
        <span className="text-tertiary text-[1.8rem] font-semibold">$5.00</span>
      </p>
      <TextArea rows={2} placeholder="Add remark" />
      <Checkbox onChange={() => {}}>
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
      >
        Sell item
      </Button>
    </div>
  );
}

export default CartSummary;
