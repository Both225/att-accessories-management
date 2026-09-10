import Navigation from "./Navigation";

function Sidebar() {
  return (
    <div className="bg-surface col-start-1 col-end-2 row-start-2 row-end-3 h-full w-full px-6 py-6 shadow-lg">
      <Navigation />
    </div>
  );
}

export default Sidebar;
