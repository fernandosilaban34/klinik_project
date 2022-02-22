import React from 'react'
import { Form, Accordion } from 'react-bootstrap'
import FormDataClaim from '../FormDataClaim'


function Accordions(props) {
    return (
        <Accordion defaultActiveKey="0" flush className='mb-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                   <FormDataClaim/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Accordions