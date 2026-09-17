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
import SearchField from "../components/SearchField";
import { useSearchParams } from "react-router-dom";

function Inventory() {
  const { isLoading, products, count } = useInventory();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(value) {
    searchParams.set("name", value);
    setSearchParams(searchParams);
  }

  function handleClearSearch() {
    searchParams.delete("name");
  }

  console.log(products);

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
        <SearchField
          width={400}
          placeholder="Search product by name"
          onSearch={handleSearch}
          value={searchParams.get("name")}
          onClear={handleClearSearch}
        />
        <TableHeader />
        {products.length === 0 ? (
          <div className="flex h-180 items-center justify-center text-[2.4rem] font-semibold text-gray-500">
            No product to show
          </div>
        ) : (
          <>
            <TableListItems products={products} />
            <div className="self-end">
              <Pagination total={count} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Inventory;
