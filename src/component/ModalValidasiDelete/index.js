import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_MODAL, VALIDASI_FILE } from '../../Action';

function ModalValidasiDelete(props) {
    const dispatch = useDispatch();
    const dataModal = useSelector((state) => state.showModal)
    const ValidasiDeleteFile = useSelector((state) => state.validasiFile)
    const [state, setState] = React.useState()
    const handleModalFalse = () => {
        dispatch(SHOW_MODAL(false))
        dispatch(VALIDASI_FILE(false))
    }

    useEffect(() => {
    }, [state, dataModal, ValidasiDeleteFile])
    
    const handleModalHapus = () => {
        dispatch(SHOW_MODAL(false))
        dispatch(VALIDASI_FILE(true))
        setState(true)
    }

    return (
        <Modal
            show={dataModal.results}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Konfirmasi Hapus Data
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Apakah Anda Yakin ingin menghapus file ? </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleModalHapus}>Hapus</Button>
                <Button onClick={handleModalFalse} >Tidak</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalValidasiDelete