import { Dropdown as DropdownApi, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Calendar from "./Calendar";

const items = [
  {
    key: 1,
    label: <Calendar />,
  },
];

function Dropdown({ items, placeholder }) {
  return (
    <DropdownApi trigger={"click"} menu={{ items }}>
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        className="font-medium"
      >
        <Space>
          {placeholder}
          <DownOutlined style={{ fontSize: "12px" }} />
        </Space>
      </a>
    </DropdownApi>
  );
}

export default Dropdown;
