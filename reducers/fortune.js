
export const initialState =  {

}

//(이전 상태, 액션) => 다음 상태로 만듬
const reducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_FORTUNE_TAROT_HISTORY':
            return {
                ...state,
                name : action.data,
            }
        default :
            return state;
    }
}

export default reducer;