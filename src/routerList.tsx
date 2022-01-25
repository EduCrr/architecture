import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Interiro } from "./pages/Interior";

export const RoutesList = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/categories", element: <Categories /> },
    { path: "/interior/:id", element: <Interiro /> },
  ]);
};
