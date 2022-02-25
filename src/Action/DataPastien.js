import axios from "axios";

export const LOAD_DATA_PASIEN = () => {
    return async dispatch => {
        const uri = await axios.get(`http://8.215.37.21:5021/globaldoctor/pasien/getAllDataPasien`  )
        console.log(uri.data, "Data pasien");

        dispatch({
            type: "LOAD_DATA_PASIEN",
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