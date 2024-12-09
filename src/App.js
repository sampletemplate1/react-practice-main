import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Main from "./component/Main";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="contain row container-fluid">
           <Sidebar/>
           <Main/>
      </div>
      <Footer/>
    </div>
  );
};
export default App;
