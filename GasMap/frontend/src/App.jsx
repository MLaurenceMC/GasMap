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
  const [filter, setFilter] = useState([null, null, []]);

  return (
    <div data-theme="dracula" className="h-screen flex flex-col">
      <NavBar onOpen={() => setIsSideBarOpen(!isSideBarOpen)} />
      {/* <MapBox /> */}
      <SideBar 
        isOpen={isSideBarOpen} 
        stationsData={sample.x10_stations}
        // filter={filter}
        setFilter={setFilter}>
        <MapBox
          coords={sample.coordsJunction}
          // filter={filter}
          stationsData={sample.x10_stations}
        />
      </SideBar>
      {/* <ModalForm></ModalForm> */}
    </div>
  );
}

export default App;
