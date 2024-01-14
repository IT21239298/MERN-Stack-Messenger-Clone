import logo from "./logo.svg";
import "./App.css";
import Form from "./modules/Form";
import Dashbord from "./modules/Dashbord";
import { Routes, Route, redirect } from "react-router-dom";

const ProtectedRoutes = ({childen}) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null

  if(!isLoggedIn) redirect('/users/sign_in')

  return childen
}

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
