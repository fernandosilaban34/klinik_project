import React, { useState, useEffect } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import * as moment from 'moment';
import { useDispatch, useSelector, connect } from 'react-redux';
import { UPDATE_DATA_PASIEN } from '../../Action';

function ModalUpdate(props) {
    const dispatch = useDispatch();
    const [results, setResult] = React.useState({
        IDPasien: '',
        namaPasien: '',
        tglLahir: '',
        jenisKelamin: '',
        NIK: '',
        hasilPemeriksaan: '',
        nilaiNormal: '',
        kesimpulanEng: '',
        kesimpulanIna: ''
    });
    const dataRedux = useSelector((state) => state.responseUpdate)
    useEffect(() => {
        handleGetModal()

        if (dataRedux) {
            AlertRedux()
        }

    }, [dataRedux]);


    function handleGetModal() {
        let resultProps = props.data
        setResult(resultProps)
        console.log('disini', results);
    }

    function AlertRedux() {
        if (dataRedux.results.code == 200) {
            alert(dataRedux.results.message)
            window.location.reload();
        }
    }
    function handleInputChange(e) {
        let resultsNew = { ...results }
        console.log(e.target.name);
        resultsNew[e.target.name] = e.target.value
        console.log(resultsNew, 'hasil');
        setResult(resultsNew);
    }


    function handleOnClick() {
        let resultNew = results
        console.log(dataRedux.results, 'data niche');
        dispatch(UPDATE_DATA_PASIEN(resultNew));
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <Row style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}>
                    <Col>
                        <Form.Text className="text-muted mb-4">
                            Data Pasien
                        </Form.Text>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ID Pasien</Form.Label>
                            <Form.Control
                                type="number"
                                name="IDPasien"
                                style={{ backgroundColor: '#EEF0F3' }}
                                value={results.IDPasien}
                                disabled
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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>jenisKelamin</Form.Label>
                            <Form.Select aria-label="Default select example" name='jenisKelamin' onChange={handleInputChange}>
                                <option disabled value={results.jenisKelamin}>{results.jenisKelamin}</option>
                                <option disabled>--------</option>
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </Form.Select>
                            {/* <Form.Control
                                type="text"
                                name='jenisKelamin'
                                value={results.jenisKelamin}
                                placeholder="Masukan Jenis Kelamin"
                                style={{ backgroundColor: '#EEF0F3' }}
                                onChange={handleInputChange}
                            />  */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hasil Pemeriksaan</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleInputChange} name='hasilPemeriksaan'>
                                <option disabled value={results.hasilPemeriksaan}>{results.hasilPemeriksaan}</option>
                                <option disabled>--------</option>
                                <option value="NEGATIF">NEGATIF</option>
                                <option value="POSITIF">POSITIF</option>
                            </Form.Select>
                            {/* <Form.Control
                                type="text"
                                name='hasilPemeriksaan'
                                value={results.hasilPemeriksaan}
                                placeholder="Masukan Hasil Pemeriksaan"
                                style={{ backgroundColor: '#EEF0F3' }}
                                onChange={handleInputChange}
                            /> */}
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
                                value={moment(results.tglLahir).format(("YYYY-MM-DD"))}
                                placeholder="Tanggal Lahir Pasien"
                                style={{ backgroundColor: '#EEF0F3' }}
                                onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Text className="text-muted mb-4">
                            <div>&nbsp;</div>
                        </Form.Text>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nilai Normal</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleInputChange} name='nilaiNormal'>
                                <option disabled value={results.nilaiNormal}>{results.nilaiNormal}</option>
                                <option disabled>--------</option>
                                <option value="NEGATIF">NEGATIF</option>
                                <option value="POSITIF">POSITIF</option>
                            </Form.Select>
                            {/* <Form.Control
                                type="text"
                                name="nilaiNormal"
                                value={results.nilaiNormal}
                                placeholder="Masukan Nilai Normal"
                                style={{ backgroundColor: '#EEF0F3' }}
                                onChange={handleInputChange} /> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Kesimpulan Eng</Form.Label>
                            {/* <Form.Control
                                type="text"
                                name='kesimpulanEng'
                                value={results.kesimpulanEng}
                                style={{ backgroundColor: '#EEF0F3' }}
                                onChange={handleInputChange} /> */}
                            <Form.Select as="select" custom aria-label="Default select example" onChange={handleInputChange} name='kesimpulanEng'>
                                <option disabled>{results.kesimpulanEng}</option>
                                <option disabled>--------</option>
                                <option value="Based on the above, we explain that the result is Negative, but this letter does not state COVID-19 free.">Based on the above, we explain that the result is Negative, but this letter does not state COVID-19 free. </option>
                                <option value="Based on the above, we explain that the result is Positive, Please do a PCR swab test for makesure.">Based on the above, we explain that the result is Positive, Please do a PCR swab test for makesure.</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Kesimpulan Ind</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleInputChange} name='kesimpulanIna'>
                                <option disabled>{results.kesimpulanIna}</option>
                                <option disabled>--------</option>
                                <option value="Berdasarkan hasil diatas, maka kami menerangkan bahwa hasilnya Negatif, Namun demikian surat ini bukan menyatakan bebas COVID -19">Berdasarkan hasil diatas, maka kami menerangkan bahwa hasilnya Negatif, Namun demikian surat ini bukan menyatakan bebas COVID -19</option>
                                <option value="Berdasarkan hasil diatas, maka kami menerangkan bahwa hasilnya Positif ,Mohon segera lakukan Pemeriksaan PCR swab test untuk memastikannya. ">Berdasarkan hasil diatas, maka kami menerangkan bahwa hasilnya Positif ,Mohon segera lakukan Pemeriksaan PCR swab test untuk memastikannya. </option>
                            </Form.Select>
                            {/* <Form.Control
                                type="text"
                                name='kesimpulanIna'
                                placeholder="Masukan kesimpulan Ina"
                                value={results.kesimpulanIna}
                                style={{ backgroundColor: '#EEF0F3' }}
                                onChange={handleInputChange} /> */}
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Button style={{ marginRight: 10 }} variant="primary" type="submit" onClick={handleOnClick}>
                        Submit
                    </Button>
                    <Button variant="danger" onClick={props.onHide}>Batal</Button>
                </Row>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalUpdate