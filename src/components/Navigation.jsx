import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiOutlinePlusCircle,
  HiOutlineClock,
  HiOutlineBell,
} from "react-icons/hi2";

const items = [
  { value: "/", label: "Dashboard", icon: HiOutlineHome },
  { value: "sell", label: "Sell accessory", icon: HiOutlineShoppingCart },
  { value: "stock", label: "Stock", icon: HiOutlineCube },
  { value: "add-accessory", label: "Add accessory", icon: HiOutlinePlusCircle },
  { value: "sell-history", label: "Sell history", icon: HiOutlineClock },
  { value: "reminder", label: "Reminder", icon: HiOutlineBell },
];

function Navigation() {
  return (
    <ul>
      {items.map((item) => (
        <NavigationItem item={item} key={item.value} />
      ))}
    </ul>
  );
}

export default Navigation;

function NavigationItem({ item }) {
  const { value, label, icon: Icon } = item;
  return (
    <li>
      <Link to={value} className="flex items-center gap-3">
        <Icon size={20} className="text-indigo-600" />
        <span>{label}</span>
      </Link>
    </li>
  );
}
