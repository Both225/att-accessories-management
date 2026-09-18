import { Select } from "antd";
import { useSearchParams } from "react-router-dom";

function SelectItems({ placeholder, options, filterField, onClear }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentValue = searchParams.get(filterField) || null;

  const handleChange = (value) => {
    if (value) {
      searchParams.set(filterField, value);
    } else {
      searchParams.delete(filterField);
    }

    setSearchParams(searchParams);
  };

  return (
    <Select
      placeholder={placeholder}
      allowClear
      value={currentValue}
      onChange={handleChange}
      options={options}
      className="sm:w-40 md:w-56 lg:w-[20rem]"
    />
  );
}

export default SelectItems;
