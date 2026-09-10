import Calendar from "./Calendar";
import Dropdown from "./DropDownCalendar";

const filterField = [
  { key: "paid", label: "Paid" },
  { key: "noPaid", label: "No paid" },
];

function FilterField() {
  return (
    <div className="flex justify-between">
      <Dropdown placeholder={"Filter by"} items={filterField} />
      <Dropdown
        placeholder={"Filter by date"}
        items={[{ key: 1, label: <Calendar /> }]}
      />
    </div>
  );
}

export default FilterField;
