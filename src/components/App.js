
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
import Loading from "./Loading";
import { getUserStatus } from "../slices/userSlice";
import { getPostStatus} from "../slices/questionSlice";
function App() {
  const navigate=useNavigate();
  const userStatus=useSelector(getUserStatus);
  const postStatus=useSelector(getPostStatus);
  const [isLoading, setIsLoading]=React.useState(false);
  const isAuthenticated=useSelector((state)=>state.user.isAuthenticated);
  let element=(   <>{isLoading && <Loading />}
                    <Routes>
                      <Route path="/*" element={<Navbar/>}>
                        <Route path="login" element={<Login/>}/>
                      </Route>
                    </Routes>
                    </>
                  )
  React.useEffect(()=>{
    if(isAuthenticated===false){
      navigate("/login");
    }
    if(userStatus === "loading" || postStatus==="loading") setIsLoading(true);
    else setIsLoading(false);
  },[isAuthenticated, navigate, userStatus, postStatus])
  if(isAuthenticated){
    element=(
      <>
      {isLoading && <Loading />}
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
      </>
    );
  }
  return (
    <div style={{display: "flex", placeItems:"center", flexDirection:"column", justifyContent:"center", alignItems:"center", position:"relative"}}>
      {element}
    </div>
  );
}

export default App;
