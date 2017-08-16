import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './views/Main';
import store from './Store';


export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }

}