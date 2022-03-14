import React, { useState, useEffect } from 'react';
import * as moment from 'moment'
import { useDispatch, useSelector, connect } from 'react-redux';
import { Container, Row, Col, Card, InputGroup, Button, FormControl, Dropdown, Modal, Pagination } from 'react-bootstrap'
import '../assests/style.css'
import { LOAD_DATA_PASIEN } from '../Action';
import ModalUpdate from '../component/ModalUpdate';
import ModalDelete from '../component/ModalDelete';
import ModalCetak from '../component/ModalCetak';
import axios from 'axios';

export default function Dashboard() {
	const dispatch = useDispatch();
	const [modalShow, setModalShow] = React.useState(false);
	const [modalShowDelete, setModalShowDelete] = React.useState(false);
	const [modalShowCetak, setModalShowCetak] = React.useState(false);
	const [nik, setNik] = React.useState('');
	const dataRedux = useSelector((state) => state.dataPasien)
	const [dataReduxTemp, setDataReduxTemp] = React.useState(dataRedux);
	const [dataUpdate, setdataUpdate] = React.useState();
	const [dataFind, setdataFind] = React.useState();
	


	useEffect(() => {
		dispatch(LOAD_DATA_PASIEN());
	}, [dispatch])

	const dataPasien = !dataRedux.results.data ? [{}] : dataRedux.results.data

	async function handleGetDataPasien() {
		await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/getDataPasien`, {
			nik: nik
		}).then(response => {
			console.log(response.data.data, 'jejej');
			if (response.data.code == 200) {
				console.log('hayes');
				setdataFind(response.data.data)
			} else {
				console.log('haye');
				alert(response.data.message)
			}
		}).catch(err => {
			alert(err)
		})
		// setdataUpdate(item)
	}

	function handleDidUpdate(item) {
		setdataUpdate(item)
		setModalShow(true)
	}

	function handleChangeNik(e) {
		setNik(e.target.value)
	}

	function handleDidCetak(item) {
		setdataUpdate(item)
		setModalShowCetak(true)
	}

	function handleDidDelete(item) {
		setdataUpdate(item)
		setModalShowDelete(true)
	}

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
						placeholder="Cari Pasien Dengan NIK.."
						aria-label="Cari Pasien.."
						aria-describedby="btnGroupAddon"
						className="me-2 block-example border border-dark"
						value={nik}
						onChange={(e) => handleChangeNik(e)}
						style={{ backgroundColor: '#FFF', fontSize: 13 }}
					/>
				</InputGroup>
				<Button variant="primary" style={{ width: 80 }} onClick={handleGetDataPasien}>Cari</Button>
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
											Hasil
										</th>
										<th scope="col" className="border-0 text-center">
											Tanggal Penerimaan
										</th>
										<th scope="col" className="border-0 text-center">
											Jenis Pemeriksaan
										</th>
										<th scope="col" className="border-0 text-center">
											Tanggal Pemeriksaan
										</th>
										<th scope="col" className="border-0 text-center">
											Action
										</th>
									</tr>
								</thead>
								{nik == "" ?
									<tbody>
										{dataPasien.map((item, i) => {
											return [
												<tr key={i} style={{ fontFamily: 'inherit' }}>
													<td className='text-center' style={{ fontSize: 13 }}>{item.IDPasien}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.namaPasien}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.NIK}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{moment(item.tglLahir).format('DD-MM-YYYY')}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.hasilPemeriksaan}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{moment(item.tglPenerimaan).format('DD-MM-YYYY')}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.tipePemeriksaan}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{moment(item.tglPemeriksaan).format('DD-MM-YYYY')}</td>
													<td className='text-center' style={{ fontSize: 13 }}><Dropdown>
														<Dropdown.Toggle variant="success" id="dropdown-basic">
															...
														</Dropdown.Toggle>

														<Dropdown.Menu>
															<Dropdown.Item onClick={() => handleDidUpdate(item)} style={{ fontSize: 13 }}>Edit</Dropdown.Item>
															<Dropdown.Item onClick={() => handleDidDelete(item)} style={{ color: 'red', fontSize: 13 }}>Delete</Dropdown.Item>
															<Dropdown.Item onClick={() => handleDidCetak(item)} style={{ color: 'green', fontSize: 13 }}>Cetak</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown></td>
												</tr>
											]
										})}
									</tbody> : <tbody>
										{dataFind?.map((item, i) => {
											return [
												<tr key={i} style={{ fontFamily: 'inherit' }}>
													<td className='text-center' style={{ fontSize: 13 }}>{item.IDPasien}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.namaPasien}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.NIK}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{moment(item.tglLahir).format('DD-MM-YYYY')}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.hasilPemeriksaan}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{moment(item.tglPenerimaan).format('DD-MM-YYYY')}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{item.tipePemeriksaan}</td>
													<td className='text-center' style={{ fontSize: 13 }}>{moment(item.tglPemeriksaan).format('DD-MM-YYYY')}</td>
													<td className='text-center' style={{ fontSize: 13 }}><Dropdown>
														<Dropdown.Toggle variant="success" id="dropdown-basic">
															...
														</Dropdown.Toggle>

														<Dropdown.Menu>
															<Dropdown.Item onClick={() => handleDidUpdate(item)} style={{ fontSize: 13 }}>Edit</Dropdown.Item>
															<Dropdown.Item onClick={() => handleDidDelete(item)} style={{ color: 'red', fontSize: 13 }}>Delete</Dropdown.Item>
															<Dropdown.Item onClick={() => handleDidCetak(item)} style={{ color: 'green', fontSize: 13 }}>Cetak</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown></td>
												</tr>
											]
										})}
									</tbody>
								}
							</table>
							<Pagination>
								<Pagination.First />
								<Pagination.Prev />
								<Pagination.Item>{1}</Pagination.Item>
								<Pagination.Ellipsis />

								<Pagination.Item>{10}</Pagination.Item>
								<Pagination.Item>{11}</Pagination.Item>
								<Pagination.Item active>{12}</Pagination.Item>
								<Pagination.Item>{13}</Pagination.Item>
								<Pagination.Item disabled>{14}</Pagination.Item>

								<Pagination.Ellipsis />
								<Pagination.Item>{20}</Pagination.Item>
								<Pagination.Next />
								<Pagination.Last />
							</Pagination>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

