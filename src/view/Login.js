import React from 'react'
import { Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();


  function onLoggin() {
    history.push('/dashboard')
  }
  return (
    <Container style={{ paddingTop: 10, paddingBottom: 10, paddingTop: '10%' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 50 }}>ECONOLAB</h1>
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%', borderRadius: 10 }}>
        <Form style={{ backgroundColor: '#198754', padding: 50, borderRadius: 10, boxShadow: "5px 5px 5px #9E9E9E" }}>
          <Form.Label className='pb-4 text-light' style={{ textAlign: 'center' }}><h4 style={{ fontWeight: 'bold' }}>Login</h4></Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i className="bi bi-person-circle"></i></InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i className="bi bi-lock"></i></InputGroup.Text>
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
          <Button variant="primary" type="submit" style={{ width: '100%', marginTop: 15 }} onClick={onLoggin}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Login
