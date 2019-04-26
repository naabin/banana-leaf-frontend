import React, {Component} from 'react';

import {connect} from "react-redux";
import * as _ from './store/actions/actionCreator';

import {Helmet} from 'react-helmet'

import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';

import logo from  './assets/logo.png';

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Landing from "./components/Landing/Landing";
import Gallery from "./components/Gallery/Gallery";
import Contact from './components/Contact/Conatct';
import ReservationPage from './components/Reservation/ReservationPage/ReservationPage';


class App extends Component {
    state={
        showStickyNav: true
    };
    changeShowStickyNav = ()=> {
      this.setState({showStickyNav: !this.state.showStickyNav})
    };
    render() {
        const RandomImage = [];
        this.props.image && this.props.image.images.map((image, _, arr) => {
            const index = Math.floor(Math.random() * this.props.image.images.length);
            while (RandomImage.length < 1) {
                RandomImage.push(arr[index]);
            }
            return RandomImage;
        });
        return (
            <>

                <div className="App">
                <Helmet>
                    <title>Banana Leaf Restaurant</title>
                    <meta name="description" content="Sri Lankan Cuisine in Kingston Canberra.Bringing the authentic 
                    Sri Lankan culinary experience to the heart of Canberra ! Relaxed place with simple decor and outdoor tables, serving Sri Lankan dishes and basic bistro food" />
                    <meta name="og:title" content="Banana Leaf Restaurant"/>
			        <meta name="og:image" content={logo}/>
			        <meta name="og:url" content="https://www.bananaleafrestaurant.com.au"/>
			        <meta name="og:site_name" content="Banana Leaf"/>
			        <meta name="og:locale" content="en_AU"/>
			        <meta name="og:type" content="website"/>
                    <meta property="og:image" content="https://www.bananaleafrestaurant.com.au/gallery"/>
                    <link rel="canonical" href="https://www.bananaleafrestaurant.com.au" />
                </Helmet>
                <Navigation show={this.state.showStickyNav} showModal={this.props.show}/>
                    <Switch>
                        <Route path='/menu' render={() => <Menu route={this.props} />}/>
                        <Route path= '/booking' render={() => <ReservationPage show={this.props.show}/>}/>
                        <Route path='/gallery' render={() => <Gallery router = {this.props} show={this.changeShowStickyNav}/>}/>
                        <Route path='/contact' render = {() => <Contact/>}/>
                        <Route path='/' exact component={Landing}/>
                    </Switch>
                    <Footer/>
                </div>
            </>
        );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        show: ()=>dispatch(_.showModal())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(App));