import React from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import "react-toastify/dist/ReactToastify.css";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
