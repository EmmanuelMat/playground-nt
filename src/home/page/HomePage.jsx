import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import TodoPage from "../../todo/list/pages/TodoPage";
export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="col-6 d-flex justify-content-around">
        <NavLink to="homepage/">Todos</NavLink>
        <NavLink to="homepage/">Users</NavLink>
        <NavLink to="homepage/">Post</NavLink>
        <NavLink to="/auth/login">Logout</NavLink>
      </div>
      <Switch>
        <Route path="/" component={TodoPage} />
      </Switch>
    </div>
  );
}
