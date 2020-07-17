import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
// import Menu from "./components/Menu";
// import Menu from "./components/Menu_Media";
import { Menu } from "./components/Menu_test";

import { DISHES } from "./components/data";

function App() {
  const dishes = DISHES;
  return (
    <div>
      <NavBar />
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
