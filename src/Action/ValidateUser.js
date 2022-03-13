import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const VALIDATE_PASIEN = (nik, tglLahir) => {
    let responseErr = {
        ResponseCode: 'error',
        ResponseException: 'Maaf, Terjadi Kesalahan'
    }
    return async dispatch => {
        await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/validatePasien`, {
            nik: nik,
            tglLahir: tglLahir
        }).then(response => {
            if (response.data.code == 200) {
                dispatch({
                    type: "VALIDATE_PASIEN",
                    payload: response.data
                });
            }else{
                dispatch({
                    type: "VALIDATE_PASIEN",
                    payload: response.data.data
                });
            }

            dispatch({
                type: ON_HIDE_LOADER,
                payload: true
            });

            dispatch({
                type: ON_HIDE_LOADER,
                payload: false
            });
        })
    }
}