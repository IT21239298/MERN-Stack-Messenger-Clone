import logo from "./logo.svg";
import "./App.css";
import Form from "./modules/Form";
import Dashbord from "./modules/Dashbord";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Dashbord/>}/>
      <Route path="/users/sign_in" element={<Form isSignInPage={true}/>}/>
      <Route path="/users/sign_up" element={<Form isSignInPage={false}/>}/>

      

    </Routes>
   
  );
}

export default App;
