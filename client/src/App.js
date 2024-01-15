import logo from "./logo.svg";
import "./App.css";
import Form from "./modules/Form";
import Dashbord from "./modules/Dashbord";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({childen}) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null

  if(!isLoggedIn) {
    return <Navigate to={'/users/sign_in'}/>
  }

  return childen
}

function App() {
  return (

    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Dashbord/>
        </ProtectedRoute>
      }/>
      <Route path="/users/sign_up" element={<Form isSignInPage={true}/>}/>
      <Route path="/users/sign_in" element={<Form isSignInPage={false}/>}/>

      

    </Routes>
   
  );
}

export default App;
