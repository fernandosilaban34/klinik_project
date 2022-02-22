import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const DELETE_CLAIM_FILE = (idFileClaim, fileName, fileUrl) => {
    let responseErr = {
        ResponseCode: 'error',
        ResponseException: 'Maaf, Terjadi Kesalahan'
    }
    return async dispatch => {
        await axios.post(`http://10.28.2.101:5556/deletefileclaim`, {
            idFileClaim: idFileClaim,
            fileName: fileName,
            fileURL: fileUrl
        }).then(response => {
            dispatch({
                type: "DELETE_CLAIM_FILE",
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
                type: "DELETE_CLAIM_FILE",
                payload: responseErr
            });
        })
    }
}