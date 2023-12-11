
import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Question from "./Question";
import NewQuestions from "./NewQuestions";
import Add from "./Add";
import Error from "./Error";
import Leaderboard from "./Leaderboard";
function App() {
  const navigate=useNavigate();
  const isAuthenticated=useSelector((state)=>state.user.isAuthenticated);
  let element=(<Routes>
                    <Route path="/*" element={<Navbar/>}>
                      <Route path="login" element={<Login/>}/>
                    </Route>
                  </Routes>)
  React.useEffect(()=>{
    if(isAuthenticated===false){
      navigate("/login");
    }
  },[isAuthenticated, navigate])
  if(isAuthenticated){
    element=(
      <div className="App">
        <Routes>
          <Route path="/*" element={<Navbar/>}>
            <Route path="" element={<NewQuestions/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="question/:question_id" element={<Question/>}/>
            <Route path="add" element={<Add/>}/>
            <Route path="leaderboard" element={<Leaderboard />}/>
            <Route path="*" element={<Error/>}/>
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
