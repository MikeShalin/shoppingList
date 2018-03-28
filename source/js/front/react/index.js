import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import ProductList from './ProductList';

import createStore from './store';

const store = createStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ProductList />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
