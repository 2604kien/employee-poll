import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Navbar/>}>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
