import FilterBar from "../components/FilterBar";
import Title from "../components/Title";

import CartSummary from "../features/sell-accessory/CartSummary";
import SellTableRow from "../features/sell-accessory/SellTableRow";
import SellTableHeader from "../features/sell-accessory/SellTableHeader";
import { useIsSmallScreen } from "../helper/useIsSmallScreen";
import { useState } from "react";

const mockData = {
  id: "001",
  name: "Tempered Glass Protector",
  model: "iPhone 15 Pro",
  category: "Screen",
  price: 5.0,
  amount: 120,
};

function SellAccessories() {
  const isCompactView = useIsSmallScreen(1270);
  const [isSelected, setIsSelected] = useState(false);

  function handleSelectItem() {
    setIsSelected((prev) => !prev);
  }

  return (
    <div className="bg-surface-darker grid gap-5 p-8 max-[1270px]:grid-cols-1 min-[1270px]:grid-cols-[max-content_1fr]">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Sell accessory</Title>
        <FilterBar />
        <SellTableHeader />
        <SellTableRow item={mockData} handleSelectItem={handleSelectItem} />
        {isCompactView && isSelected && <CartSummary />}
      </div>
      {!isCompactView && (
        <div className="h-fit">
          <CartSummary />
        </div>
      )}
    </div>
  );
}

export default SellAccessories;
