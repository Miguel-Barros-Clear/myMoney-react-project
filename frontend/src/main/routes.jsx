import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard2 from "../dashboard2/dashboard2";
import BiilingCycle from "../biilingCycle/biilingCycle";

export default function Routes(props) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Dashboard2} />
      <Route path="/billingCycles" component={BiilingCycle} />
      <Redirect from="*" to="/" />
    </Router>
  );
}
