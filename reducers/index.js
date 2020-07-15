import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers} from 'redux';

import tarot from './tarot';
// import fortune from './fortune';
// import before from './before';
// import recommendation from './recommendation';

//(이전 상태, 액션) => 다음 상태로 만듬
const rootReducer = combineReducers({
    index : (state = {}, action) => {
        switch (action.type) {
            case HYDRATE :
                return {...state, ...action.payload}
            default :
                return state;
        }
    },
    tarot,
    // fortune,
    // before,
    // recommendation,
});

export default rootReducer;