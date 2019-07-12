import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Blog from "./components/Blog";
import Dashboard from "./components/Dashboard";
import CreatePost from "./components/CreatePost";

import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Blog} />
        <Route exact path="/dashadmin" component={Dashboard} />
        <Route exact path="/dashadmin/create" component={CreatePost} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
