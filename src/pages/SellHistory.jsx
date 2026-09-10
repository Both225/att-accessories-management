import Title from "../components/Title";
import FilterField from "../features/sell-history/FilterField";
import HistoryTableRow from "../features/sell-history/HistoryTableRow";
import HistoryTableHeader from "../features/sell-history/TableHeader";

const items = {
  id: "001",
  name: "Tempered Glass Protector",
  model: "iPhone 15 Pro",
  category: "Screen",
  price: 5.0,
  amount: 1,
  status: "paid",
  remark: "A209",
  time: "15:48",
};

function SellHistory() {
  return (
    <div className="bg-surface-darker p-8">
      <div className="bg-surface space-y-6 rounded-lg px-10 py-8 shadow-sm">
        <Title>Sell history</Title>
        <FilterField />
        <HistoryTableHeader />
        <HistoryTableRow item={items} />
        <p>Total sale on 10.Sep.2026</p>
      </div>
    </div>
  );
}

export default SellHistory;
