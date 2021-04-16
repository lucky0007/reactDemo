import AdminManagement from './Components/Admin-Management/admin-management';
import main from './Components/main/main';
import { useState } from 'react';


const dashboardRoutes = [

  {
    path: "/admin-management",
    name: "Dashboard",
    component: AdminManagement,
    icon: "fa fa-tachometer",
    layout: "/home",
  },

  {
    path: "/main",
    name: "User Profile",
    component: main,
    icon: "fa fa-user",
    layout: "/home",
  },

];

export default dashboardRoutes;
