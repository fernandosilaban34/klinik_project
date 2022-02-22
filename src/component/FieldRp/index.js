import React from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'

function FieldRp(props) {
    return (
        <Form.Group className="mb-3 ml-1" controlId="formBasicEmail">
            <Form.Label style={{fontSize:13}}>{props.judul}</Form.Label>
            <InputGroup>
                <InputGroup.Text style={{ backgroundColor: '#FF8F15', color: '#fff', fontSize:13 }}>{props.title}</InputGroup.Text>
                <FormControl aria-label="First name" style={{ backgroundColor: '#EEF0F3', fontSize:13 }} disabled value={props.value}/>
            </InputGroup>
        </Form.Group>
    )
}

export default FieldRp