import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-image-lightbox/style.css';
import "react-datepicker/dist/react-datepicker.css";
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {BrowserRouter} from 'react-router-dom';

import {images} from './store/reducers/images';
import {entrees} from './store/reducers/entrees';
import {mains} from './store/reducers/mains';
import {desserts} from './store/reducers/desserts';
import {sides} from './store/reducers/sides';
import {reservation} from "./store/reducers/reservation";
import {subs} from './store/reducers/subscribers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const rootReducer = combineReducers({
    images: images,
    entrees: entrees,
    mains: mains,
    desserts: desserts,
    sides: sides,
    booking: reservation,
    subs: subs
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
