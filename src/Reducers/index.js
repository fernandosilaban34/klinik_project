import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import GetDataClaim from './GetDataClaim';
import ShowModal from './ShowModal';
import ValidasiDeleteFile from './ValidasiDeleteFile';
import UploadFile from './UploadFile';
import DeleteClaimFIle from './DeleteClaimFIle';



const reducers = combineReducers({
    routing: routerReducer,
    dataClaim: GetDataClaim,
    showModal: ShowModal,
    uploadFile: UploadFile,
    validasiFile: ValidasiDeleteFile,
    deteleClaimFile : DeleteClaimFIle
});

export default reducers;
