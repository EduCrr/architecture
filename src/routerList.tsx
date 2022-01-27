import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Interiro } from "./pages/Interior";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { RequiredAuth } from "./RequiredAuth";

export const RoutesList = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/categories", element: <Categories /> },
    { path: "/interior/:id", element: <Interiro /> },
    {
      path: "/cart",
      element: (
        <RequiredAuth>
          <Cart />
        </RequiredAuth>
      ),
    },
    { path: "/login", element: <Login /> },
  ]);
};
