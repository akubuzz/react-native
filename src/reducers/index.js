import {combineReducers} from 'redux';
import Authreducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
   auth:Authreducer,
   employeeForm:EmployeeFormReducer,
   employees:EmployeeReducer
});