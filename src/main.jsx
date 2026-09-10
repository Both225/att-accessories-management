import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import RouterError from "./pages/RouterError";
import Dashboard from "./pages/Dashboard";
import SellAccessories from "./pages/SellAccessories";
import Stock from "./pages/Stock";
import AddAccessories from "./pages/AddAccessories";
import Reminder from "./pages/Reminder";
import SellHistory from "./pages/SellHistory";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <RouterError />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/sell",
        element: <SellAccessories />,
      },
      {
        path: "/stock",
        element: <Stock />,
      },
      {
        path: "/add-accessories",
        element: <AddAccessories />,
      },
      {
        path: "/sell-history",
        element: <SellHistory />,
      },
      {
        path: "/reminder",
        element: <Reminder />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
