import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DataPasien from './DataPasien';
import UpdateDataPasien from './UpdateDataPasien';
import InputDataPasien from './InputDataPasien';
import DeletePasien from './DeletePasien';



const reducers = combineReducers({
    routing: routerReducer,
    dataPasien: DataPasien,
    responseUpdate: UpdateDataPasien,
    resposeInsert: InputDataPasien,
    responseDelete: DeletePasien
});

export default reducers;
