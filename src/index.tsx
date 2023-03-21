import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
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
        <Routes>
          <Route path={`/auth/*`} element={<AuthLayout />} />
          <Route path={`/admin/*`} element={<AdminLayout />} />
          <Route path={`/addEvent`} element={<AddEvent />} />
          <Route path={`/store`} element={<Store />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
