import { fork } from 'redux-saga/effects';
import { Auth } from 'js/front/react/sagas/Auth';
import { Product } from 'js/front/react/sagas/Product';
import { Registration } from 'js/front/react/sagas/Registration';

export default function*() {
    yield fork(Auth);
    yield fork(Product);
    yield fork(Registration);
}
