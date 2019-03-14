import * as _ from '../actions/actionTypes'

const initialState = {
    isLoading: true,
    error : null,
    lunchMenu: null
}

export const lunch = (state=initialState, action) => {
    switch(action.type){
        case _.LUNCH_LOADING:
            return {...state, isLoading: true};
        case _.GET_LUNCH:
            return {...state, isLoading:false, lunchMenu: action.payload};
        case _.LUCNH_FAILED:
            return {...state, isLoading:false, error: action.payload};
        default:
            return state;
    }
}