import {all, fork} from 'redux-saga/effects';

import beforeSaga from "./before";
import fortuneSaga from "./fortune";

export default function*  rootSaga() {
    yield all([
        fork(beforeSaga),
        fork(fortuneSaga),
    ])
}