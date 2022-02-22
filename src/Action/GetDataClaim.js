import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const GET_DATA_CLAIM = (noPolis) => {
    let responseErr = {
        ResponseCode: 'error',
        ResponseException: 'Maaf, Terjadi Kesalahan'
    }
    console.log(noPolis, 'polis');
    return async dispatch => {
        await axios.post(`http://10.28.2.101:5556/inqueryclaim`, {
            noPolis: noPolis
        }).then(response => {
            dispatch({
                type: "GET_DATA_CLAIM",
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
                type: "GET_DATA_CLAIM",
                payload: responseErr
            });
        })
    }
}