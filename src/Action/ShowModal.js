import axios from "axios";
import { ON_HIDE_LOADER } from "../Constants/ActionTypes";


export const SHOW_MODAL = (modal) => {
    return async dispatch => {
        dispatch({
            type: "SHOW_MODAL",
            payload: modal
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