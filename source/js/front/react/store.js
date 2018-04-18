/**
 * Created by mike on 24.03.18.
 */
import rootReducer from 'js/front/react/reducers/index';
// import ProductDeleteSocketMiddleware from 'js/front/react/middlewares/ProductDeleteSocketMiddleware/';
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
                // ProductDeleteSocketMiddleware,
                sagaMiddleware
            )
            // ,
            // window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

