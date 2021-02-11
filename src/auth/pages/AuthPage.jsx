import React from "react";
import { Route, Switch } from "react-router-dom";
import { LogoutComponent } from "../components/LogoutComponent";
import LoginPage from "./LoginPage";



export default function AuthPage() {
  return (
    <Switch>
      <Route path="/" component={LoginPage} />
      <Route path="/logout" component={() => <LogoutComponent  />} />
    </Switch>
  );
}
