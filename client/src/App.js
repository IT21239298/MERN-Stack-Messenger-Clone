import logo from "./logo.svg";
import "./App.css";
import Form from "./modules/Form";
import Dashbord from "./modules/Dashbord";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="bg-[#edf3fc] h-screen flex justify-center items-center">
      <Dashbord />
      {/* <Form/> */}

      
    </div>
  );
}

export default App;
