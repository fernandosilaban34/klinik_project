import React from 'react'
import { Form } from 'react-bootstrap'

function FormUpload(props) {
    return (
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>{props.title}</Form.Label>
            <Form.Control type="file" multiple/>
        </Form.Group>
    )
}

export default FormUpload