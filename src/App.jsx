import NavBar from "../src/components/NavBar";
import Image from "../src/components/Image";
import WelcomePage from "../src/components/WelcomePage";
import ChoosePage from "./components/ChoosePage";
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
      
    </div>
  )
}

export default App;
