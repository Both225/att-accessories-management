import { Input, Button, Space } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const { Search } = Input;

function SearchField({
  onSearch,
  placeholder = "Input search text",
  width = 200,
  value,
}) {
  const [searchValue, setSearchValue] = useState(value);
  const [searchParams, setSearchParams] = useSearchParams();

  function onClear() {
    setSearchValue("");
    searchParams.delete("name");
    setSearchParams(searchParams);
  }

  return (
    <Space direction="horizontal" style={{ width: `${width}px` }}>
      <Search
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={onSearch}
        allowClear
        enterButton
      />

      {/* External Clear Button */}
      <Button onClick={onClear}>Clear Search</Button>
    </Space>
  );
}

export default SearchField;
