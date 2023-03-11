import { Box } from "@chakra-ui/react";
import Sidebar from "components/sidebar/Sidebar";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
  getRoutes,
} from "layouts/admin";
import React from "react";
import { Redirect, Switch } from "react-router-dom";
import routes from "./routes";
import Project1 from "assets/img/profile/Project1.png";

const EventPages = () => {
  return (
    <>
      <Sidebar subBar={true} routes={routes} image={Project1} />

      <Box
        position={"relative"}
        minH="100vh"
        w={{ xl: "calc(100vw - 600px)", sm: "100%" }}
        float={"unset"}
        ml={{ xl: "157px", sm: "0px" }}
      >
        <Switch>{getRoutes(routes)}</Switch>
      </Box>
    </>
  );
};

export { EventPages };
