import {combineReducers} from 'redux';
// import {search,searchQuery} from './search/search';
import Form from './Form/';
import {Products} from './ProductList/ProductListReducers.js';
import {AuthLogin,AuthPassword,LogIn} from './Auth/AuthReducers';
// import page from './seriesPageInfo/';

export default combineReducers({
    Form,
    Products,
    AuthLogin,
    AuthPassword,
    LogIn
});
