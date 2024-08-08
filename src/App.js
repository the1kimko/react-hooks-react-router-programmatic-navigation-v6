import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () =>{
    setIsLoggedIn(false);
  };

  useEffect(() =>{
    if (isLoggedIn) {
        // navigates to Home route if user is logged in
      navigate("/");
    } else {
        // navigates to Login route if user is logged out
      navigate("/login");
    };
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      <NavBar logout={isLoggedIn ? <NavBar logout={logout}  /> : <Navigate to="/login" />} />
      <Outlet context={login}/>
    </div>
  );
}

export default App;
