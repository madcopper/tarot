import {all, fork} from 'redux-saga/effects';

import beforeSaga from "./before";
import fortuneSaga from "./fortune";
import userSaga from './user';

export default function*  rootSaga() {
    yield all([
        fork(userSaga),
    ])
}