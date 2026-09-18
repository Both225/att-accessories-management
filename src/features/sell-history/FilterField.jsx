import SelectItems from "../../components/SelectItems";
import Calendar from "./Calendar";
import Dropdown from "./DropDownCalendar";

const filterField = [
  { value: "paid", label: "Paid" },
  { value: "noPaid", label: "No paid" },
];

function FilterField() {
  return (
    <div className="flex justify-between">
      <SelectItems
        options={filterField}
        placeholder={"Filter by status"}
        filterField={"isPaid"}
      />
      <Dropdown
        placeholder={"Filter by date"}
        items={[{ key: 1, label: <Calendar /> }]}
      />
    </div>
  );
}

export default FilterField;
