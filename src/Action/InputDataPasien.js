import axios from "axios";

export const INPUT_DATA_PASIEN = (results) => {
    return async dispatch => {
        const uri = await axios.post(`http://8.215.37.21:5021/globaldoctor/pasien/addDataPasien`, {
            IDPasien: `${results.IDPasien}`,
            waktuPengambilanSampel: `${results.waktuPengambilanSampel}`,
            waktuPemeriksaan: `${results.waktuPemeriksaan}`,
            tglPemeriksaan: `${results.tglPemeriksaan}`,
            namaPasien: `${results.namaPasien}`,
            NIK: `${results.NIK}`,
            tglLahir: `${results.tglLahir}`,
            jenisKelamin: `${results.jenisKelamin}`,
            tipePemeriksaan: `${results.tipePemeriksaan}`,
            hasilPemeriksaan: `${results.hasilPemeriksaan}`,
            nilaiNormal: `${results.nilaiNormal}`,
            kesimpulanEng: `${results.kesimpulanEng}`,
            kesimpulanIna: `${results.kesimpulanIna}`
        })


        console.log(uri);
        dispatch({
            type: "INPUT_DATA_PASIEN",
            payload: uri.message
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