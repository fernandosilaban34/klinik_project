import React, {useEffect} from 'react'
import { Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { LOGGIN_IN } from '../Action/Login';
import { useDispatch, useSelector, connect } from 'react-redux';
import axios from 'axios';

const Login = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const dataRedux = useSelector((state) => state.login)
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function onLoggin() {
    dispatch(LOGGIN_IN(username.replace( /</g, '\\u003c'), password.replace( /</g, '\\u003c')))
  }

  useEffect(() => {
  }, [dataRedux])
  

  async function handleLogin() {
    await axios.post(`http://8.215.37.21:5021/globaldoctor/user/login`, {
            username, 
            password
        }).then(response => {
          console.log(response.data.message)
          if (response.data.code == 200) {
            history.push('/dashboard')
          }else{
            alert(response.data.message)
          }
        }).catch(err => {
          alert('Harap masukan username/password')
      })
  } 

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Container style={{ paddingTop: 10, paddingBottom: 10, paddingTop: '10%' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 50 }}>GLOBAL DOCTOR</h1>
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%', borderRadius: 10 }}>
        <div style={{ backgroundColor: '#198754', padding: 50, borderRadius: 10, boxShadow: "5px 5px 5px #9E9E9E" }}>
          <Form.Label className='pb-4 text-light' style={{ textAlign: 'center' }}><h4 style={{ fontWeight: 'bold' }}>Login</h4></Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i className="bi bi-person-circle"></i></InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={username}
                onChange={handleUsername}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i className="bi bi-lock"></i></InputGroup.Text>
              <FormControl
                placeholder="Password"
                type='password'
                aria-label="Password"
                aria-describedby="basic-addon1"
                value={password}
                onChange={handlePassword}
              />
            </InputGroup>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
          <Button variant="primary" type="submit" style={{ width: '100%', marginTop: 15 }} onClick={handleLogin}>
            Submit
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Login
