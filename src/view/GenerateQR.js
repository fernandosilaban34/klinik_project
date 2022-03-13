import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector, connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as moment from 'moment'
import { INPUT_DATA_PASIEN } from '../Action';

const GenerateQR = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [results, setResult] = React.useState({
    IDPasien: '',
    waktuPengambilanSampel: '',
    waktuPemeriksaan: '',
    tglPemeriksaan: '',
    namaPasien: '',
    NIK: '',
    tglLahir: '',
    jenisKelamin: '',
    tipePemeriksaan: '',
    hasilPemeriksaan: '',
    nilaiNormal: '',
    kesimpulanEng: '',
    kesimpulanIna: ''
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

    
    alert(dataRedux.results.massage)
    history.push('/dashboard')
    window.location.reload();
    
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control
                type="text"
                name='jenisKelamin'
                value={results.jenisKelamin}
                placeholder="Masukan Jenis Kelamin"
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Text className="text-muted mb-4 mt-4">
              Keterangan Data
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Waktu Pengambilan Sampel</Form.Label>
              <Form.Control
                name='waktuPengambilanSampel'
                type="time"
                value= {results.waktuPengambilanSampel}
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tipe Pemeriksaan</Form.Label>
              <Form.Control
                type="text"
                name='tipePemeriksaan'
                placeholder="Masukan Tipe Pemeriksaann"
                value={results.tipePemeriksaan}
                style={{backgroundColor: '#EEF0F3' }}
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
              <Form.Label>Nilai Normal</Form.Label>
              <Form.Control
                type="text"
                name='nilaiNormal'
                placeholder="Masukan Nilai Normal"
                value={results.nilaiNormal}
                style={{backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
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
              <Form.Label>Waktu Pemeriksaan</Form.Label>
              <Form.Control
                type="time"
                name="waktuPemeriksaan"
                value={results.waktuPemeriksaan}
                placeholder="Masukan Waktu Pemeriksaan"
                style={{ backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Hasil Pemeriksaan</Form.Label>
              <Form.Control
                type="text"
                name='hasilPemeriksaan'
                placeholder="Masukan Hasil Pemeriksaan"
                value={results.hasilPemeriksaan}
                style={{backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Conclusion in English</Form.Label>
              <Form.Control
                type="text"
                name='kesimpulanEng'
                placeholder="Conclusion"
                value={results.kesimpulanEng}
                style={{backgroundColor: '#EEF0F3' }}
                onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>kesimpulan dalam Indonesia</Form.Label>
              <Form.Control
                type="text"
                name='kesimpulanIna'
                placeholder="Kesimpulan"
                value={results.kesimpulanIna}
                style={{backgroundColor: '#EEF0F3' }}
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