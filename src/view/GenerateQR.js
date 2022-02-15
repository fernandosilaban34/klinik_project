import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector, connect } from 'react-redux';
import * as moment from 'moment'
import { INPUT_DATA_PASIEN } from '../Action';

const GenerateQR = (props) => {
  const dispatch = useDispatch();
  const [results, setResult] = React.useState({
    IDPasien: '',
    tglPenerimaan: '',
    waktuPenerimaan: '',
    tglPemeriksaan: '',
    pengirim: '',
    namaPasien: '',
    NIK: '',
    tglLahir: '',
    jenisSpecimen: '',
    pemeriksaan: ''
  });
  const dataRedux = useSelector((state) => state.resposeInsert)

  function handleInputChange(e) {
    let resultsNew = { ...results }
    console.log(e.target.name);
    resultsNew[e.target.name] = e.target.value
    console.log(resultsNew, 'hasil');
    setResult(resultsNew);
  }

  function handleOnClick() {
    let resultNew = results
    dispatch(INPUT_DATA_PASIEN(resultNew));

    
    alert(dataRedux)
  }


  return (
    <Card style={{ marginLeft: 40, marginRight: 40 }}>
      <Card.Header><h3>INPUT PASIEN</h3></Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Form.Text className="text-muted mb-4">
              Data Pasien
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID Pasien</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukan ID Pasien"
                name="IDPasien"
                style={{ backgroundColor: '#EEF0F3' }}
                value={results.IDPasien}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>NIK</Form.Label>
              <Form.Control
                type="number"
                name='NIK'
                placeholder="Masukan NIK"
                value={results.NIK}
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Text className="text-muted mb-4 mt-4">
              Keterangan Data
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tanggal Penerimaan</Form.Label>
              <Form.Control
                name='tglPenerimaan'
                type="date"
                value= {moment(results.tglPenerimaan).format('MM/DD/YYYY')}
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pengirim</Form.Label>
              <Form.Control
                type="text"
                name='pengirim'
                value={results.pengirim}
                placeholder="Masukan Pengirim"
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jenis Specimen</Form.Label>
              <Form.Control
                type="text"
                name='jenisSpecimen'
                value={results.jenisSpecimen}
                placeholder="Masukan Jenis Specimen"
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="email"
                name="namaPasien"
                value={results.namaPasien}
                placeholder="Masukan Nama"
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                name="tglLahir"
                value={results.tglLahir}
                placeholder="Tanggal Lahir Pasien"
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Text className="text-muted mb-4">
              <div>&nbsp;</div>
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Waktu Penerimaan</Form.Label>
              <Form.Control
                type="time"
                name="waktuPenerimaan"
                value={results.waktuPenerimaan}
                placeholder="Masukan Waktu Penerimaan"
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tanggal Pemeriksaan</Form.Label>
              <Form.Control
                type="date"
                name='tglPemeriksaan'
                value={results.tglPemeriksaan}
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pemeriksaan</Form.Label>
              <Form.Control
                type="text"
                name='pemeriksaan'
                placeholder="Masukan Pemeriksaann"
                value={results.pemeriksaan}
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
            </Form.Group>
            <Button style={{marginLeft:'90%'}} variant="primary" type="submit" onClick={handleOnClick}>
              Submit
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default GenerateQR