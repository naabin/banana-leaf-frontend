import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css";
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';

import {images} from './store/reducers/images';
import {lunch} from './store/reducers/lunch'
import {dinner} from './store/reducers/dinner'
import {reservation} from "./store/reducers/reservation";
import {subs} from './store/reducers/subscribers';
import {enquiry} from './store/reducers/enquiry';
import { boxMeal } from './store/reducers/boxMeal';
import { curries } from './store/reducers/curries';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { sides } from './store/reducers/sides';



const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const rootReducer = combineReducers({
    images: images,
    lunch: lunch,
    dinner: dinner,
    takeAway: boxMeal,
    takeAwayCurries: curries,
    sides: sides,
    booking: reservation,
    subs: subs,
    enquiry: enquiry
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (<Provider store={store}>
    <BrowserRouter><App/></BrowserRouter>
</Provider>);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
