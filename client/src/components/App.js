import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Bookcase from "./Bookcase";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route>
            <Bookcase />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
