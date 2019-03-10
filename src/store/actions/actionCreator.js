import * as _ from './actionTypes';
import { basUrl } from '../../shared/baseUrl'

export const imagesLoading = () => {
    return {
        type: _.IMAGES_LOADING
    }
};
export const getImages = (images) => {
    return {
        type: _.GET_IMAGES,
        payload: images
    }
};
export const imageFailed = (error) => {
    return {
        type: _.IMAGES_FAILED,
        payload: error
    }
};

export const fetchImages = () => dispatch => {
    dispatch(imagesLoading());
    return fetch(basUrl + 'images/')
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
        .then(images => dispatch(getImages(images)))
        .catch(error => dispatch(imageFailed(error)))
};

export const entreesLoading = () => {
    return {
        type: _.ENTREES_LOADING
    }
};
export const getEntrees = (entrees) => {
    return {
        type: _.GET_ENTREES,
        payload: entrees
    }
};
export const entreesFailed = (error) => {
    return {
        type: _.ENTREES_FAILED,
        payload: error
    }
};
export const fetchEntrees = () => dispatch => {
    dispatch(entreesLoading());
    return fetch(basUrl + 'entree/')
        .then(res => {
            if (res.ok) {
                return res;
            }
            else {
                var error = new Error('Error' + res.status + ' : ' + res.statusText);
                error.message = res;
                throw error;
            }
        }, err => {
            var error = new Error(err.message);
            throw error;
        })
        .then(res => res.json())
        .then(entrees => dispatch(getEntrees(entrees)))
        .catch(error => dispatch(entreesFailed(error)))
};

export const mainsLoading = () => {
    return {
        type: _.MAINS_LOADING
    }
};

export const getMains = (main) => {
    return {
        type: _.GET_MAINS,
        payload: main
    }
};

export const mainsFailed = (error) => {
    return {
        type: _.MAINS_FAILED,
        payload: error
    }
};

export const fetchMains = () => dispatch => {
    dispatch(mainsLoading());
    return fetch(basUrl + 'mains/')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ' : ' + response.statusText);
                error.message = response;
                throw error;
            }
        }, err => {
            var error = new Error(err.message);
            throw error;
        })
        .then(response => response.json())
        .then(mains => dispatch(getMains(mains)))
        .catch(error => dispatch(mainsFailed(error)))
};

export const dessertsLoading = () => {
    return {
        type: _.DESSERTS_LOADING
    }
};

export const getDesserts = (desserts) => {
    return {
        type: _.GET_DESSERTS,
        payload: desserts
    }
};

export const dessertsFailed = (error) => {
    return {
        type: _.DESSERTS_FAILED,
        payload: error
    }
};

export const fetchDesserts = () => dispatch => {
    dispatch(dessertsLoading());
    return fetch(basUrl + 'dessert/')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ' : ' + response.statusText);
                error.message = response;
                throw error;
            }
        }, err => {
            var error = new Error(err.message);
            throw error;
        })
        .then(response => response.json())
        .then(desserts => dispatch(getDesserts(desserts)))
        .catch(error => dispatch(dessertsFailed(error)))
};


export const sidesLoading = () => {
    return {
        type: _.SIDES_LOADING
    }
};

export const getSides = (sides) => {
    return {
        type: _.GET_SIDES,
        payload: sides
    }
};

export const sidesFailed = (error) => {
    return {
        type: _.SIDES_FAILED,
        payload: error
    }
};

export const fetchSides = () => dispatch => {
    dispatch(sidesLoading());
    return fetch(basUrl + 'sides/')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ' : ' +  response.statusText);
                error.message = response;
                throw error;
            }
        }, err => {
            var error = new Error(err.message);
            throw error;
        })
        .then(response => response.json())
        .then(sides => dispatch(getSides(sides)))
        .catch(error => dispatch(sidesFailed(error)))
};

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


export const fetchFields = (name, email, phone, date, time, num_of_guests, special_request) => dispatch => {
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
            special_req: special_request
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
