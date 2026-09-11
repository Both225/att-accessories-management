import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className="bg-surface text-text grid h-full w-full grid-rows-[5rem_1fr] md:grid-cols-[20rem_1fr] md:text-[1.4rem] lg:grid-cols-[30rem_1fr]">
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
