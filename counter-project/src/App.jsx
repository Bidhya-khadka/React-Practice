import { Route, Routes } from 'react-router-dom';
import './App.css'
import Counter from './Components/Counter';
import Home from './Pages/Home';
import NoPageFound from './Pages/NoPageFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
const App =()=>{
  return (
    <>
    <div>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}></Route>
      <Route path="/counter" element={<Counter></Counter>}></Route>
      <Route path="*" element={<NoPageFound></NoPageFound>}></Route>
    </Routes>
    </div>
    </>
  )

}
export default App;
