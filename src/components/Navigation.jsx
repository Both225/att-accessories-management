import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiOutlineCog8Tooth,
  HiOutlineClock,
  HiOutlineBell,
} from "react-icons/hi2";
import { useState } from "react";

const items = [
  { value: "/", label: "Dashboard", icon: HiOutlineHome },
  { value: "sell", label: "Sell accessory", icon: HiOutlineShoppingCart },
  { value: "inventory", label: "Inventory", icon: HiOutlineCube },
  { value: "sell-history", label: "Sell history", icon: HiOutlineClock },
  { value: "reminder", label: "Reminder", icon: HiOutlineBell },
  {
    value: "setting",
    label: "Setting",
    icon: HiOutlineCog8Tooth,
  },
];

function Navigation() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  function onSelect(selectedItem) {
    setSelectedItem(selectedItem);
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <NavigationItem
          item={item}
          key={item.value}
          onSelect={onSelect}
          selectedItem={selectedItem}
        />
      ))}
    </ul>
  );
}

export default Navigation;

function NavigationItem({ item, onSelect, selectedItem }) {
  const { value, label, icon: Icon } = item;

  const isSelected = selectedItem === label;

  return (
    <li
      className={`${isSelected ? "bg-secondary text-primary" : "bg-transparent font-normal"} hover:bg-secondary/40 rounded-lg py-4 pl-5 font-medium`}
    >
      <Link
        onClick={() => onSelect(label)}
        to={value}
        className="flex items-center gap-3"
      >
        <Icon size={20} className={`${isSelected ? "text-indigo-600" : ""}`} />
        <span>{label}</span>
      </Link>
    </li>
  );
}
