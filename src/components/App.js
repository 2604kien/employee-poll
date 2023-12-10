import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
function App() {
  const navigate=useNavigate();
  const isAuthenticated=useSelector((state)=>state.user.isAuthenticated);
  let element=(<Routes>
                    <Route path="login" element={<Login/>}/>
                  </Routes>)
  React.useEffect(()=>{
    if(isAuthenticated===false){
      navigate("/login");
    }
  },[isAuthenticated])
  if(isAuthenticated){
    element=(
      <div className="App">
        <Routes>
          <Route path="/*" element={<Navbar/>}>
          </Route>
        </Routes>
      </div>
    );
  }
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
