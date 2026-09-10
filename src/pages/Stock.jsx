import FilterBar from "../components/FilterBar";
import mockAccessories from "../data/mockAccessories";
import Title from "../components/Title";
import TableHeader from "../components/TableHeader";
import TableListItems from "../components/TableListItems";

function Stock() {
  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Inventory</Title>
        <FilterBar />
        <TableHeader />
        <TableListItems items={mockAccessories} />
      </div>
    </div>
  );
}

export default Stock;
