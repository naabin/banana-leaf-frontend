import * as _ from '../actions/actionTypes';

const initialState = {
    isLoading: true,
    error: null,
    boxMeals: [],
}

export const boxMeal = (state=initialState, action) => {
    switch(action.type){
        case _.BOX_MEAL_LOADING:
            return {...state, isLoading:true}
        case _.GET_BOX_MEAL:
            return {...state, isLoading:false, error:null, boxMeals:action.payload}
        case _.BOX_MEAL_FAILED:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
}