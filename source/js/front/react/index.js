import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import ProductList from './components/ProductList';

import createStore from './store';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
