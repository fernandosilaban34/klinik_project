import React, { useEffect } from 'react';
import { Button, Container, Form, FormControl, InputGroup, Modal, CloseButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GET_DATA_CLAIM, SHOW_MODAL } from '../Action';
import '../assests/style.css';
import AccordionsDataClaim from '../component/AccordionsDataClaim';
import AccordionsUploadFile from '../component/AccordionsUploadFile';
import AccordionsBerkasClaim from '../component/AccrodionsBerkasClaim';
import ModalValidasiDelete from '../component/ModalValidasiDelete';

export default function Dashboard() {
	const dispatch = useDispatch();
	const dataRedux = useSelector((state) => state.dataClaim)
	const dataModal = useSelector((state) => state.showModal)
	const ValidasiDeleteFile = useSelector((state) => state.validasiFile)
	const [noPolis, setNoPolis] = React.useState("");
	const [show, setShow] = React.useState(false);
	const [showAlert, setShowAlert] = React.useState(false);
	const [showModal, setShowModal] = React.useState(false);
	const responseAPI = dataRedux.results.ResponseException

	const handleInputChange = e => {
		let noPolisNew = noPolis
		console.log(noPolisNew, 'noPolisNew');
		noPolisNew = e.target.value
		setNoPolis(noPolisNew);
	}

	const handleClose = () => setShowAlert(false);

	const handleClick = () => {
		dispatch(GET_DATA_CLAIM(noPolis))
	}

	useEffect(() => {
		console.log(dataRedux.results, 'dataModal');
		if (dataRedux.results.ResponseCode) {
			handleShow()
		}
		if (dataModal.results == true) {
			handleModalFile()
		}
	}, [dataRedux, dataModal])


	const handleModalFile = () => {
		setShowModal(true)
	}

	const handleShow = () => {
		if (dataRedux.results.ResponseCode == '00') {
			setShow(true);
			console.log('ada');
		} else {
			console.log('tidak');
			setShowAlert(true);
			setShow(false);
		}
	}


	



	return (
		<Container fluid className="main-content-container px-4" style={{ fontFamily: 'inherit' }}>
			<Form.Label htmlFor="basic-url" style={{ fontSize: 15 }}>No. Kepersertaan</Form.Label>
			<InputGroup className="mb-3">
				<FormControl
					placeholder="Masukan no polis"
					aria-label="Masukan no polis"
					aria-describedby="basic-addon2"
					name='noPolis'
					value={noPolis}
					style={{ fontSize: 15 }}
					onChange={handleInputChange}
				/>
				<Button variant="outline-secondary"
					id="button-addon2"
					style={styles.button}
					onClick={handleClick}
				>
					Tampilkan Data
				</Button>
			</InputGroup>
			{show ? <AccordionsDataClaim
				title='Data Claim Confirmation'
			/> : <></>}
			{/* {show ? <AccordionsUploadFile
				title='Form Upload Berkas'
			/> : <></>} */}
			{show ? <AccordionsBerkasClaim
				title='Berkas Claim'
			/> : <></>}
			{showAlert ?
				<Modal show={showAlert}>
					<div className="alert alert-danger" role="alert">
						{responseAPI == [] ? 'Maaf Terjadi Kesalahan' : responseAPI }
						<CloseButton onClick={handleClose} className="justify-content-end" />
					</div>
				</Modal> : <></>}
			{showModal ? <ModalValidasiDelete show={showModal} onHide={dataModal.results}/> : <></>}
		</Container>
	)
}


const styles = {
	button: {
		backgroundColor: '#FF8F15',
		color: 'white'
	}
}

