import * as _ from '../actions/actionTypes';

const initialState = {
    isLoading: true,
    message: null,
    error: null
}

export const subs = (state=initialState, action) => {
    switch(action.type){
        case _.SUBSCRIBE_LOADING:
            return {...state, isLoading: true}
        case _.GET_SUBSCRIBE_RESONSE:
            return {...state, isLoading:false, message:action.payload}
        case _.SUBSCRIBE_FAILED:
            return {...state, isLoading:false, error: action.payload}
        default:
            return state
    }
}
