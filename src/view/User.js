import React, { useEffect } from 'react'
import { Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap'
import ModalCetak from '../component/ModalCetak';
import { useDispatch, useSelector, connect } from 'react-redux';
import { VALIDATE_PASIEN } from '../Action';
import { useIsMount } from '../costum-hooks/useIsMount';
import axios from 'axios';

export default function User(props) {

    const isMount = useIsMount();
    const dispatch = useDispatch();
    const dataRedux = useSelector((state) => state.validateUser)

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
    const [dataUpdate, setdataUpdate] = React.useState(dataRedux);
    const [tglLahir, setTglLahir] = React.useState();
    const [nik, setNik] = React.useState('');
    const [data, setdata] = React.useState(dataTemp);


    console.log('dataReduxSebelum', dataRedux);
    useEffect(() => {

    }, [dataUpdate])


    async function handleDidCetak() {
        await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/validatePasien`, {
            nik: props.match.params.noKtp,
            tglLahir: tglLahir
        }).then(response => {
            console.log(response.data)
            if (response.data.code == 200) {
                setdataUpdate(response.data.data[0])
                setModalShowCetak(true)
            } else {
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err)
        })
        // setdataUpdate(item)
    }

    function validationData() {
        if (dataRedux.results.code == 200) {
            setdataUpdate(dataRedux.results.data[0])
            setModalShowCetak(true)
        } else {
            alert('tanggal lahir salah, harap cek kembali')
        }
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
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '100%', borderRadius: 10 }}>
                <div style={{ backgroundColor: '#198754', padding: 50, borderRadius: 10, boxShadow: "5px 5px 5px #9E9E9E" }}>
                    <h1 className='pb-4 text-light' style={{ textAlign: 'center' }}><h4 style={{ fontWeight: 'bold' }}>Masukan Tanggal Lahir</h4></h1>
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
                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
                    <Button variant="primary" type="submit" style={{ width: '100%', marginTop: 15 }} onClick={(e) => handleDidCetak(e)}>
                        Submit
                    </Button>
                </div>
            </div>

        </Container>
    )
}