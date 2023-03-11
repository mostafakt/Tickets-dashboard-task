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
