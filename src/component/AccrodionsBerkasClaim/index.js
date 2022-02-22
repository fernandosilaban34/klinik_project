import React, {useEffect} from 'react'
import { Form, Accordion } from 'react-bootstrap'
import FormBerkasClaim from '../FormBerkasClaim'
import { useDispatch, useSelector } from 'react-redux';

function AccordionsBerkasClaim(props) {
    const dispatch = useDispatch();
    
    useEffect(() => {
      
    }, [dispatch])
    
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                    <FormBerkasClaim/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionsBerkasClaim