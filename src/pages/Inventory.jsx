import FilterBar from "../components/FilterBar";
import Title from "../components/Title";
import TableHeader from "../components/TableHeader";
import TableListItems from "../components/TableListItems";
import { useInventory } from "../features/inventory/useInventory";

import Spinner from "../components/Spinner";

function Inventory() {
  const { isLoading, products } = useInventory();

  if (isLoading) return <Spinner />;
  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Inventory</Title>
        <FilterBar />
        <TableHeader />
        <TableListItems products={products} />
      </div>
    </div>
  );
}

export default Inventory;
