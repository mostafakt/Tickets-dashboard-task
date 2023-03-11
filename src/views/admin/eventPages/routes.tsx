import { Icon } from "@chakra-ui/react";
import { MdBarChart, MdPerson, MdHome, MdLock } from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import { Events } from "views/admin/events";
import { AddEvent } from "views/admin/addevent";
import { OverviewEvent } from "./overviewEvent";
import { AddIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Tickets } from "./tickets";

const routes = [
  {
    name: "Overview",
    layout: "/admin",
    path: "/eventDes/overView",
    icon: <ViewIcon width="17px" height="17px" color="inherit" />,
    component: OverviewEvent,
  },
  {
    name: "event details",
    layout: "/admin",
    path: "/eventDes/addevent",
    icon: <AddIcon width="17px" height="17px" color="inherit" />,
    component: AddEvent,
  },
  {
    name: "Tickets",
    layout: "/admin",
    path: "/eventDes/Tickets",
    icon: <EditIcon width="17px" height="17px" color="inherit" />,
    component: Tickets,
  },
];

export default routes;
