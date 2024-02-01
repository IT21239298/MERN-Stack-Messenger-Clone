import logo from "./logo.svg";
import "./App.css";
import Form from "./modules/Form";
import Dashbord from "./modules/Dashbord";
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ childen, auth = false }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || false;

  if (!isLoggedIn && auth) {
    return <Navigate to={"/users/sign_in"} />;
  } else if (
    isLoggedIn &&
    ["/users/sign_in", "/users/sign_up"].includes(window.location.pathname)
  ) {
    return <Navigate to={"/"} />;
  }

  return childen;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute auth={true}>
          <Dashbord />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoute>
            <Form isSignInPage={true} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoute>
            <Form isSignInPage={false} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
