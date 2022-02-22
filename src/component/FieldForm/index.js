import React from 'react'
import { Form } from 'react-bootstrap'

function FieldForm(props) {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{fontSize:13}}>{props.title}</Form.Label>
            <Form.Control
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                style={{ backgroundColor: '#EEF0F3', fontSize:13}}
                value={props.value}
                disabled
                // onChange={handleInputChange}
            />
        </Form.Group>
    )
}

export default FieldForm