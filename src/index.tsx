import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { AddEvent } from "views/admin/addevent";
import Store from "views/Store";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />
          <Route path={`/addEvent`} component={AddEvent} />
          <Route path={`/store`} component={Store} />
          <Redirect from="/" to="/admin" />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
