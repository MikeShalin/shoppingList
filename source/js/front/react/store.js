/**
 * Created by mike on 24.03.18.
 */
import rootReducer from './reducers/index';
import FormMiddleware from './middlewares/FormMiddleware/';
import AuthMiddleware from './middlewares/AuthMiddleware/';
import AuthExitMiddleware from './middlewares/AuthExitMiddleware/';
import RegistrationMiddleware from './middlewares/RegistrationMiddleware/';
import ProductListMiddleware from './middlewares/ProductListMiddleware/';
import ProductAddMiddleware from './middlewares/ProductAddMiddleware/';
import ProductDeleteMiddleware from './middlewares/ProductDeleteMiddleware/';
import ProductDeleteSocketMiddleware from './middlewares/ProductDeleteSocketMiddleware/';
import {createStore, applyMiddleware, compose} from 'redux';

export default initialState =>
    createStore(rootReducer,
        initialState,
        compose(
            applyMiddleware(
                FormMiddleware,
                AuthMiddleware,
                RegistrationMiddleware,
                ProductListMiddleware,
                AuthExitMiddleware,
                ProductAddMiddleware,
                ProductDeleteMiddleware,
                ProductDeleteSocketMiddleware
            ),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
