import * as _ from '../actions/actionTypes'


const initialState = {
    isLoading: false,
    message: null,
    error: null
}

export const enquiry = (state=initialState, action) => {
    switch(action.type) {
        case _.ENQUIRY_LOADING:
            return {...state, isLoading:true}
        case _.GET_ENQUIRY_RESPONSE:
            return {...state, isLoading:false, message: action.payload}
        case _.ENQUIRY_FAILED:
            return {...state, isLoading:false, error: action.payload}
        default:
            return state
    }
}