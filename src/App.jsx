import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {Button} from "@heroui/react";
import Header from "./Components/Header";

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Header />}>

           </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
