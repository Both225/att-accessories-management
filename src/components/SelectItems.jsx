import { Select } from "antd";

function SelectItems({ placeholder, options, onChange }) {
  return (
    <Select
      placeholder={placeholder}
      allowClear
      onChange={onChange}
      options={options}
      className="sm:w-[10rem] md:w-[14rem] lg:w-[20rem]"
    />
  );
}

export default SelectItems;
