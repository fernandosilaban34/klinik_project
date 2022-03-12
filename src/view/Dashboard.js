import React, { useState, useEffect } from 'react';
import * as moment from 'moment'
import { useDispatch, useSelector, connect } from 'react-redux';
import { Container, Row, Col, Card, InputGroup, Button, FormControl, Dropdown, Modal } from 'react-bootstrap'
import '../assests/style.css'
import { LOAD_DATA_PASIEN } from '../Action';
import ModalUpdate from '../component/ModalUpdate';
import ModalDelete from '../component/ModalDelete';
import ModalCetak from '../component/ModalCetak';

export default function Dashboard() {
	const dispatch = useDispatch();
	const [modalShow, setModalShow] = React.useState(false);
	const [modalShowDelete, setModalShowDelete] = React.useState(false);
	const [modalShowCetak, setModalShowCetak] = React.useState(false);
	const dataRedux = useSelector((state) => state.dataPasien)

	const [dataUpdate, setdataUpdate] = React.useState();


	useEffect(() => {
		dispatch(LOAD_DATA_PASIEN());
	}, [dispatch])



	function handleDidUpdate(item) {
		setdataUpdate(item)
		setModalShow(true)
	}

	function handleDidCetak(item) {
		setdataUpdate(item)
		setModalShowCetak(true)
	}

	function handleDidDelete(item) {
		setdataUpdate(item)
		setModalShowDelete(true)
	}

	const dataPasien = !dataRedux.results.data ? [{}] : dataRedux.results.data
	console.log('data nihs', dataPasien);
	return (
		<Container fluid className="main-content-container px-4" style={{ fontFamily: 'inherit' }}>
			{modalShow == true ? <ModalUpdate
				show={modalShow}
				onHide={() => setModalShow(false)}
				data={dataUpdate}
			/> : null}
			{modalShowDelete == true ? <ModalDelete
				data={dataUpdate}
				show={modalShowDelete}
				onHide={() => setModalShowDelete(false)}
			/> : null}
			{modalShowCetak == true ? <ModalCetak
				show={modalShowCetak}
				dataPasien={dataUpdate}
				onHide={() => setModalShowCetak(false)}
			/> : null}
			<Row noGutters className="page-header py-4">
				<Card.Text sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
				<InputGroup className='shadow-none bg-light rounded' style={{ width: '20%', marginLeft: 20 }}>
					<FormControl
						type="text"
						placeholder="Cari Pasien.."
						aria-label="Cari Pasien.."
						aria-describedby="btnGroupAddon"
						className="me-2 block-example border border-dark"
						style={{ backgroundColor: '#FFF' }}
					/>
				</InputGroup>
				<Button variant="primary" style={{width: 80}}>Cari</Button>
			</Row>
			<Row>
				<Col>
					<Card small className="mb-4">
						{/* <Card.Header className="border-bottom">
								<h3 className="m-0">Table Pasien</h3>
							</Card.Header> */}
						<Card.Body className="p-0 pb-3">
							<table className="table mb-0">
								<thead>
									<tr style={{ backgroundColor: '#005C4B', color: 'white' }} >
										<th scope="col" className="border-0 text-center">
											ID
										</th>
										<th scope="col" className="border-0 text-center">
											Nama Pasien
										</th>
										<th scope="col" className="border-0 text-center">
											NIK
										</th>
										<th scope="col" className="border-0 text-center">
											Tanggal Lahir
										</th>
										<th scope="col" className="border-0 text-center">
											Pengirim
										</th>
										<th scope="col" className="border-0 text-center">
											Tanggal Penerimaan
										</th>
										<th scope="col" className="border-0 text-center">
											Waktu Penerimaan
										</th>
										<th scope="col" className="border-0 text-center">
											Tanggal Pemeriksaan
										</th>
										<th scope="col" className="border-0 text-center">
											Action
										</th>
									</tr>
								</thead>
								<tbody>
									{dataPasien.map((item, i) => {
										return [
											<tr key={i} style={{ fontFamily: 'inherit' }}>
												<td className='text-center'>{item.IDPasien}</td>
												<td className='text-center'>{item.namaPasien}</td>
												<td className='text-center'>{item.NIK}</td>
												<td className='text-center'>{moment(item.tglLahir).format('DD-MM-YYYY')}</td>
												<td className='text-center'>{item.pengirim}</td>
												<td className='text-center'>{moment(item.tglPenerimaan).format('DD-MM-YYYY')}</td>
												<td className='text-center'>{item.waktuPenerimaan}</td>
												<td className='text-center'>{moment(item.tglPemeriksaan).format('DD-MM-YYYY')}</td>
												<td className='text-center'><Dropdown>
													<Dropdown.Toggle variant="success" id="dropdown-basic">
														...
													</Dropdown.Toggle>

													<Dropdown.Menu>
														<Dropdown.Item onClick={() => handleDidUpdate(item)}>Edit</Dropdown.Item>
														<Dropdown.Item onClick={() => handleDidDelete(item)} style={{ color: 'red' }}>Delete</Dropdown.Item>
														<Dropdown.Item onClick={() => handleDidCetak(item)} style={{ color: 'green' }}>Cetak</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown></td>
											</tr>
										]
									})}
								</tbody>
							</table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

