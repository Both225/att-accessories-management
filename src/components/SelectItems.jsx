import { Select } from "antd";
import { useSearchParams } from "react-router-dom";

function SelectItems({ placeholder, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <Select
      placeholder={placeholder}
      allowClear
      onChange={handleClick}
      options={options}
      className="sm:w-[10rem] md:w-[14rem] lg:w-[20rem]"
    />
  );
}

export default SelectItems;
