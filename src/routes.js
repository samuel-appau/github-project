import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var Adminroutes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Add New User",
    icon: "ni ni-single-02 text-yellow",
    component: Icons,
    layout: "/admin",
  },
 
  {
    path: "/maps",
    name: "Track Bin",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notification",
    name: "Notifications",
    icon: "ni ni-bell-55 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/profile",
    component: Profile,
    layout: "/admin",
  },
  
];


export const Authroutes = [

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];



export default Adminroutes;
