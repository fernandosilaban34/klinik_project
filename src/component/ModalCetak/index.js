import React from 'react'
import { useHistory } from "react-router";
import { Modal, Button, Col, Row } from 'react-bootstrap';
import * as moment from 'moment';

import Pdf from "react-to-pdf";
import QRcode from '../../data/qrcode';
import '../../assests/pdf.css'
import Logo from '../../assests/logo.png'


const ModalCetak = (props) => {
    const history = useHistory();
    const handleOpenPdf = path => {
        history.push(path);
    };


    let url = 'http//:8.215.37.21:5022/user/' + props.dataPasien.NIK
    let filename = props.dataPasien.NIK+'.pdf'
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
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Footer>
                    <div className="Post" ref={ref}>
                        <div class="paper">
                            <div class="header">
                                <h5>ANTIGEN SWAB EXAMINATION CERTIFICATE
                                    SURAT KETERANGAN PEMERIKSAAN SWAB ANTIGEN
                                </h5>
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
                    <Button variant="secondary" onClick={props.onHide}>Close</Button>
                    <Pdf filename={filename} targetRef={ref}>
                        {({ toPdf }) => <Button variant="success" onClick={toPdf} options={options}>Cetak PDF</Button>}
                    </Pdf>
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


export default ModalCetak