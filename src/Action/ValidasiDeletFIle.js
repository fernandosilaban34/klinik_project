import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const VALIDASI_FILE = (file) => {
    return async dispatch => {
        dispatch({
            type: "VALIDASI_FILE",
            payload: file
        });

        dispatch({
            type: ON_HIDE_LOADER,
            payload: true
        });

        dispatch({
            type: ON_HIDE_LOADER,
            payload: false
        });
    }
}