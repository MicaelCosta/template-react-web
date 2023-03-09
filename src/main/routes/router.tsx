import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MakeDashboard } from "@/main/factories/pages";

import { GlobalStyle } from "@/presentation/styles/global";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MakeDashboard />,
  },
]);

export function Router() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  );
}
