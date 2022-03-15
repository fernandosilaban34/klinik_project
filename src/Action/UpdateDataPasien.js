import axios from "axios";
import * as moment from 'moment';

export const UPDATE_DATA_PASIEN = (results) => {
    return async dispatch => {
        console.log(results, 'nich');
        const uri = await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/updateDataPasien`, {
            IDPasien: `${results.IDPasien}`,
            namaPasien: `${results.namaPasien}`,
            tglLahir: `${moment(results.tglLahir).format("YYYY-MM-DD")}`,
            jenisKelamin: `${results.jenisKelamin}`,
            NIK: `${results.NIK}`,
            hasilPemeriksaan :`${results.hasilPemeriksaan}`,
            nilaiNormal:`${results.nilaiNormal}`,
            kesimpulanEng :`${results.kesimpulanEng}`,
            kesimpulanIna:`${results.kesimpulanIna}`           
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