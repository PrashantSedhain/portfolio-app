import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhotoGallery from "./components/PhotoGallery";
import Home from "../src/screens/Home";
import About from "../src/screens/About";

import NavbarComponent from "../src/components/Navbar";
import Contact from "./screens/Contact";
function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <NavbarComponent />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/portfolio/boudoir">
            <PhotoGallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
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
