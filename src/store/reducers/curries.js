import * as _ from '../actions/actionTypes';

const initialState = {
    error: null,
    isLoading: false,
    curries: []
}

export const curries = (state=initialState, action ) => {
    switch(action.type){
        case _.CURRIES_LOADING:
            return {...state, isLoading: true};
        case _.GET_CURRIES:
            return {...state, isLoading: false, curries: action.payload}
        case _.CURRIES_FAILED:
            return {...state, isLoading: false, error: action.payload};
        default: 
            return state;
    }
}