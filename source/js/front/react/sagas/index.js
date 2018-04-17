
import { fork } from 'redux-saga/effects';
import { authFlow } from './sagas';

export default function*() {
    yield fork(authFlow);
    // yield fork(fetchUserWatch);
    // // yield fork(fetchUserReposWatch);
    // yield fork(fetchFollowersWatch);
}
