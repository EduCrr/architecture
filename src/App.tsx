import React from "react";
import { RoutesList } from "./routerList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <RoutesList />
      <Footer />
    </>
  );
}

export default App;
