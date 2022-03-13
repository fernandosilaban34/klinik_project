import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DataPasien from './DataPasien';
import UpdateDataPasien from './UpdateDataPasien';
import InputDataPasien from './InputDataPasien';
import DeletePasien from './DeletePasien';
import ValidateUser from './ValidateUser';
import Loggin from './Loggin';



const reducers = combineReducers({
    routing: routerReducer,
    dataPasien: DataPasien,
    responseUpdate: UpdateDataPasien,
    resposeInsert: InputDataPasien,
    responseDelete: DeletePasien,
    validateUser: ValidateUser,
    login: Loggin
});

export default reducers;
