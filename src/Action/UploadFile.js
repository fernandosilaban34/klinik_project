import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const UPLOAD_FILE = (noClaim, fileClaim, idClaimDetail, namaDokumen, idSequence, type) => {

    // const formData = new FormData();
    // formData.append({
    //     "noClaim" : noClaim, 
    //     "fileClaim": fileClaim,
    //     "idClaimDetail": idClaimDetail
    // });

    var formData = new FormData();
    let idSequenceNew = idSequence + 1

    let typeNew = type.substring(type.indexOf('/') + 1);
    let namaDokumenNew = namaDokumen.replace(/ /g,"");
    console.log(fileClaim, 'fileClaim');
    
    var newFileName = namaDokumenNew + "_" + idSequenceNew + '.' + typeNew;

    console.log('newFileName :',newFileName);
    
    formData.append("noClaim", noClaim);
    formData.append("fileClaim", fileClaim, newFileName);
    formData.append("idClaimDetail", idClaimDetail);

    console.log(formData, 'fileClaim');
    console.log(formData);
    let responseErr = {
        ResponseCode: 'error',
        ResponseException: 'Maaf, Terjadi Kesalahan'
    }
    return async dispatch => {
        await axios.post(`http://10.28.2.101:5556/uploadfileclaim`, 
            formData
        , {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            dispatch({
                type: "UPLOAD_FILE",
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
                type: "UPLOAD_FILE",
                payload: responseErr
            });
        })
    }
}