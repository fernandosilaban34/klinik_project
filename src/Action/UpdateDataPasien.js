import axios from "axios";
import * as moment from 'moment';

export const UPDATE_DATA_PASIEN = (results) => {
    return async dispatch => {
        console.log(results, 'nich');
        const uri = await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/updateDataPasien`, {
            IDPasien: `${results.IDPasien}`,
            tglPenerimaan: `${moment(results.tglPenerimaan).format("YYYY-MM-DD")}`,
            waktuPenerimaan: `${results.waktuPenerimaan}`,
            tglPemeriksaan: `${moment(results.tglPemeriksaan).format("YYYY-MM-DD")}`,
            pengirim: `${results.pengirim}`,
            namaPasien: `${results.namaPasien}`,
            NIK: `${results.NIK}`,
            tglLahir: `${moment(results.tglLahir).format("YYYY-MM-DD")}`,
            jenisSpecimen: `${results.jenisSpecimen}`,
            pemeriksaan: `${results.pemeriksaan}`
        } )
        

        console.log(uri, 'uri');
        dispatch({
            type: "UPDATE_DATA_PASIEN",
            payload: uri.data
        });

    //     dispatch({
    //         type: ON_HIDE_LOADER,
    //         payload: true
    //     });

    //     dispatch({
    //         type: ON_HIDE_LOADER,
    //         payload: false
    //     });
    }
}