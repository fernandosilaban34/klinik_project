import React from "react";
import { Redirect } from 'react-router-dom';


import Default from "./layout/Default";

import Dashboard from "./view/Dashboard";
import PageEnd from "./view/PageEnd";


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
      path: "/selesai",
      layout: Default,
      component: PageEnd
    }
  ];