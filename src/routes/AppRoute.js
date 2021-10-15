import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginPage } from "../login/LoginPage";
import { DashboardRoute } from "./DashboardRoute";

export default function AppRoute() {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path='/login' component={ LoginPage } />
                <Route path='/' component={ DashboardRoute } />
            </Switch>
        </div>
    </Router>
  );
}