import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login/index";
// import weapons from "./Pages/weapons";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/weapons" component={weapons} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
