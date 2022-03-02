import React from "react";
import { Redirect } from 'react-router-dom';


import Default from "./layout/Default";

import Dashboard from "./view/Dashboard";
import GenerateQR from "./view/GenerateQR";
import ManageData from "./view/ManageData";
import Sidebar from "./layout/Sidebar.js";

import PDF from './data/pdf';


export default [
    {
      path: "/",
      exact: true,
      layout: Default,
      component: () => <Redirect to= '/dashboard'/>
    },
    {
      path: "/dashboard",
      layout: Default,
      component: Dashboard
    },
    {
      path: "/data-pasien",
      layout: Default,
      component: ManageData
    },
    {
      path: "/input-data",
      layout: Default,
      component: GenerateQR
    }
  ];