import React, { useEffect } from 'react'
import { Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap'
import ModalCetak from '../component/ModalCetak';

export default function User(props) {
    let dataTemp = [
        {
            "IDPasien": 133,
            "waktuPengambilanSampel": "00:00:00",
            "namaPasien": "Brian",
            "tglLahir": "2022-03-14T16:00:00.000Z",
            "jenisKelamin": "Laki-laki",
            "NIK": "123123123123123",
            "tglPemeriksaan": "2022-03-15T16:00:00.000Z",
            "waktuPemeriksaan": "00:00:00",
            "tipePemeriksaan": "test",
            "hasilPemeriksaan": "NEGATIVE",
            "nilaiNormal": "Negative",
            "kesimpulanEng": "Based on the above, we explain that the result is Negative, but this letter does not state COVID-19 free. ",
            "kesimpulanIna": "Berdasarkan hasil diatas, maka kami menerangkan bahwa hasilnya Negatif, Namun demikian surat ini bukan menyatakan bebas COVID -19 "
        }
    ]

    const [modalShowCetak, setModalShowCetak] = React.useState(false);
    const [dataUpdate, setdataUpdate] = React.useState();
    const [tglLahir, setTglLahir] = React.useState();
    const [data, setdata] = React.useState(dataTemp);

    useEffect(() => {
    }, [])


    function handleDidCetak(item) {
        setdataUpdate(item)
        setModalShowCetak(true)
    }

    function handleChangeTgl(e) {
        setTglLahir(e.target.value)
        // setModalShowDelete(true)
    }

    return (
        <Container style={{ paddingTop: 10, paddingBottom: 10, paddingTop: '10%' }}>
            {modalShowCetak == true ? <ModalCetak
                show={modalShowCetak}
                dataPasien={dataUpdate}
                onHide={() => setModalShowCetak(false)}
            /> : null}
            <h1 style={{ textAlign: 'center', marginBottom: 50 }}></h1>
            {/* <h2>{props.match.params.noKtp}</h2> */}
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%', borderRadius: 10 }}>
                <div style={{ backgroundColor: '#198754', padding: 50, borderRadius: 10, boxShadow: "5px 5px 5px #9E9E9E" }}>
                    <Form.Label className='pb-4 text-light' style={{ textAlign: 'center' }}><h4 style={{ fontWeight: 'bold' }}>Masukan Tanggal Lahir</h4></Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><i className="bi bi-calendar-date"></i></InputGroup.Text>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type="date"
                                value={tglLahir}
                                onChange={handleChangeTgl}
                            />
                        </InputGroup>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
                    <Button variant="primary" type="submit" style={{ width: '100%', marginTop: 15 }} onClick={() => handleDidCetak(data)}>
                        Submit
                    </Button>
                </div>
            </div>

        </Container>
    )
}