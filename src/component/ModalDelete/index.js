import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalDelete(props) {
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
                <Button variant="danger">Hapus</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDelete