import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <Header/>
      <div className="route-container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
