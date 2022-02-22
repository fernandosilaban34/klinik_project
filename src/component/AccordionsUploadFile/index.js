import React from 'react'
import axios from "axios";
import { Accordion, Form } from 'react-bootstrap'
import FormUpload from '../FormUpload'
import { useDispatch, useSelector } from 'react-redux';

function AccordionsUploadFile(props) {
    const dispatch = useDispatch();
    const dataRedux = useSelector((state) => state.dataClaim)
    const [dataFile, setDataFile] = React.useState(dataRedux.results.ResponseData.klaim_file)
    const [File, setFile] = React.useState()


    const handleChange = (e) => {
        setFile([e.target.files])
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        let res = uploadFile(File);
    }

    const uploadFile = (File) =>{
    //     // const formData = new FormData();
      
    //     // formData.append('image', File)
    //     // axios.post(UPLOAD_ENDPOINT, formData, {
    //     //   headers: {
    //     //     'content-type': 'multipart/form-data'
    //     //   }
    //     // }).then(response => {
    //     //   console.log(response.data)
    //     // });
      }

    return (
        <Accordion defaultActiveKey="0" flush className='mb-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                    {dataFile.map((item, i) => {
                        return [
                            <div key={i}>
                                <form onSubmit={handleSubmit}>
                                    <input type="file" id="file" multiple name="file" onChange={handleChange} />
                                    <button type="submit" className="btn btn-info"> Update File </button>
                                </form>
                            </div>
                        ]
                    }
                    )}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionsUploadFile