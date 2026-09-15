import { formatCurrency } from "../helper/format";
import InventoryEditForm from "../features/inventory/InventoryEditForm";
import ActionDropdownModal from "./ActionDropDownModal";
import { useDeleteProduct } from "../features/inventory/useDeleteProduct";
import Spinner from "./Spinner";

function TableRow({ item }) {
  const {
    id: productId,
    name,
    model,
    category,
    unit_price,
    stock_quantity,
  } = item;

  const { isDeleting, deleteProduct } = useDeleteProduct();

  if (isDeleting) return <Spinner />;

  return (
    <div className="grid w-full grid-cols-[repeat(2,5rem)_repeat(2,1fr)_10rem_10rem_10rem_5rem] grid-rows-1 gap-8 border-b border-gray-300 py-4 pl-12 text-[1.4rem] md:grid-cols-[repeat(2,5rem)_repeat(2,1fr)_repeat(3,4rem)_5rem] md:pl-6 md:text-[1.4rem] lg:grid-cols-[repeat(2,5rem)_repeat(2,1fr)_repeat(3,10rem)_5rem]">
      <p className="text-center">{productId}</p>
      <img src="./assets/images/1.jpg" />
      <p>{name}</p>
      <p>{model}</p>
      <p>{category}</p>
      <p>{formatCurrency(unit_price)}</p>
      <p className="ml-7">{stock_quantity}</p>
      <ActionDropdownModal
        editForm={({ onClose, isOpen }) => (
          <InventoryEditForm product={item} onClose={onClose} isOpen={isOpen} />
        )}
        handleDelete={() => deleteProduct({ productId })}
      />
    </div>
  );
}

export default TableRow;
