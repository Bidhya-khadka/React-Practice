import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./Components/Counter";
import Home from "./Pages/Home";
import NoPageFound from "./Pages/NoPageFound";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { ToastContainer, toast } from "react-toastify";
import SecuredRoute from "./routes/SecuredRoute";
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          {/* secured route concept yo hunu paryo yo garnako ko lagi  /paxi  /home /counter*/}
          <Route path="/" element={<SecuredRoute></SecuredRoute>}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/counter" element={<Counter></Counter>}></Route>
          </Route>

          <Route path="*" element={<NoPageFound></NoPageFound>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};
export default App;
