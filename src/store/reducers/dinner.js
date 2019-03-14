import * as _ from '../actions/actionTypes';

const initialState = {
    isLoading: true,
    error: null,
    dinnerMenu: null
}

export const dinner = (state=initialState, action) => {
    switch(action.type){
        case _.DINNER_LOADING:
            return {...state, isLoading:true};
        case _.GET_DINNER:
            return {...state, isLoading:false, dinnerMenu: action.payload};
        case _.DINNER_FAILED:
            return {...state, isLoading:false, error:action.payload};;
        default:
            return state;
    }
}
