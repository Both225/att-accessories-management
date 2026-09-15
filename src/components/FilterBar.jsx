import SelectItems from "./SelectItems";

function FilterBar() {
  return (
    <div className="flex md:gap-5 lg:gap-8">
      <SelectItems placeholder={"Filter by category"} />
      <SelectItems placeholder={"Filter by model"} />
      <SelectItems placeholder={"Sortby"} width={150} />
    </div>
  );
}

export default FilterBar;
