import SelectItems from "./SelectItems";

function FilterBar() {
  return (
    <div className="flex gap-8">
      <SelectItems placeholder={"filter by category"} />
      <SelectItems placeholder={"filter by model"} />
      <SelectItems placeholder={"sortby"} width={150} />
    </div>
  );
}

export default FilterBar;
