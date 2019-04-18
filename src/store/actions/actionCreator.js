import * as _ from './actionTypes';
import { basUrl } from '../../shared/baseUrl'

export const imagesLoading = () => {
    return {
        type: _.IMAGES_LOADING
    }
};
export const getImages = (images, append) => {
    return {
        type: _.GET_IMAGES,
        payload: {images, append}
    }
};
export const imageFailed = (error) => {
    return {
        type: _.IMAGES_FAILED,
        payload: error
    }
};
export const imageRefreshing = () => {
    return {
        type: _.IMAGES_REFRESHING,
    }

}

export const fetchImages = (next, append) => dispatch => {
    if(!append){
        dispatch(imagesLoading());
    }
    dispatch(imageRefreshing);
    return fetch(basUrl + `images/?page_size=${next}`)
        .then(res => {
            if (res.ok) {

                return res;
            }
            else {
                var error = new Error('Error ' + res.status + ' : ' + res.statusText);
                error.message = res;
                throw error;
            }
        }, err => {
            var error = new Error(err.message);
            throw error;
        })
        .then(res => res.json())
        .then(images => dispatch(getImages(images, append)))
        .catch(error => dispatch(imageFailed(error)))
};

export const lunchRequestLoading = () => {
    return {
        type : _.LUNCH_LOADING
    }
}

export const getLunchResponse = (lunchMenu) => {
    return {
        type: _.GET_LUNCH,
        payload: lunchMenu
    }
}

export const lunchResponseFailed = (error) => {
    return {
        type: _.LUCNH_FAILED,
        payload: error
    }
}

export const fetchLunchMenu = () => dispatch => {
    dispatch(lunchRequestLoading());
    return fetch(basUrl + 'lunch/')
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ' : ' + response.statusText)
            error.message = response;
            throw error;
        }
    }, err => {
        var error = new Error(err.message);
        throw error;
    })
    .then(response => response.json())
    .then(lunchMenu => dispatch(getLunchResponse(lunchMenu)))
    .catch(error => dispatch(lunchResponseFailed(error)))
}

export const dinnerResponseLoading = () => {
    return {
        type : _.DINNER_LOADING
    }
}

export const getDinnerResponse = (dinnerMenu) => {
    return {
        type : _.GET_DINNER,
        payload: dinnerMenu
    }
}
export const dinnerResponseFailed = (error) => {
    return {
        type: _.DINNER_FAILED,
        payload: error
    }
}

export const fetchDinnerMenu = () => dispatch => {
    dispatch(dinnerResponseLoading())
    return fetch(basUrl + 'dinner/')
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ' : ' + response.statusText)
            error.message = response;
            throw error;
        }
    }, err => {
        var error = new Error(err.message);
        throw error;
    })
    .then(response => response.json())
    .then(dinnerMenu => dispatch(getDinnerResponse(dinnerMenu)))
    .catch(error => dispatch(dinnerResponseFailed(error)))
}

export const showModal = () => {
    return {
        type: _.SHOW_MODAL
    }
};
export const hideModal = () => {
    return {
        type: _.HIDE_MODAL
    }
};
export const postBookingLoading = () => {
    return {
        type: _.POST_BOOKING_LOADING
    }
}
export const getPostRespone = (response) => {
    return {
        type: _.GET_POST_RESPONSE,
        payload: response
    }
}
export const postFailed = (error) => {
    return {
        type: _.POST_FAILED,
        payload: error
    }
}


export const fetchFields = (name, email, phone, date, time, num_of_guests, special_request,confirmed) => dispatch => {
    dispatch(postBookingLoading())
    return fetch(basUrl + 'reservation/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            num_of_people: num_of_guests,
            special_req: special_request,
            confirmed: confirmed
        }),
    })
        .then(res => {
            if (res.ok) {
                return res;
            }
            else {
                var error = new Error('Error' + res.status + ' : ' + res.statusText);
                error.message = res;
                throw error;
            }
        }, error => {
            var err = new Error(error.message);
            throw err;
        })
        .then(res => res.json())
        .then(response => dispatch(getPostRespone(response)))
        .catch(error => dispatch(postFailed(error)))
};

export const subscribeLoading = () => {
    return{
        type: _.SUBSCRIBE_LOADING
    }
}

export const getSubscribeResponse = (res) => {
    return {
        type: _.GET_SUBSCRIBE_RESONSE,
        payload: res
    }
}

export const subscribeFailed = (err) => {
    return {
        type: _.SUBSCRIBE_FAILED,
        payload: err
    }
}
export const fetchSubscribe = (email) => dispatch => {
    dispatch(subscribeLoading);
    return fetch(basUrl + 'newsletter/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            email_field: email
        })
    })
    .then(res => {
        if(res.ok) {
            console.log(res);
            return res;
        }
        else{
            var error = new Error('Error' + res.status + ' : ' + res.statusText);
            error.message = res;
            throw error;
        }
    }, err => {
        var error = new Error(err.message);
        throw error;
    })
    .then(res => res.json())
    .then(sub => dispatch(getSubscribeResponse(sub)))
    .catch(error => dispatch(subscribeFailed(error.message)));
}

export const enquiryFormLoading = () => {
    return {
        type: _.ENQUIRY_LOADING
    }
}

export const getEnquiryResponse = (msg) => {
    return {
        type: _.GET_ENQUIRY_RESPONSE,
        payload:msg
    }
}
export const enquiryFailed = (error) => {
    return {
        type: _.ENQUIRY_FAILED,
        payload: error
    }
}

export const fetchEnquiry = (name, email, phone, message) => dispatch => {
    dispatch(enquiryFormLoading())
    return fetch(basUrl + 'enquiry/',{
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            message: message
        })
    })
    .then(res => {
        if(res.ok){
            return res;
        }
        else {
            var error = new Error('Error ' + res.status + ' : ' + res.statusText);
            error.message = res;
            throw error.message;
        }
    },err => {
        var error = new Error(err.message);
        throw error;
    })
    .then(res => res.json())
    .then(enquiry => dispatch(getEnquiryResponse(enquiry)))
    .catch(error => dispatch(enquiryFailed(error)))
}

// Box Meal

export const boxMealLoading = () => {
    return {
        type: _.BOX_MEAL_LOADING
    }
}
export const getBoxMeal = boxMeal => {
    return {
        type: _.GET_BOX_MEAL,
        payload: boxMeal
    }
}
export const boxMealFailed = error => {
    return {
        type: _.BOX_MEAL_FAILED,
        payload: error
    }
}

export const fetchBoxMeal = () => dispatch => {
    dispatch(boxMealLoading());
    return fetch(basUrl + 'box-meal')
        .then(response => {
            if(response.ok){
                return response;
            }
            else {
                var error = new Error(`Error ${response.status}\n ${response.statusText}`)
                error.message = response;
                throw error;
            }
        }, err => {
            var error = new Error(err);
            throw error;
        })
        .then(response => response.json())
        .then(boxMeal => dispatch(getBoxMeal(boxMeal)))
        .catch(error => dispatch(boxMealFailed(error)))
}

//Curries 

export const curriesLoading = () => {
    return {
        type: _.CURRIES_LOADING
    }
}

export const getCurries = curries => {
    return {
        type: _.GET_CURRIES,
        payload: curries
    }
}

export const curriesFailed = error => {
    return {
        type: _.CURRIES_FAILED,
    }
}


export const fetchCurries = () => dispatch => {
    dispatch(curriesLoading());
    return fetch(basUrl + 'curries')
        .then(response => {
            if(response.ok){
                return response;
            }
            else {
                var error = new Error(`Error ${response.status}\n ${response.statusText}`)
                error.message = response;
                throw error;
            }
        },err => {
            var error = new Error(err);
            throw error;
        })
        .then(response => response.json())
        .then(curries => dispatch(getCurries(curries)))
        .catch(error => dispatch(curriesFailed(error)))
}

//SIDES 

export const sidesLoading = () => {
    return{
        type: _.SIDES_LOADING
    }
}

export const getSides = sides => {
    return {
        type: _.GET_SIDES,
        payload: sides
    }
}

export const sidesFailed = error => {
    return {
        type: _.SIDES_FAILED,
        payload: error
    }
}

export const fetchSides = () => dispatch => {
    dispatch(sidesFailed());
    return fetch(basUrl + "sides")
        .then(response => {
            if(response.ok){
                return response;

            }
            else {
                var error = new Error( `Error ${response.status}\n ${response.statusText}`);
                error.message = response;
                throw error;
            }
        }, err => {
            var error = new Error(err);
            throw error;
        })
        .then(response => response.json())
        .then(sides => dispatch(getSides(sides)))
        .catch(error => dispatch(sidesFailed(error)))
}