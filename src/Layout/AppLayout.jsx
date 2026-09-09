import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="bg-surface-darker grid h-full w-full grid-cols-[20rem_1fr] grid-rows-[min-content_1fr]">
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
