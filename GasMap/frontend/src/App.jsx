import { useState } from "react";
import "./App.css";

import MapBox from "./components/MapBox";
import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {

  return (
    <>
      <div data-theme="dracula">
        <NavBar></NavBar>
        {/* <MapBox></MapBox> */}
        <SideBar></SideBar>
        {/* <ModalForm></ModalForm> */}
      </div>
    </>
  );
}

export default App;
