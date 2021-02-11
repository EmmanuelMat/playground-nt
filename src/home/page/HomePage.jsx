import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import TodoPage from "../../todo/list/pages/TodoPage";
import UserListPage from "../../users/pages/UserListPage";
export default function HomePage() {

  return (
    <Router>
      <div className="container-fluid">
        <div className="col-6 d-flex justify-content-around">
          <Link to="/">Todos</Link>
          <Link to="/users">Users</Link>
          <Link to="/">Post</Link>
          <Link to="/auth/login">Logout</Link>
        </div>
        <div>HOME PAGE</div>
        <Switch>
          <Route exact path="/">
            <UserListPage />
          </Route>
          <Route path="/users">
            <TodoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

