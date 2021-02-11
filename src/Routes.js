import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux"
import AuthPage from "./auth/pages/AuthPage";
import HomePage from "./home/page/HomePage";

const NotFound = () => (<div>404 not found</div>);

export default function Routes() {
  
  const authorized = useSelector(state => state.authorized)

  return (
    <Router>
      <Switch>
        {authorized && <Route path="/homepage" component={HomePage} />}

        <Route path="/404" component={NotFound} />
        <Route
          path="/auth"
          component={() => <AuthPage/>}
        />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}
