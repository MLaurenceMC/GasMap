import { useState } from "react";
import "./App.css";

import MapBox from "./components/MapBox";
import ModalHandler from "./components/ModalHandler";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import * as sample from "./assets/sampleConstants";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(window.innerWidth >= 1024);
  const [modalMode, setModalMode] = useState("station");

  return (
    <div data-theme="dracula" className="h-screen flex flex-col">
      <NavBar onOpen={() => setIsSideBarOpen(!isSideBarOpen)} />
      {/* <MapBox /> */}
      <SideBar isOpen={isSideBarOpen}>
        <MapBox
          coords={sample.coordsJunction}
          stationsData={sample.x10_stations}
        />
      </SideBar>
      {/* <ModalForm></ModalForm> */}
    </div>
  );
}

export default App;
