import { useState } from "react";
import "./App.css";

import MapBox from "./components/MapBox";
import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

const coordsJunction = [14.586579, 121.114821];

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(window.innerWidth >= 1024);

  return (
    <div data-theme="dracula" className="h-screen flex flex-col">
      <NavBar onOpen={() => setIsSideBarOpen(!isSideBarOpen)} />
      {/* <MapBox /> */}
      <SideBar isOpen={isSideBarOpen}>
        <MapBox coords={coordsJunction}/>
      </SideBar>
      {/* <ModalForm></ModalForm> */}
    </div>
  );
}

export default App;
