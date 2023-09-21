import React from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
// import Test from "./components/Test";
import 'react-toastify/dist/ReactToastify.css';
function App() {
 
  return (
    <div>
      <Header />
      
      <Products />
      {/* <Test/> */}
      
    </div>
  );
}

export default App;
