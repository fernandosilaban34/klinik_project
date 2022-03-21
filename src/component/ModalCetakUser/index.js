import React from 'react'
import { useHistory } from "react-router";
import { Modal, Button, Col, Row, Card, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import * as moment from 'moment';

import Pdf from "react-to-pdf";
import QRcode from '../../data/qrcode';
import '../../assests/pdf.css'
import Logo from '../../assests/logo.png'
import TopPdf from '../../assests/atas surat.png'
import BottomPdf from '../../assests/footerpdf.png'
import Ttd from '../../assests/ttd.png'

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
            <div style={{ height: 600, position: 'absolute', top: -4000 }}>
                <div className="Post" style={{ position: 'relative' }} ref={ref}>
                    <img style={{ width: '100%', height: 15, marginBottom: 20 }} src={TopPdf} />

                    <div class="paper" >
                        <div style={{ width: '50%' }}>
                            <img style={{ height: 80, position: 'relative', left: 520, marginBottom: 20 }} src={Logo} />
                        </div>
                        <p style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}><u>ANTIGEN SWAB EXAMINATION CERTIFICATE</u></p>
                        <p style={{ textAlign: 'center', fontSize: 13 }}>SURAT KETERANGAN PEMERIKSAAN SWAB ANTIGEN</p>
                        <div class="header">
                        </div>
                        <div>
                            <div style={{ width: 685, paddingTop: 20 }}>
                                <Row>
                                    <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                        <div style={{ width: 400, borderWidth: 1, borderColor: 'black', borderStyle: 'groove', borderBottom: 0, borderRight: 0 }}>
                                            <div style={{ padding: 2, paddingLeft: 30 }}>
                                                <p style={styles.fontWeight}>Fullname</p>
                                                <p style={styles.fontNormal}>Nama Lengkap</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col style={{ padding: 0 }}>
                                        <div style={{ borderWidth: 1, borderBottom: 0, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41 }}>
                                            <p style={styles.fontValue}>{props.dataPasien.namaPasien}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                        <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                            <div style={{ padding: 2, paddingLeft: 30 }}>
                                                <p style={styles.fontWeight}>Date of Birth</p>
                                                <p style={styles.fontNormal}>Tanggal Lahir</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col style={{ padding: 0 }}>
                                        <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41, borderBottom: 0 }}>
                                            <p style={styles.fontValue}>{moment(props.dataPasien.tglLahir).format("DD-MM-YYYY")}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                        <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                            <div style={{ padding: 2, paddingLeft: 30 }}>
                                                <p style={styles.fontWeight}>Gender</p>
                                                <p style={styles.fontNormal}>Jenis Kelamin</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col style={{ padding: 0 }}>
                                        <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41, borderBottom: 0 }}>
                                            <p style={styles.fontValue}>{props.dataPasien.jenisKelamin}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                        <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove' }}>
                                            <div style={{ padding: 2, paddingLeft: 30 }}>
                                                <p style={styles.fontWeight}>ID No.</p>
                                                <p style={styles.fontNormal}>No. Identitas</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col style={{ padding: 0 }}>
                                        <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41 }}>
                                            <p style={styles.fontValue}>{props.dataPasien.NIK}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className='text'>
                            <h6 style={{ fontWeight: 'bold', fontSize: 12, paddingTop: 12 }}>Based on the test conducted on (attached result):</h6>
                            <p style={{ fontSize: 12 }}>Berdasarkan hasil pemeriksaan yang telah dilaksanakan pada (terlampir hasil)</p>
                        </div>
                        <div style={{ width: 685, paddingTop: 20 }}>
                            <Row>
                                <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                    <div style={{ width: 400, borderWidth: 1, borderColor: 'black', borderStyle: 'groove', borderBottom: 0, borderRight: 0 }}>
                                        <div style={{ padding: 2, paddingLeft: 30 }}>
                                            <p style={styles.fontWeight}>Date of Examination</p>
                                            <p style={styles.fontNormal}>Tanggal Pemeriksaan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={{ padding: 0 }}>
                                    <div style={{ borderWidth: 1, borderBottom: 0, borderColor: 'black', borderStyle: 'groove', maxHeight: 42, height: 43 }}>
                                        <p style={styles.fontValue}>{moment(props.dataPasien.tglPemeriksaan).format("DD MMMM YYYY")}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                    <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                        <div style={{ padding: 2, paddingLeft: 30 }}>
                                            <p style={styles.fontWeight}>Time of Sampling</p>
                                            <p style={styles.fontNormal}>Waktu pengambilan sampel</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={{ padding: 0 }}>
                                    <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41, borderBottom: 0 }}>
                                        <p style={styles.fontValue}>{props.dataPasien.waktuPemeriksaan}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                    <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                        <div style={{ padding: 2, paddingLeft: 30 }}>
                                            <p style={styles.fontWeight}>Type of Examination</p>
                                            <p style={styles.fontNormal}>Jenis Pemeriksaan</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={{ padding: 0 }}>
                                    <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 42, height: 42, borderBottom: 0 }}>
                                        <p style={styles.fontValue}>{props.dataPasien.tipePemeriksaan}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                    <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                        <div style={{ padding: 2, paddingLeft: 30 }}>
                                            <p style={styles.fontWeight}>Result</p>
                                            <p style={styles.fontNormal}>Hasil</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={{ padding: 0 }}>
                                    <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 43, height: 43, borderBottom: 0 }}>
                                        <p style={styles.fontValue}>{props.dataPasien.hasilPemeriksaan}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                    <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', }}>
                                        <div style={{ padding: 2, paddingLeft: 30 }}>
                                            <p style={styles.fontWeight}>References Range</p>
                                            <p style={styles.fontNormal}>Nilai Normal</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={{ padding: 0 }}>
                                    <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 42, height: 42 }}>
                                        <p style={styles.fontValue}>{props.dataPasien.nilaiNormal}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='text' style={{ marginTop: 10 }}>
                            <h6 style={{ fontWeight: 'bold', fontSize: 14 }}>Conclusion:</h6>
                            <p style={{ fontSize: 12 }}>Kesimpulan:</p>
                        </div>

                        <div className='text' style={{ marginTop: 10 }}>
                            <h6 style={{ fontWeight: 'bold', fontSize: 14 }}>{props.dataPasien.kesimpulanEng}</h6>
                            <p style={{ fontSize: 10 }}> {props.dataPasien.kesimpulanIna}</p>
                        </div>
                        <div className='text' style={{ marginTop: 10 }}>
                            <h6 style={{ fontWeight: 'bold', fontSize: 14 }}>Please use this certificate as needed.</h6>
                            <p style={{ fontSize: 10 }}>Sertifikat ini dibuat sebagaimana mestinya</p>
                        </div>
                        <Row>
                            <div style={{ width: '50%', height: 50, marginTop: 20 }}>
                                <p style={{ fontSize: 12 }}>Jakarta,{moment(props.dataPasien.tglPemeriksaan).format("DD MMMM YYYY")}</p>
                                <div style={{ width: '50%', paddingTop: 20 }}>
                                    <img style={{ height: 120, position: 'relative', marginBottom: 30, left: -15 }} src={Ttd} />
                                </div>
                            </div>
                            <div style={{ width: '40%', height: 50, marginLeft: 20, marginTop: 20 }}>
                                <p style={styles.fontNormalVcnenter}>Silahkan untuk scan barcode dibawah ini untuk melihat hasil pemeriksaan</p>
                                <div style={{ paddingLeft: 70, height: 100 }}>
                                    <QRcode text={url} />
                                </div>
                            </div>
                        </Row>
                    </div>
                    <img style={{ height: 100, width: '100%', position: 'relative', top: -100 }} src={BottomPdf} />
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
                    <div style={{ overflow: 'scroll', height: 600 }}>
                        <div className="Post" style={{ position: 'relative' }}>
                            <img style={{ width: '100%', height: 15, marginBottom: 20 }} src={TopPdf} />

                            <div class="paper" >
                                <div style={{ width: '50%' }}>
                                    <img style={{ height: 80, position: 'relative', left: 520, marginBottom: 20 }} src={Logo} />
                                </div>
                                <p style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}><u>ANTIGEN SWAB EXAMINATION CERTIFICATE</u></p>
                                <p style={{ textAlign: 'center', fontSize: 13 }}>SURAT KETERANGAN PEMERIKSAAN SWAB ANTIGEN</p>
                                <div class="header">
                                </div>
                                <div>
                                    <div style={{ width: 685, paddingTop: 20 }}>
                                        <Row>
                                            <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                                <div style={{ width: 400, borderWidth: 1, borderColor: 'black', borderStyle: 'groove', borderBottom: 0, borderRight: 0 }}>
                                                    <div style={{ padding: 2, paddingLeft: 30 }}>
                                                        <p style={styles.fontWeight}>Fullname</p>
                                                        <p style={styles.fontNormal}>Nama Lengkap</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col style={{ padding: 0 }}>
                                                <div style={{ borderWidth: 1, borderBottom: 0, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41 }}>
                                                    <p style={styles.fontValue}>{props.dataPasien.namaPasien}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                                <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                                    <div style={{ padding: 2, paddingLeft: 30 }}>
                                                        <p style={styles.fontWeight}>Date of Birth</p>
                                                        <p style={styles.fontNormal}>Tanggal Lahir</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col style={{ padding: 0 }}>
                                                <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41, borderBottom: 0 }}>
                                                    <p style={styles.fontValue}>{moment(props.dataPasien.tglLahir).format("DD-MM-YYYY")}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                                <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                                    <div style={{ padding: 2, paddingLeft: 30 }}>
                                                        <p style={styles.fontWeight}>Gender</p>
                                                        <p style={styles.fontNormal}>Jenis Kelamin</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col style={{ padding: 0 }}>
                                                <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41, borderBottom: 0 }}>
                                                    <p style={styles.fontValue}>{props.dataPasien.jenisKelamin}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                                <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove' }}>
                                                    <div style={{ padding: 2, paddingLeft: 30 }}>
                                                        <p style={styles.fontWeight}>ID No.</p>
                                                        <p style={styles.fontNormal}>No. Identitas</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col style={{ padding: 0 }}>
                                                <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41 }}>
                                                    <p style={styles.fontValue}>{props.dataPasien.NIK}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className='text'>
                                    <h6 style={{ fontWeight: 'bold', fontSize: 12, paddingTop: 12 }}>Based on the test conducted on (attached result):</h6>
                                    <p style={{ fontSize: 12 }}>Berdasarkan hasil pemeriksaan yang telah dilaksanakan pada (terlampir hasil)</p>
                                </div>
                                <div style={{ width: 685, paddingTop: 20 }}>
                                    <Row>
                                        <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                            <div style={{ width: 400, borderWidth: 1, borderColor: 'black', borderStyle: 'groove', borderBottom: 0, borderRight: 0 }}>
                                                <div style={{ padding: 2, paddingLeft: 30 }}>
                                                    <p style={styles.fontWeight}>Date of Examination</p>
                                                    <p style={styles.fontNormal}>Tanggal Pemeriksaan</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col style={{ padding: 0 }}>
                                            <div style={{ borderWidth: 1, borderBottom: 0, borderColor: 'black', borderStyle: 'groove', maxHeight: 42, height: 43 }}>
                                                <p style={styles.fontValue}>{moment(props.dataPasien.tglPemeriksaan).format("DD MMMM YYYY")}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                            <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                                <div style={{ padding: 2, paddingLeft: 30 }}>
                                                    <p style={styles.fontWeight}>Time of Sampling</p>
                                                    <p style={styles.fontNormal}>Waktu pengambilan sampel</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col style={{ padding: 0 }}>
                                            <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 41, height: 41, borderBottom: 0 }}>
                                                <p style={styles.fontValue}>{props.dataPasien.waktuPemeriksaan}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                            <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                                <div style={{ padding: 2, paddingLeft: 30 }}>
                                                    <p style={styles.fontWeight}>Type of Examination</p>
                                                    <p style={styles.fontNormal}>Jenis Pemeriksaan</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col style={{ padding: 0 }}>
                                            <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 42, height: 42, borderBottom: 0 }}>
                                                <p style={styles.fontValue}>{props.dataPasien.tipePemeriksaan}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                            <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', borderBottom: 0 }}>
                                                <div style={{ padding: 2, paddingLeft: 30 }}>
                                                    <p style={styles.fontWeight}>Result</p>
                                                    <p style={styles.fontNormal}>Hasil</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col style={{ padding: 0 }}>
                                            <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 43, height: 43, borderBottom: 0 }}>
                                                <p style={styles.fontValue}>{props.dataPasien.hasilPemeriksaan}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{ padding: 0, margin: 0, paddingLeft: 15 }}>
                                            <div style={{ width: 400, borderWidth: 1, borderRight: 0, borderColor: 'black', borderStyle: 'groove', }}>
                                                <div style={{ padding: 2, paddingLeft: 30 }}>
                                                    <p style={styles.fontWeight}>References Range</p>
                                                    <p style={styles.fontNormal}>Nilai Normal</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col style={{ padding: 0 }}>
                                            <div style={{ borderWidth: 1, borderColor: 'black', borderStyle: 'groove', maxHeight: 42, height: 42 }}>
                                                <p style={styles.fontValue}>{props.dataPasien.nilaiNormal}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='text' style={{ marginTop: 10 }}>
                                    <h6 style={{ fontWeight: 'bold', fontSize: 14 }}>Conclusion:</h6>
                                    <p style={{ fontSize: 12 }}>Kesimpulan:</p>
                                </div>

                                <div className='text' style={{ marginTop: 10 }}>
                                    <h6 style={{ fontWeight: 'bold', fontSize: 14 }}>{props.dataPasien.kesimpulanEng}</h6>
                                    <p style={{ fontSize: 10 }}> {props.dataPasien.kesimpulanIna}</p>
                                </div>
                                <div className='text' style={{ marginTop: 10 }}>
                                    <h6 style={{ fontWeight: 'bold', fontSize: 14 }}>Please use this certificate as needed.</h6>
                                    <p style={{ fontSize: 10 }}>Sertifikat ini dibuat sebagaimana mestinya</p>
                                </div>
                                <Row>
                                    <div style={{ width: '50%', height: 50, marginTop: 20 }}>
                                        <p style={{ fontSize: 12 }}>Jakarta,{moment(props.dataPasien.tglPemeriksaan).format("DD MMMM YYYY")}</p>
                                        <div style={{ width: '50%', paddingTop: 20 }}>
                                            <img style={{ height: 120, position: 'relative', marginBottom: 30, left: -15 }} src={Ttd} />
                                        </div>
                                    </div>
                                    <div style={{ width: '40%', height: 50, marginLeft: 20, marginTop: 20 }}>
                                        <p style={styles.fontNormalVcnenter}>Silahkan untuk scan barcode dibawah ini untuk melihat hasil pemeriksaan</p>
                                        <div style={{ paddingLeft: 70, height: 100 }}>
                                            <QRcode text={url} />
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <img style={{ height: 100, width: '100%', position: 'relative', top: -100 }} src={BottomPdf} />
                        </div>
                    </div>
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
        paddingLeft: 12,
        paddingTop: 10
    },
    fontNormalVcnenter: {
        fontSize: 12,
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