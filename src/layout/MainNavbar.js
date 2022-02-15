import React from 'react'
import { Navbar, Container, Form, Button, InputGroup, FormControl } from 'react-bootstrap'


const MainNavbar = () => {
    return (
        <Navbar style={{ backgroundColor: "#EEF0F3" }} className='pt-2 pb-2' >
            {/* <Navbar.Brand href="#home" style={{textAlign:'left'}}></Navbar.Brand> */}
            <Navbar.Text style={{fontWeight:'bold', fontSize: 20, marginLeft:20}}>TABEL PASIEN</Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{
                    marginRight: 50, marginLeft: 5,
                    backgroundColor: '#007BFF',
                    borderRadius: '2%',
                    paddingTop: 10,
                    paddingLeft: 20,
                    paddingBotom: 10,
                    paddingRight: 20,
                    borderRadius: 20,
                    textAlign: 'center',
                    marginTop: 2
                }}>
                    <a href="#login" style=
                        {{
                            color: 'white'
                        }} >Logout</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar