import FilterBar from "../components/FilterBar";
import Title from "../components/Title";

import CartSummary from "../features/sell-accessory/CartSummary";
import SellTableRow from "../features/sell-accessory/SellTableRow";
import SellTableHeader from "../features/sell-accessory/SellTableHeader";
import { useIsSmallScreen } from "../helper/useIsSmallScreen";
import { useInventory } from "../features/inventory/useInventory";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import SearchField from "../components/SearchField";
import { useState } from "react";

function SellAccessories() {
  const isCompactView = useIsSmallScreen(1270);

  const { isLoading, products, count } = useInventory();

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-surface-darker grid gap-5 p-8 max-[1270px]:grid-cols-1 min-[1270px]:grid-cols-[max-content_1fr]">
      <div className="bg-surface flex flex-col space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Sell accessory</Title>
        <FilterBar />
        <SearchField width={400} />
        <SellTableHeader />
        <ProductList products={products} />
        <div className="self-end">
          <Pagination total={count} />
        </div>
        {isCompactView && <CartSummary />}
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

function ProductList({ products }) {
  const [isSelect, setIsSelect] = useState();

  function handleSelect(productId) {
    setIsSelect(productId);
  }

  return (
    <ul>
      {products.map((product) => (
        <SellTableRow
          item={product}
          selected={isSelect}
          onSelect={handleSelect}
          key={product.id}
        />
      ))}
    </ul>
  );
}
