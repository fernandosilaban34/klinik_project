import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DataPasien from './DataPasien';
import UpdateDataPasien from './UpdateDataPasien';
import InputDataPasien from './InputDataPasien';



const reducers = combineReducers({
    routing: routerReducer,
    dataPasien: DataPasien,
    responseUpdate: UpdateDataPasien,
    resposeInsert: InputDataPasien
});

export default reducers;
