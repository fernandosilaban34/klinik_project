import React from "react";
import { Redirect } from 'react-router-dom';
import Default from "./layout/Default";
import Dashboard from "./view/Dashboard";
import GenerateQR from "./view/GenerateQR";
import Sidebar from "./layout/Sidebar.js";

import PDF from './data/pdf';
import Login from "./view/Login";

export default [
    {
      path: "/",
      exact: true,
      layout: Default,
      component: () => <Redirect to= '/login'/>
    },
    {
      path: "/dashboard",
      layout: Default,
      component: Dashboard
    },
    {
      path: "/input-data",
      layout: Default,
      component: GenerateQR
    }
  ];