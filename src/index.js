import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'reset-css';
import Routs from './router/index';
import configureStore from './store/configurateStore';

let store = configureStore();
render(
    <Provider store = { store }>
            <Routs/>
    </Provider>,
    document.getElementById('root')
);

