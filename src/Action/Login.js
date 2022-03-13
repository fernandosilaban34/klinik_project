import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const LOGGIN_IN = (username, password) => {
    let responseErr = {
        ResponseCode: 'error',
        ResponseException: 'Maaf, Terjadi Kesalahan'
    }
    return async dispatch => {
        await axios.post(`http://8.215.37.21:5021/globaldoctor/user/login`, {
            username, 
            password
        }).then(response => {
            console.log(response.data);
            dispatch({
                type: "LOGGIN_IN",
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
                type: "LOGGIN_IN",
                payload: responseErr
            });
        })
    }
}