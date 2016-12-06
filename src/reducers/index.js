import {combineReducers} from 'redux';
import Authreducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
   auth:Authreducer,
   employeeForm:EmployeeFormReducer
});