import  * as _ from '../actions/actionTypes'
import { isNull } from 'util';

const initialState = {
    isLoading: true,
    nextPage: isNull,
    previousPage: null,
    refreshing: false,
    error: null,
    images: []
};

export const images = (state=initialState, action) => {
    switch (action.type) {
        case _.IMAGES_REFRESHING:
            return {...state, refreshing:true}
        case _.IMAGES_LOADING:
            return {...state, isLoading: true,};
        case _.GET_IMAGES:
            return {...state, refreshing:false, isLoading:false, nextPage: action.payload.images.next, previousPage: action.payload.images.previous,
                images:action.payload.append ? state.images.concat(action.payload.images.results) : action.payload.images.results}
        case _.IMAGES_FAILED:
            return {...state, isLoading:false, error: action.payload};
        default:
            return state;
    }
};