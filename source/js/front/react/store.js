/**
 * Created by mike on 24.03.18.
 */
import rootReducer from 'js/front/react/reducers/index';
import FormMiddleware from 'js/front/react/middlewares/FormMiddleware/';
import RegistrationMiddleware from 'js/front/react/middlewares/RegistrationMiddleware/';
import ProductListMiddleware from 'js/front/react/middlewares/ProductListMiddleware/';
import ProductAddMiddleware from 'js/front/react/middlewares/ProductAddMiddleware/';
import ProductDeleteMiddleware from 'js/front/react/middlewares/ProductDeleteMiddleware/';
import ProductDeleteSocketMiddleware from 'js/front/react/middlewares/ProductDeleteSocketMiddleware/';
import rootSaga from 'js/front/react/sagas/index.js';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                FormMiddleware,
                RegistrationMiddleware,
                ProductListMiddleware,
                ProductAddMiddleware,
                ProductDeleteMiddleware,
                ProductDeleteSocketMiddleware,
                sagaMiddleware
            ),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

