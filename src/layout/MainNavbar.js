import React from 'react'
import { Navbar, Container, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const MainNavbar = () => {
    let history = useHistory()

    function Logout() {
        history.push('/login')
        localStorage.removeItem('user');
    }


    return (
        <Navbar style={{ backgroundColor: "#EEF0F3" }} className='pt-2 pb-2' >
            {/* <Navbar.Brand href="#home" style={{textAlign:'left'}}></Navbar.Brand> */}
            <Navbar.Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 20 }}>TABEL PASIEN</Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button style={{borderRadius:20, marginLeft:5, marginRight:5, fontWeight:'bold'}} onClick={Logout}>Logout</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar