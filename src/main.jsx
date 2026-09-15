import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import RouterError from "./pages/RouterError";
import Dashboard from "./pages/Dashboard";
import SellAccessories from "./pages/SellAccessories";
import Inventory from "./pages/Inventory";
import Setting from "./pages/Setting";
import Reminder from "./pages/Reminder";
import SellHistory from "./pages/SellHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

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
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/sell-history",
        element: <SellHistory />,
      },
      {
        path: "/reminder",
        element: <Reminder />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
