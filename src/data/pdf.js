import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import '../assests/pdf.css'
import QRcode from './qrcode';

const ref = React.createRef();

const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4, 2]
};

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <div>
          <div class="paper">
            <div class="header">
              <div class="logo">logo</div>
              <div class="subHeader">subHeader</div>
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
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td style={styles.abuAbu}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
              </tr>
            </table>
            <table style={{ border: '1px solid' }} className='tablePDF'>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td style={styles.abuAbu2}>
                  <Col>
                    <p style={styles.fontWeight}>Tanggal Penerimaan</p>
                    <p style={styles.fontNormal}>Sample. Collecttion Date</p>
                  </Col>
                </td>
                <td>Griffin</td>
              </tr>
            </table>

            <table>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
              </tr>
            </table>
            <div class="letterSection">
              <div></div>
            </div>

            <div class="signatureSection">
              <QRcode text="ok" />
            </div>
          </div>
        </div>
      </div>
      <Pdf filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf} options={options}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}


const styles = {
  header: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  abuAbu2: {
    backgroundColor: '#D9E2F3',
    width: '50%'
  },
  abuAbu: {
    backgroundColor: '#D9E2F3',
  },
  fontWeight: {
    fontWeight: 'bold',
    fontSize: 12
  },
  fontNormal: {
    fontSize: 12
  }
}

export default PDF;