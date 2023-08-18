import React, { useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <div>
      <Header />
      
      <Products />
      
    </div>
  );
}

export default App;
