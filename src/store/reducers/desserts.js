import * as _ from '../actions/actionTypes'

const initialState = {
  isLoading: true,
  error: null,
  desserts: []
};

export const desserts = (state=initialState, action) => {
    switch (action.type) {
        case _.DESSERTS_LOADING:
            return {...state, isLoading: true};
        case _.GET_DESSERTS:
            return {...state, isLoading:false, desserts: action.payload};
        case _.DESSERTS_FAILED:
            return {...state, isLoading:false, error: action.payload};
        default:
            return state;
    }
};