import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import LeaguePicker from "./LeaguePicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LeaguePicker} />
      <Route path="/league/:leagueId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
