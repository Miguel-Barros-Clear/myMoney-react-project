import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from "../dashboard/dashboard";
import BiilingCycle from "../biilingCycle/biilingCycle";

export default function Routes(props) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Dashboard} />
      <Route path="/billingCycles" component={BiilingCycle} />
      <Redirect from="*" to="/" />
    </Router>
  );
}
