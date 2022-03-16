import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#00705A">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontSize:15}}>
            GLOBAL DOCTOR
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" style={{borderRadius:5}}>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/input-data" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" style={{borderRadius:5}}>Input Data</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/data-pasien" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table" style={{borderRadius:5}}>Data Pasien</CDBSidebarMenuItem>
            </NavLink> */}
            {/* <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" style={{borderRadius:5}}>Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" style={{borderRadius:5}}>Analytics</CDBSidebarMenuItem>
            </NavLink> */}

            {/* <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};


export default Sidebar;
