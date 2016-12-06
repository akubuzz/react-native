import React ,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyBeeoln_xP10FEQfDvqLTgrwXEmvmYdi6E',
            authDomain: 'manager-30cfc.firebaseapp.com',
            databaseURL: 'https://manager-30cfc.firebaseio.com',
            storageBucket: 'manager-30cfc.appspot.com',
            messagingSenderId: '484841672706'
        };
        firebase.initializeApp(config);
    }
    render(){
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                  <RouterComponent />
            </Provider>
        );
    }
}

export default App;