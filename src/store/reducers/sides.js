import * as _ from '../actions/actionTypes';

const initialState = {
    isLoading: true,
    error: null,
    sides: []
};

export const sides = (state=initialState, action) => {
    switch (action.type) {
        case _.SIDES_LOADING:
            return {...state, isLoading: true};
        case _.GET_SIDES:
            return {...state, isLoading: false, sides: action.payload};
        case _.SIDES_FAILED:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
};