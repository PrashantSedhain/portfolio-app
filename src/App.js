import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhotoGallery from "./components/PhotoGallery";
import Home from "../src/screens/Home";
import About from "../src/screens/About";
import NavbarComponent from "../src/components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route path="/portfolio/boudoir">
            <PhotoGallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
