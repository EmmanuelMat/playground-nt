import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Logout = ({ setAuth }) => {
  useEffect(() => {
    setAuth(false);
  }, []);
  return <Redirect to="auth/login" />;
};

export default function AuthPage({ setAuth }) {
  return (
    <Switch>
      <Route path="/" component={() => <LoginPage setAuth={setAuth} />} />
      <Route path="/logout" component={() => <Logout setAuth={setAuth} />} />
    </Switch>
  );
}
