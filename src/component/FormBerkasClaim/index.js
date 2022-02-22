import { default as React, useEffect, useRef } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GET_DATA_CLAIM } from '../../Action';
import { UPLOAD_FILE } from '../../Action/UploadFile';
import dataJson from '../../data/data.json';
import CardFile from '../CardFile';
import ModalValidasiDelete from '../ModalValidasiDelete';
// import '../assests/style.css';


function FormBerkasClaim() {

  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const dataRedux = useSelector((state) => state.dataClaim)
  const dataReduxNew = dataRedux
  const responseUpload = useSelector((state) => state.uploadFile)
  const ValidasiDeleteFile = useSelector((state) => state.validasiFile)
  const [berkasClaim, setBerkasClaim] = React.useState(dataRedux)
  const [namaDokument, setNamaDokument] = React.useState()
  const [show, setShow] = React.useState(false)
  const [idSequence, setIdSequence] = React.useState()
  const [maxFile, setMaxFile] = React.useState()
  const [reload, setReload] = React.useState(false)


  const [FileList, setFileList] = React.useState(new Map())
  // const [FileName, setFileName] = React.useState(new Map())
  useEffect(() => {
    reloadData()
  }, [reload, dataRedux])

  function handleChangeFile(item) {
    console.log(item, 'item');
    setNamaDokument(item.nama_dokumen)
    setIdSequence(!item.list_file[0].file_source ? 0 : item.list_file.length)
    setMaxFile(item.file_max)
  }

  function reloadData() {
    console.log('reload', reload);
    if (reload == true) {
      setTimeout(
        dispatch(GET_DATA_CLAIM(dataRedux.results.ResponseData.polis[0].nomor_peserta))
      , 4000)

      if (dataReduxNew != dataRedux) {
        setReload(false)
      }
      // setReload(false)
    }
  }

  const handleUploadFile = (e) => {
    // e.preventDefault()

    console.log('idSequence', idSequence);

    if (idSequence >= maxFile) {
      alert('Maaf, hanya dapat upload ' + maxFile + ' file saja')
    } else {
      if (e.target.files[0].size > 5097152) {
        alert("Maaf, File terlalu besar");
      } else {
        dispatch(UPLOAD_FILE(
          berkasClaim.results.ResponseData.polis[0].no_pengajuan_klaim,
          e.target.files[0],
          berkasClaim.results.ResponseData.polis[0].id_klaim_detail,
          namaDokument,
          idSequence,
          e.target.files[0].type
        ))
        setReload(true)
      }
    }
  }


  return (
    <Container fluid className="main-content-container px-4" style={{ fontFamily: 'inherit' }}>
      <Row>
        <Col>
          <Card small className="mb-4">
            <Card.Body className="p-0 pb-3">
              <table className="table mb-0">
                <thead>
                  <tr style={{ backgroundColor: '#F8F8FA', color: 'black' }} >
                    <th scope="col" className="border-0 text-center">
                      ID Docs
                    </th>
                    <th scope="col" className="border-0 text-center">
                      Nama Dokumen
                    </th>
                    <th scope="col" className="border-0 text-center">
                      Berkas Claim
                    </th>
                    <th scope="col" className="border-0 text-center">
                      File Size
                    </th>
                    <th scope="col" className="border-0 text-center">
                      Upload File Manual
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataRedux.results.ResponseData.klaim_file.map((item, i) => {
                    return [
                      <tr key={i} id={item.id_docs} style={{ fontFamily: 'inherit' }}>
                        <td className='text-center'>{item.id_docs}</td>
                        <td className='text-center'>
                          {item.nama_dokumen}
                        </td>
                        <td className='text-center'>
                          {item.list_file.map((items, j) => {
                            return [
                              <div key={j}>
                                {items.file_name ?
                                  <CardFile namFile={items.file_name} url={items.file_pathdir} show={show} id={items.id} /> : <></>
                                }
                              </div>
                            ]
                          }
                          )}
                        </td>
                        <td className='text-center'>{item.size_max} kb</td>
                        <td className='text-center'>
                          <Button onClick={() => { handleChangeFile(item); fileInputRef.current.click() }} style={{ fontSize: 13 }}>
                            Upload
                          </Button>
                          <input onChange={handleUploadFile} multiple={false} ref={fileInputRef} type='file' hidden accept="image/png, image/gif, image/jpeg, application/pdf" />
                        </td>
                      </tr>
                    ]
                  })}
                </tbody>
              </table>
            </Card.Body>
            <Button
              variant="success"
              onClick={() => {
                window.location.href = '/selesai';
              }}
            >Selesai</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FormBerkasClaim