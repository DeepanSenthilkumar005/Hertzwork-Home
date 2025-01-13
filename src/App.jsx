import NavBar from "../src/components/NavBar";
import Image from "../src/components/Image";
import WelcomePage from "../src/components/WelcomePage";
import ChoosePage from "./components/ChoosePage";
import ValuePage from "./components/ValuePage";
import WhatWeDo from "./components/WhatWeDo";
import Features from "./components/Features";
import Mission from "./components/Mission";
import FaqPage from "./components/FaqPage";

// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="w-screen overflow-x-hidden overflow-y-hidden">
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
      <Mission/>
      <FaqPage />
      
    </div>
  )
}

export default App;
