import React from "react";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Layouts from "./components/Layouts";

export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/layouts" component={Layouts} />
      <Route
        path="/dashboard"
        render={(props) => <Dashboard display={true} {...props} />}
      />
      <Redirect to="/login" />
    </Switch>
  );
}
