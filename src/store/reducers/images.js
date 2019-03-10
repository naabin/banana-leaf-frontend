import  * as _ from '../actions/actionTypes'

const initialState = {
    isLoading: true,
    error: null,
    images: []
};

export const images = (state=initialState, action) => {
    switch (action.type) {
        case _.IMAGES_LOADING:
            return {...state, isLoading: true};
        case _.GET_IMAGES:
            return {...state, isLoading:false, images:action.payload};
        case _.IMAGES_FAILED:
            return {...state, isLoading:false, error: action.payload};
        default:
            return state;
    }
};