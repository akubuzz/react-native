import React , {Component} from 'react';
import {Scene,Router,Actions} from'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';

class RouterComponent extends Component{
    render(){
        return (
            <Router sceneStyle={{ paddingTop:65 }}>
                <Scene key="auth">
                        <Scene
                            key="login"
                            component={LoginForm}
                            title="Please Login"
                        />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="+"
                        onRight={()=>Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                </Scene>
            </Router>

        );
    }
}

export default RouterComponent;