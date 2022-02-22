import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

function FormInputClaim(props) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text style={{ backgroundColor: '#FFF', fontSize:13 }}>{props.title}</InputGroup.Text>
            <FormControl aria-label="First name" style={{ backgroundColor: '#EEF0F3', fontSize:13 }} value={props.value} disabled/>
        </InputGroup>
    )
}

export default FormInputClaim