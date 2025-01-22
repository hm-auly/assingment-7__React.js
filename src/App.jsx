import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header";
import Hiro from "./Components/Hiro";
import Container from "./Components/Container";

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Container />} >
           
           </Route>
           

          
        </Routes>
    </BrowserRouter>
  )
}

export default App
