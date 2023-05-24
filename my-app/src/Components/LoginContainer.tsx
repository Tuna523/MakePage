import React, {Component} from 'react';
import Store from '../Store/store';
import Login from './Login';

const LoginContainer = () => {
    <Store.Consumer>
        {store => (
            <Login onLoginFunc={store.onLogin}/>)}
    </Store.Consumer>
}

export default LoginContainer;