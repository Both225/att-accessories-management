import FilterBar from "../components/FilterBar";
import Title from "../components/Title";
import TableHeader from "../components/TableHeader";
import TableListItems from "../components/TableListItems";
import { useInventory } from "../features/inventory/useInventory";

import Spinner from "../components/Spinner";
import ButtonModal from "../components/ButtonModal";
import InventoryAddForm from "../features/inventory/InventoryAddForm";

import { categoryOptions } from "../helper/selectOptions";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function Inventory() {
  const { isLoading, products, count } = useInventory();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // This will overwrite ?page=2 back to ?page=1 on every reload!
    setSearchParams({ page: 1 });
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface flex flex-col space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Inventory</Title>
        <div className="flex justify-between">
          <FilterBar categoryOptions={categoryOptions} />
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
        <div className="self-end">
          <Pagination total={count} />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
