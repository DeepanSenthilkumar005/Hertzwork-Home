import NavBar from "../src/components/NavBar";
import Image from "../src/components/Image";
import WelcomePage from "../src/components/WelcomePage";
import ChoosePage from "./components/ChoosePage";
import ValuePage from "./components/ValuePage";
import WhatWeDo from "./components/WhatWeDo";
import Features from "./components/Features";
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="no-scrollbar">
      {/* <BrowserRouter>
        <Routes>
         <NavBar/>
          <Route path="/" element={} />
        </Routes>
      </BrowserRouter> */}
      <NavBar/>
      <Image/>
      <WelcomePage/>
      <ChoosePage />
      <ValuePage /> 
      <WhatWeDo />
      <Features/>
    </div>
  )
}

export default App;
