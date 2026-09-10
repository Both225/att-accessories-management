import { Select } from "antd";

function SelectItems({ placeholder, width = 200, options, onChange }) {
  return (
    <Select
      placeholder={placeholder}
      allowClear
      style={{ width: width }}
      onChange={onChange}
      options={options}
    />
  );
}

export default SelectItems;
