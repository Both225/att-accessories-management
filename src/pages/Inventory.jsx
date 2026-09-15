import FilterBar from "../components/FilterBar";
import Title from "../components/Title";
import TableHeader from "../components/TableHeader";
import TableListItems from "../components/TableListItems";
import { useInventory } from "../features/inventory/useInventory";

import Spinner from "../components/Spinner";
import ButtonModal from "../components/ButtonModal";
import InventoryAddForm from "../features/inventory/InventoryAddForm";

function Inventory() {
  const { isLoading, products } = useInventory();

  if (isLoading) return <Spinner />;
  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Inventory</Title>
        <div className="flex justify-between">
          <FilterBar />
          <ButtonModal
            content={({ onCancel, isOpen }) => (
              <InventoryAddForm onCancel={onCancel} isOpen={isOpen} />
            )}
            title={"Add product"}
            okText={"Add"}
          >
            Add product
          </ButtonModal>
        </div>
        <TableHeader />
        <TableListItems products={products} />
      </div>
    </div>
  );
}

export default Inventory;
