import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CloseButton } from 'react-bootstrap'
import { GET_DATA_CLAIM, SHOW_MODAL, VALIDASI_FILE } from '../../Action';
import { DELETE_CLAIM_FILE } from '../../Action/DeleteClaimFile';
import ModalValidasiDelete from '../ModalValidasiDelete';

function CardFile(props) {
  var namaFile = props.namFile;
  var url = props.url
  let id = props.id;
  const dispatch = useDispatch();

  const ValidasiDeleteFile = useSelector((state) => state.validasiFile)
  const dataModal = useSelector((state) => state.showModal)

  const dataRedux = useSelector((state) => state.dataClaim)
  const namaFileNew = `${namaFile.substring(0, 10)}`
  const [show, setShow] = React.useState(false)
  const [Validasi, setValidasi] = React.useState(false)

  const handleOpenFile = () => {
    window.open(url);
  }

  useEffect(() => {}, [dispatch, dataModal])


  // const handleDeletFile = () => {
  //   setTimeout(function() {
  //     if (dataModal.results == false) {
  //       if (ValidasiDeleteFile.results == true) {
  //         setShow(true)
  //       }
  //     }
  //   }, 1000);
  // }

  const handleShow = () => {
    console.log('ValidasiDeleteFile.results', ValidasiDeleteFile)
    dispatch(SHOW_MODAL(true))
    if (ValidasiDeleteFile.results == true) {
      dispatch(DELETE_CLAIM_FILE(id, namaFile, url))
      setShow(true)
    }
    // dispatch(VALIDASI_FILE(true))
    
    // 
  }

  return (
    <div hidden={show}>
      <span className="d-inline-block" tabindex="0" data-toggle="tooltip" title={props.namFile} >
        <button className="btn" type="button" style={{ borderRadius: 5, color: "#fff", borderColor: 'red', color: 'black', fontSize: 13 }} onClick={handleOpenFile}>{namaFileNew} {
          namaFile.length > 10 ? '...' : ''
        }
        </button>
        <CloseButton aria-label="Hide" style={{ fontSize: 10, marginLeft: 10 }} onClick={handleShow} />
      </span>
    </div>
  )
}

export default CardFile