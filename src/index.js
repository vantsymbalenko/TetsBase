import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'reset-css';
import RouterConfig from './router/index';
import configureStore from './store/configurateStore';

let store = configureStore();
render(
    <Provider store = { store }>
        <Router>
            <RouterConfig/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

