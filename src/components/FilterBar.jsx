import { modelOptions, sortByOptions } from "../helper/selectOptions";
import SelectItems from "./SelectItems";

function FilterBar({ categoryOptions }) {
  return (
    <div className="flex md:gap-5 lg:gap-8">
      <SelectItems
        options={categoryOptions}
        placeholder={"Filter by category"}
        filterField={"category"}
      />
      <SelectItems
        options={modelOptions}
        placeholder={"Filter by model"}
        filterField={"model"}
      />
      <SelectItems
        options={sortByOptions}
        placeholder={"Sortby"}
        width={150}
        filterField={"sortBy"}
      />
    </div>
  );
}

export default FilterBar;
