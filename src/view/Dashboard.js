import React, { useState, useEffect } from 'react';
import * as moment from 'moment'
import { useDispatch, useSelector, connect } from 'react-redux';
import { Container, Row, Col, Card, InputGroup, Button, FormControl, Dropdown, Modal, Pagination } from 'react-bootstrap'
import '../assests/style.css'
import { LOAD_DATA_PASIEN } from '../Action';
import { useHistory } from "react-router-dom";
import ModalUpdate from '../component/ModalUpdate';
import ModalDelete from '../component/ModalDelete';
import ModalCetak from '../component/ModalCetak';
import ModalCetakNonKop from '../component/ModalCetakNonKop';
import axios from 'axios';
import PaginatedItems from '../component/Pagination';

export default function Dashboard() {
	let history = useHistory();
	const dispatch = useDispatch();
	const [modalShow, setModalShow] = React.useState(false);
	const [modalShowDelete, setModalShowDelete] = React.useState(false);
	const [modalShowCetak, setModalShowCetak] = React.useState(false);
	const [modalShowCetakNonKop, setModalShowCetakNonKop] = React.useState(false);
	const [nik, setNik] = React.useState('');
	const dataRedux = useSelector((state) => state.dataPasien)
	const [dataReduxTemp, setDataReduxTemp] = React.useState(dataRedux);
	const [dataUpdate, setdataUpdate] = React.useState();
	const [datapasien, setDatapasien] = React.useState([]);
	const [dataFind, setdataFind] = React.useState();

	const [currentPage, setCurrentPage] = React.useState(1);
	const [postPerPage, setPostPerPage] = React.useState(10);


	useEffect(() => {
		dispatch(LOAD_DATA_PASIEN());
		if (localStorage.getItem('user') == null || localStorage.getItem('user') == '') {
			history.push('/login')
		}
	}, [dispatch])

	useEffect(() => {
		setDatapasien(dataRedux.results.data);
	}, [dataRedux])

	async function handleGetDataPasien() {
		await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/getDataPasien`, {
			nik: nik
		}).then(response => {
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
		console.log(nik);
		setTimeout(() => {
			const hasil = [dataRedux.results.data.filter(e => e.NIK?.indexOf(nik) !== -1)]

			console.log(hasil);
			setDatapasien(hasil[0])
		}, 2000);
	}

	function handleDidCetak(item) {
		setdataUpdate(item)
		setModalShowCetak(true)
	}
	function handleDidCetakNonKop(item) {
		setdataUpdate(item)
		setModalShowCetakNonKop(true)
	}

	function handleDidDelete(item) {
		setdataUpdate(item)
		setModalShowDelete(true)
	}

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPost = datapasien?.slice(indexOfFirstPost, indexOfLastPost)

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
			{modalShowCetakNonKop == true ? <ModalCetakNonKop
				show={modalShowCetakNonKop}
				dataPasien={dataUpdate}
				onHide={() => setModalShowCetakNonKop(false)}
			/> : null}
			<Row noGutters className="page-header py-4">
				<Card.Text sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
				<InputGroup className='shadow-none bg-light rounded' style={{ width: '20%', marginLeft: 20 }}>
					<FormControl
						type="number"
						placeholder="Cari Pasien Dengan NIK.."
						aria-label="Cari Pasien.."
						aria-describedby="btnGroupAddon"
						className="me-2 block-example border border-dark"
						value={nik}
						onChange={(e) => handleChangeNik(e)}
						onInput={(e) => handleChangeNik(e)}
						style={{ backgroundColor: '#FFF', fontSize: 13 }}
					/>
				</InputGroup>
				{/* <Button variant="primary" style={{ width: 80 }} onClick={handleGetDataPasien}>Cari</Button> */}
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
								<tbody>
									{currentPost?.map((item, i) => {
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
														<Dropdown.Item onClick={() => handleDidCetakNonKop(item)} style={{ color: 'blue', fontSize: 13 }}>CetakNonKop</Dropdown.Item>
													</Dropdown.Menu>
												</Dropdown></td>
											</tr>
										]
									})}
								</tbody>
							</table>
							<div style={{display:'flex', justifyContent:'flex-end', marginTop: 20}}>
								<PaginatedItems postPerPage={postPerPage} totalPost={datapasien?.length} paginate={paginate} />
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

