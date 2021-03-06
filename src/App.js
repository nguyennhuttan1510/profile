import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import PropTypes from "prop-types";
import { ScrollToTop, AuthButton } from "./components";
import { FirebaseConnect } from "./FirebaseConnect";
const browserHistory = createBrowserHistory();
const App = (props) => {
  return (
    <Router history={browserHistory}>
      <ScrollToTop />
      {/* <AuthButton /> */}
      <Routes />
    </Router>
  );
};

App.propTypes = {};

export default App;
