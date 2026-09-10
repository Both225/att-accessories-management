import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="bg-surface text-text grid h-full w-full grid-cols-[25rem_1fr] grid-rows-[5rem_1fr]">
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
