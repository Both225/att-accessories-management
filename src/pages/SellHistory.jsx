import Title from "../components/Title";
import FilterField from "../features/sell-history/FilterField";
import HistoryTableRow from "../features/sell-history/HistoryTableRow";
import HistoryTableHeader from "../features/sell-history/TableHeader";
import { useGetSales } from "../features/sell-history/useGetSales";
import Spinner from "../components/Spinner";
import { formatDate } from "../helper/format";

function SellHistory() {
  const { isLoading, products } = useGetSales();

  if (isLoading) return <Spinner />;

  const hasProducts = products.length !== 0;

  console.log(products.length, hasProducts);

  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        {hasProducts ? (
          <>
            <Title>Sell history</Title>
            <FilterField />
            <HistoryTableHeader />
            <ProductList products={products} />
            <p>Date : {formatDate(products[0]?.created_at)}</p>
          </>
        ) : (
          <>
            <Title>Sell history</Title>
            <FilterField />
            <div className="flex h-200 items-center justify-center text-[2.4rem] font-semibold">
              <p>No sales history to show</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SellHistory;

function ProductList({ products }) {
  return (
    <ul>
      {products?.map((product) => (
        <HistoryTableRow product={product} key={product.key} />
      ))}
    </ul>
  );
}
