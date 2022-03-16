import React from 'react'
import { useHistory } from "react-router";
import { Modal, Button, Col, Row, Card, Form, DropdownButton, Dropdown } from 'react-bootstrap';
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
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                frameborder="0" width="100%" height="400px"

            >
                <Modal.Footer>
                    <div style={{ overflow: 'scroll', height: 600 }}>
                        <div className="Post" ref={ref}>
                            <div class="paper">
                                <div style={{ width: '50%', paddingTop:10 }}>
                                    <img style={{ height: 100, position: 'relative', left:480, marginBottom:30, }} src={Logo} />
                                </div>
                                <p style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}><u>ANTIGEN SWAB EXAMINATION CERTIFICATE</u></p>
                                <p style={{ textAlign: 'center', fontSize: 13 }}>SURAT KETERANGAN PEMERIKSAAN SWAB ANTIGEN</p>
                                <div class="header">
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
                                    <h6 style={{ fontWeight: 'bold', fontSize: 12, paddingTop: 12 }}>Based on the test conducted on (attached result):</h6>
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