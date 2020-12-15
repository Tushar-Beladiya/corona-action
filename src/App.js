import React from "react";
import CardContainer from "./components/CardContainer";
import AboutUs from "./components/AboutUs/AboutUs";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   return (
      <div className="App">
         <div style={{ width: "100%", margin: "auto" }}>
            <Router>
               <Route exact path="/" component={CardContainer}></Route>
               <Route exact path="/add" component={Form}></Route>
            </Router>
            <ToastContainer />
         </div>
      </div>
   );
}

export default App;
