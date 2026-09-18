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

  if (!products) return <p>No product</p>;

  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Sell history</Title>
        <FilterField />
        <HistoryTableHeader />
        <ProductList products={products} />
        <p>Date : {formatDate(products[0].created_at)}</p>
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
