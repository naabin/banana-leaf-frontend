import * as _ from '../actions/actionTypes'

const initialState = {
    isLoading: true,
    error: null,
    entrees: []
};

export const entrees = (state=initialState, action)=>{
    switch (action.type) {
        case _.ENTREES_LOADING:
            return {...state, isLoading: true};
        case _.GET_ENTREES:
            return {...state, isLoading: false, entrees: action.payload};
        case _.ENTREES_FAILED:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
};