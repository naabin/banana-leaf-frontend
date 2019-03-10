import * as _ from '../actions/actionTypes';
const initialState = {
    showModal: false,
    isLoading: false,
    error: null,
    message: null,
};

export const reservation = (state=initialState, action) => {
    switch (action.type) {
        case _.SHOW_MODAL:
            return {...state, showModal: true};
        case _.HIDE_MODAL:
            return {...state, showModal: false};
        case _.POST_BOOKING_LOADING:
            return {...state, isLoading: true};
        case _.GET_POST_RESPONSE:
            return {...state, isLoading: false, message:action.payload };
        case _.POST_FAILED:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
};
