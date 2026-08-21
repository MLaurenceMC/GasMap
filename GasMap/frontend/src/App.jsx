import { useState } from "react";
import "./App.css";

import MapBox from "./components/MapBox";
import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(
    window.innerWidth >= 1024
  )

  return (
    <div data-theme="dracula">
      <NavBar 
      onOpen = {() => setIsSideBarOpen(!(isSideBarOpen))}
      />
      <SideBar
      isOpen = {isSideBarOpen}
      >
        {/* <MapBox /> */}
      </SideBar>
      {/* <ModalForm></ModalForm> */}
    </div>
  );
}

export default App;
