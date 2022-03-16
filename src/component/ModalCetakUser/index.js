import React from 'react'
import { useHistory } from "react-router";
import { Modal, Button, Col, Row, Card, Form } from 'react-bootstrap';
import * as moment from 'moment';

import Pdf from "react-to-pdf";
import QRcode from '../../data/qrcode';
import '../../assests/pdf.css'
import Logo from '../../assests/logo.png'


const ModalCetakUser = (props) => {
    const history = useHistory();
    const handleOpenPdf = path => {
        history.push(path);
    };


    const [hiddenUser, sethiddenUser] = React.useState(true)

    let url = 'http//:8.215.37.21:5022/user/' + props.dataPasien.NIK
    let filename = props.dataPasien.NIK + '.pdf'
    console.log(props.dataPasien, 'dataPasien');

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };

    return (
        <>
            {/* <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Footer>
                    <div className="Post" ref={ref}>
                        <div className="paper">
                            <div className="header">
                                <div style={{ width: '50%' }}>
                                    <img style={{ height: 200, position: 'absolute', top: 5 }} src={Logo} />
                                </div>
                                <div style={{ width: '50%' }}>
                                    <p style={styles.textParagrafRight}>Officia eexercitation excepteur duis nisi proident. Cillum quis reprehenderit proident proident. In ullamco nostrud quis exercitation ipsum. Voluptate incididunt Lorem ullamco sint velit.</p>
                                </div>
                            </div>
                            <table style={{ border: '1px solid' }} className='tablePDF'>
                                <tr>
                                    <td style={styles.abuAbu}>
                                        <Col >
                                            <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                                            <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <Col>
                                            <p style={styles.fontWeight}>{moment(props.dataPasien.tglPenerimaan).format("DD-MM-YYYY")}</p>
                                            <p style={styles.fontNormal}>{props.dataPasien.waktuPenerimaan}</p>
                                        </Col>
                                    </td>
                                    <td style={styles.abuAbu}>
                                        <Col>
                                            <p style={styles.fontWeight}>Tanggal Pemeriksaan</p>
                                            <p style={styles.fontNormal}>Date of Analysis</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <Col>
                                            <p style={styles.fontWeight}>{moment(props.dataPasien.tglPemeriksaan).format("DD-MM-YYYY")}</p>
                                        </Col>
                                    </td>
                                </tr>
                            </table>
                            <table style={{ border: '1px solid' }} className='tablePDF'>
                                <tr>
                                    <td style={styles.abuAbu2}>
                                        <Col>
                                            <p style={styles.fontWeight}>No. ID Pasien Laboratorium</p>
                                            <p style={styles.fontNormal}>Patient Lab ID Number</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormal}>{props.dataPasien.IDPasien}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={styles.abuAbu2}>
                                        <Col>
                                            <p style={styles.fontWeight}>Pengirim / Rumah Sakit</p>
                                            <p style={styles.fontNormal}>Sender / Hospital</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormal}>{props.dataPasien.pengirim}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={styles.abuAbu2}>
                                        <Col>
                                            <p style={styles.fontWeight}>Nama Pasien</p>
                                            <p style={styles.fontNormal}>Patient Name</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormal}>{props.dataPasien.namaPasien}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={styles.abuAbu2}>
                                        <Col>
                                            <p style={styles.fontWeight}>Nomor Identitas</p>
                                            <p style={styles.fontNormal}>Identity Number</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormal}>{props.dataPasien.NIK}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={styles.abuAbu2}>
                                        <Col>
                                            <p style={styles.fontWeight}>Tanggal Lahir</p>
                                            <p style={styles.fontNormal}>Date of Birth</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormal}>{moment(props.dataPasien.tglLahir).format("DD-MM-YYYY")}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={styles.abuAbu2}>
                                        <Col>
                                            <p style={styles.fontWeight}>Jenis Specimen</p>
                                            <p style={styles.fontNormal}>Specimen Origin</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormal}>{props.dataPasien.jenisSpecimen}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={styles.abuAbu2}>
                                        <Col>
                                            <p style={styles.fontWeight}>Pemeriksaan</p>
                                            <p style={styles.fontNormal}>Examination</p>
                                        </Col>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormal}>{props.dataPasien.pemeriksaan}</p>
                                    </td>
                                </tr>
                            </table>

                            <table style={{ border: '1px solid' }} className='tablePDF'>
                                <tr>
                                    <th style={{ width: '50%' }}>
                                        <p style={styles.fontWeightVHeader}>Gene Target</p>
                                    </th>
                                    <th>
                                        <p style={styles.fontWeightVHeader}>Nilai CT / CT Value</p>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <p style={styles.fontNormalVcnenter}>ORF SARS-CoV-2. CT cutoff: 38</p>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormalVcnenter}>ORF SARS-CoV-2. CT cutoff: 38</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style={styles.fontNormalVcnenter}>ORF SARS-CoV-2. CT cutoff: 38</p>
                                    </td>
                                    <td>
                                        <p style={styles.fontNormalVcnenter}>ORF SARS-CoV-2. CT cutoff: 38</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p style={styles.fontWeightVHeader}>Kesimpulan / Consclusion</p>
                                    </td>
                                    <td>
                                        <p style={styles.fontWeightVHeader}>POSITIF / NEGATIF</p>
                                    </td>
                                </tr>
                            </table>
                            <div className='text'>
                                <p style={styles.textParagraf}>Occaecat aliqua incididunt duis amet ullamco aute ullamco sunt dolor eiusmod reprehenderit ut magna. Fugiat veniam minim non occaecat velit id ex eu. Cillum esse occaecat laborum aliqua cillum incididunt duis elit ad magna anim proident eu. Commodo magna commodo consequat commodo ad non ut.</p>
                                <i style={styles.textParagraf}>Occaecat aliqua incididunt duis amet ullamco aute ullamco sunt dolor eiusmod reprehenderit ut magna. Fugiat veniam minim non occaecat velit id ex eu. Cillum esse occaecat laborum aliqua cillum incididunt duis elit ad magna anim proident eu. Commodo magna commodo consequat commodo ad non ut.</i>
                            </div>
                            <Row>
                                <div style={{ width: '50%', height: 50, marginLeft: 15, marginTop: 50 }}>
                                    <p style={styles.fontNormalVcnenter}>Jakarta, 02 September 2022</p>
                                </div>
                                <div style={{ width: '40%', height: 50, marginLeft: 15, marginTop: 50 }}>
                                    <p style={styles.fontNormalVcnenter}>Laborum anim duis exercitation deserunt proident non laborum.</p>
                                    <div style={{marginLeft: 100}}>
                                        <QRcode text="ok" />
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <Button variant="secondary" onClick={props.onHide}>Close</Button>
                    <Pdf filename="post.pdf" targetRef={ref}>
                        {({ toPdf }) => <Button variant="success" onClick={toPdf} options={options}>Cetak PDF</Button>}
                    </Pdf>
                </Modal.Footer>
            </Modal> */}
            <div style={{backgroundColor:'white', width:2000, height: 2000, position:'absolute'}}></div>
            <div style={{width:'100%', height:'100%'}}>
                <div className="Post" ref={ref}>
                    <div class="paper">
                        <div class="header">
                            <div><p>ANTIGEN SWAB EXAMINATION CERTIFICATE</p></div>
                            <p>SURAT KETERANGAN PEMERIKSAAN SWAB ANTIGEN
                            </p>
                        </div>

                        <table style={{ border: '1px solid' }} className='tablePDF'>
                            <tr>
                                <td>
                                    <Col>
                                        <p style={styles.fontWeight}>Fullname</p>
                                        <p style={styles.fontNormal}>Nama Lengkap</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{props.dataPasien.namaPasien}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Col>
                                        <p style={styles.fontWeight}>Date of Birth</p>
                                        <p style={styles.fontNormal}>Tanggal Lahir</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{moment(props.dataPasien.tglLahir).format("DD-MM-YYYY")}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Col>
                                        <p style={styles.fontWeight}>Gender</p>
                                        <p style={styles.fontNormal}>Jenis Kelamin</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{props.dataPasien.jenisKelamin}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Col>
                                        <p style={styles.fontWeight}>ID No.</p>
                                        <p style={styles.fontNormal}>No. Identitas</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{props.dataPasien.NIK}</p>
                                </td>
                            </tr>
                        </table>
                        <div className='text'>
                            <h6 style={{ fontWeight: 'bold' }}>Based on the test conducted on (attached result):</h6>
                            <p style={{ fontSize: 12 }}>Berdasarkan hasil pemeriksaan yang telah dilaksanakan pada (terlampir hasil)</p>
                        </div>
                        <table style={{ border: '1px solid' }} className='tablePDF'>
                            <tr>
                                <td>
                                    <Col>
                                        <p style={styles.fontWeight}>Date of Examination</p>
                                        <p style={styles.fontNormal}>Tanggal Pemeriksaan</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{moment(props.dataPasien.tglPemeriksaan).format("DD MMMM YYYY")}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={styles.abuAbu2}>
                                    <Col>
                                        <p style={styles.fontWeight}>Time of Sampling</p>
                                        <p style={styles.fontNormal}>Waktu pengambilan sampel</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{props.dataPasien.waktuPemeriksaan}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={styles.abuAbu2}>
                                    <Col>
                                        <p style={styles.fontWeight}>Type of Examination</p>
                                        <p style={styles.fontNormal}>Jenis Pemeriksaan</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{props.dataPasien.tipePemeriksaan}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={styles.abuAbu2}>
                                    <Col>
                                        <p style={styles.fontWeight}>Result</p>
                                        <p style={styles.fontNormal}>Hasil</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{props.dataPasien.hasilPemeriksaan}</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={styles.abuAbu2}>
                                    <Col>
                                        <p style={styles.fontWeight}>References Range</p>
                                        <p style={styles.fontNormal}>Nilai Normal</p>
                                    </Col>
                                </td>
                                <td>
                                    <p style={styles.fontValue}>{props.dataPasien.nilaiNormal}</p>
                                </td>
                            </tr>

                        </table>
                        <div className='text' style={{ marginTop: 10 }}>
                            <h6 style={{ fontWeight: 'bold' }}>Conclusion:</h6>
                            <p style={{ fontSize: 12 }}>Kesimpulan:</p>
                        </div>

                        <div className='text' style={{ marginTop: 10 }}>
                            <h6 style={{ fontWeight: 'bold' }}>{props.dataPasien.kesimpulanEng}</h6>
                            <p style={{ fontSize: 12 }}> {props.dataPasien.kesimpulanIna}</p>
                        </div>
                        <div className='text' style={{ marginTop: 10 }}>
                            <h6 style={{ fontWeight: 'bold' }}>Please use this certificate as needed.</h6>
                            <p style={{ fontSize: 12 }}>Sertifikat ini dibuat sebagaimana mestinya</p>
                        </div>
                        <Row>
                            <div style={{ width: '50%', height: 50, marginLeft: 15, marginTop: 50 }}>
                                <p style={styles.fontNormalVcnenter}>{props.dataPasien.kotaPemeriksaan},{moment(props.dataPasien.tglPemeriksaan).format("DD MMMM YYYY")}</p>
                            </div>
                            <div style={{ width: '40%', height: 50, marginLeft: 15, marginTop: 50 }}>
                                <p style={styles.fontNormalVcnenter}>Silahkan untuk scan barcode dibawah ini untuk melihat hasil pemeriksaan</p>
                                <div style={{ marginLeft: 100 }}>
                                    <QRcode text={url} />
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </div>
            
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                frameborder="0" width="100%" height="400px"

            >
                <Modal.Footer>
                    <Card style={{ marginRight: 70 }}>
                        <Card.Header><h3>DETAIL PASIEN</h3></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Form.Text className="text-muted mb-4">
                                        Data Pasien
                                    </Form.Text>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>ID Pasien</Form.Label>
                                        <Form.Control disabled
                                            type="number"
                                            placeholder="Masukan ID Pasien"
                                            name="IDPasien"
                                            style={{ backgroundColor: '#EEF0F3' }}
                                            value={props.dataPasien.IDPasien}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>NIK</Form.Label>
                                        <Form.Control
                                            disabled
                                            type="number"
                                            name='NIK'
                                            placeholder="Masukan NIK"
                                            value={props.dataPasien.NIK}
                                            style={{ backgroundColor: '#EEF0F3' }}

                                        />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Jenis Kelamin</Form.Label>
                                        <Form.Select disabled aria-label="Default select example" name='jenisKelamin' >
                                            <option>{props.dataPasien.jenisKelamin}</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Text className="text-muted mb-4 mt-4">
                                        Keterangan Data
                                    </Form.Text>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label> Waktu Pengambilan Sampel</Form.Label>
                                        <Form.Control
                                            disabled
                                            name='waktuPengambilanSampel'
                                            type="time"
                                            value={props.dataPasien.waktuPengambilanSampel}
                                            style={{ backgroundColor: '#EEF0F3' }}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Tipe Pemeriksaan</Form.Label>
                                        <Form.Select disabled aria-label="Default select example" name='tipePemeriksaan'>
                                            <option>{props.dataPasien.tipePemeriksaan}</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Tanggal Pemeriksaan</Form.Label>
                                        <Form.Control
                                            disabled
                                            type="date"
                                            name='tglPemeriksaan'
                                            value={props.dataPasien.tglPemeriksaan}
                                            style={{ backgroundColor: '#EEF0F3' }}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Nilai Normal</Form.Label>
                                        <Form.Select disabled aria-label="Default select example" name='nilaiNormal'>
                                            <option>{props.dataPasien.nilaiNormal}</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control
                                            disabled
                                            type="email"
                                            name="namaPasien"
                                            value={props.dataPasien.namaPasien}
                                            placeholder="Masukan Nama"
                                            style={{ backgroundColor: '#EEF0F3' }}

                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicPassword">
                                        <Form.Label>Tanggal Lahir</Form.Label>
                                        <Form.Control
                                            disabled
                                            type="date"
                                            name="tglLahir"
                                            value={props.dataPasien.tglLahir}
                                            placeholder="Tanggal Lahir Pasien"
                                            style={{ backgroundColor: '#EEF0F3' }}
                                        />
                                    </Form.Group>
                                    <Form.Text className="text-muted mb-4">
                                        <div>&nbsp;</div>
                                    </Form.Text>
                                    <Form.Text className="text-muted mb-4 mt-4">
                                        &nbsp;
                                    </Form.Text>
                                    <Form.Text className="text-muted mb-4 mt-4">
                                        &nbsp;
                                    </Form.Text>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Waktu Pemeriksaan</Form.Label>
                                        <Form.Control
                                            disabled
                                            type="time"
                                            name="waktuPemeriksaan"
                                            value={props.dataPasien.waktuPemeriksaan}
                                            placeholder="Masukan Waktu Pemeriksaan"
                                            style={{ backgroundColor: '#EEF0F3' }}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Hasil Pemeriksaan</Form.Label>
                                        <Form.Select disabled aria-label="Default select example" name='hasilPemeriksaan'>
                                            <option>{props.dataPasien.hasilPemeriksaan}</option>
                                        </Form.Select>
                                        {/* <Form.Control
                type="text"
                name='hasilPemeriksaan'
                placeholder="Masukan Hasil Pemeriksaan"
                value={props.dataPasien.hasilPemeriksaan}
                style={{ backgroundColor: '#EEF0F3' }}
                 /> */}
                                    </Form.Group>


                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <div>
                        <Pdf filename={filename} targetRef={ref}>
                            {({ toPdf }) => <Button variant="success" onClick={toPdf} options={options}>Cetak PDF</Button>}
                        </Pdf>
                        <Button variant="secondary" onClick={props.onHide}>Close</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const styles = {
    header: {
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    abuAbu2: {

        width: '50%'
    },
    abuAbu: {
        backgroundColor: '#D9E2F3',
    },
    fontWeight: {
        fontWeight: 'bold',
        fontSize: 12
    },
    fontWeightVHeader: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5

    },
    fontNormal: {
        fontSize: 12,
        fontStyle: 'italic'

    },
    fontValue: {
        fontSize: 12,
    },
    fontNormalVcnenter: {
        fontSize: 12,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
    },
    textParagraf: {
        fontSize: 12,
        paddingTop: 20,
        textAlign: 'justify',
        paddingBottom: 20
    },
    textParagrafRight: {
        fontSize: 12,
        paddingTop: 20,
        textAlign: 'right',
        paddingBottom: 20
    }

}


export default ModalCetakUser