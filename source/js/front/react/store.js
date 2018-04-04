/**
 * Created by mike on 24.03.18.
 */
import rootReducer from './reducers/index';
import FormMiddleware from './middlewares/FormMiddleware/';
import AuthMiddleware from './middlewares/AuthMiddleware/';
import {createStore, applyMiddleware, compose} from 'redux';


export default initialState =>
    createStore(rootReducer,
        initialState,
        compose(
            applyMiddleware(
                FormMiddleware,
                AuthMiddleware
            ),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );
