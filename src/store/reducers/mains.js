import  * as _ from '../actions/actionTypes'

const initialState = {
    isLoading: true,
    error: null,
    mains: []
};

export const mains =(state=initialState, action) => {
    switch (action.type) {
        case _.MAINS_LOADING:
            return{...state, isLoading: true};
        case _.GET_MAINS:
            return{...state, isLoading:false, mains: action.payload};
        case _.MAINS_FAILED:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
};