import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Interiro } from "./pages/Interior";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { RequiredAuth } from "./RequiredAuth";
import { User } from "./pages/User";

export const RoutesList = () => {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/interior/:id" element={<Interiro />} />
        <Route
          path="/cart"
          element={
            <RequiredAuth>
              <Cart />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user"
          element={
            <RequiredAuth>
              <User />
            </RequiredAuth>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

/*
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
  */
