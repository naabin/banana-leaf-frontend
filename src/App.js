import React, {Component} from 'react';

import {connect} from "react-redux";
import * as _ from './store/actions/actionCreator';

import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css'

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Landing from "./components/Landing/Landing";
import Gallery from "./components/Gallery/Gallery";
import Reservation from "./components/Reservation/Reservation";
import Contact from './components/Contact/Conatct';


class App extends Component {
    state={
        showStickyNav: true
    };
    componentWillMount() {
        this.props.fetchImages();
    }
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
                    <Navigation show={this.state.showStickyNav} showModal={this.props.show}/>
                    <Switch>
                        <Route path='/menu' render={() => <Menu route={this.props}/>}/>
                        <Route path= '/booking' render={() => <Reservation/>}/>
                        <Route path='/gallery' render={() => <Gallery show={this.changeShowStickyNav}/>}/>
                        <Route path='/contact' render = {() => <Contact/>}/>
                        <Route path='/' exact component={Landing}/>
                    </Switch>
                    <Footer/>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        image: state.images
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: () => dispatch(_.fetchImages()),
        show: ()=>dispatch(_.showModal())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));