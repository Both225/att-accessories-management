import FilterBar from "../components/FilterBar";
import Title from "../components/Title";

import CartSummary from "../features/sell-accessory/CartSummary";
import SellTableRow from "../features/sell-accessory/SellTableRow";
import SellTableHeader from "../features/sell-accessory/SellTableHeader";

const mockData = {
  id: "001",
  name: "Tempered Glass Protector",
  model: "iPhone 15 Pro",
  category: "Screen",
  price: 5.0,
  amount: 120,
};

function SellAccessories() {
  return (
    <div className="bg-surface-darker grid grid-cols-[max-content_1fr] gap-5 p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Sell accessory</Title>
        <FilterBar />
        <SellTableHeader />
        <SellTableRow item={mockData} />
      </div>
      <div className="h-fit">
        <CartSummary />
      </div>
    </div>
  );
}

export default SellAccessories;
