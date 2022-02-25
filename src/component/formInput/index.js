import React from 'react'
import { Form } from 'react-bootstrap'


function FormInput(props) {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID Pasien</Form.Label>
            <Form.Control
                type="number"
                placeholder={props.placeholder}
                name={props.name}
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
            />
        </Form.Group>
    )
}

export default FormInput