import React from 'react'
import { Navbar, Container, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import logo from '../assests/logo.png'; 


const MainNavbar = () => {
    return (
        <Navbar style={{ backgroundColor: "#E7F4FE" }} className='pt-2 pb-2' >
            {/* <Navbar.Brand href="#home" style={{textAlign:'left'}}></Navbar.Brand> */}
            <Navbar.Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 20, color: '#014B94' }}>Halaman Unggah Berkas Claim</Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end mr-4">
                <img src={logo} alt="Logo" style={{ width: 150, height: 70 }} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar