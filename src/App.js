import React from "react";
import "./App.css";
// import NavBar from "./components/Navbar";
// import Menu from "./components/Menu";
// import Menu from "./components/Menu_Media";
// import { Menu } from "./components/Menu_test";
// import MainContainer from "./components/MainContainer";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

//For deploy with git hub  https://www.youtube.com/watch?v=mdO18zv3oGQ

// import { DISHES } from "./components/data";

function App() {
  // const dishes = DISHES;
  return (
    <div>
      {/* <Menu dishes={dishes} /> */}
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
