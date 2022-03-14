import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector, connect } from 'react-redux';
import { DELETE_PASIEN, LOAD_DATA_PASIEN } from '../../Action';

function ModalDelete(props) {
    const dispatch = useDispatch();
    const ResponseDelete = useSelector((state) => state.responseDelete)
    const dataRedux = useSelector((state) => state.responseUpdate)

    useEffect(() => {
    }, [dataRedux])

    function AlertDelete() {
        if (dataRedux.results.code == 200) {
            alert(dataRedux.results.message)
            window.location.reload();
        }
    }

    async function HandleDeletePasien() {
        await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/deleteDataPasien`, {
            IDPasien : props.data.IDPasien
        }).then(response => {
            if (response.data.code == 200) {
                alert(response.data.message)
                dispatch(LOAD_DATA_PASIEN())
            } else {
                alert(response.data.message)
            }
        }).catch(err => {
            alert(err)
        })
        // setdataUpdate(item)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p>Apakah anda yakin ingin menghapus data ?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="danger" onClick={HandleDeletePasien}>Hapus</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDelete