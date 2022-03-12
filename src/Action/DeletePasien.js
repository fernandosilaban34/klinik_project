import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const DELETE_PASIEN = (IDPasien) => {
    let responseErr = {
        ResponseCode: 'error',
        ResponseException: 'Maaf, Terjadi Kesalahan'
    }
    return async dispatch => {
        await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/deleteDataPasien`, {
            IDPasien: IDPasien
        }).then(response => {
            console.log(response.data);
            dispatch({
                type: "DELETE_PASIEN",
                payload: response.data
            });
    
            dispatch({
                type: ON_HIDE_LOADER,
                payload: true
            });
    
            dispatch({
                type: ON_HIDE_LOADER,
                payload: false
            });
        }).catch(err => {
            dispatch({
                type: "DELETE_PASIEN",
                payload: responseErr
            });
        })
    }
}