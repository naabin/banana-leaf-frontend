import React, {Component} from 'react';

import {connect} from "react-redux";

import {Switch, Route} from 'react-router-dom';

import * as _ from '../../store/actions/actionCreator'
import './Menu.css'
import MenuItems from "../Common/MenuItems/MenuItems";
import Loading from '../Loading/Loading';

class Menu extends Component {
    componentDidMount() {
        this.props.fetchEntrees();
        this.props.fetchMains();
        this.props.fetchDesserts();
        this.props.fetchSides();
    }

    render() {
        return (
            <div className={'Menu'}>
                <div className={'row'}>
                    <div className={'container'}>
                    <Switch>
                        <Route path='/menu/entree' component={() => this.props.entrees.isLoading ? <Loading/> : <MenuItems headTitle={'Entrees'} category={this.props.entrees.entrees}/>}/>
                        <Route path='/menu/mains' component={() => this.props.mains.isLoading ? <Loading/> : <MenuItems headTitle={'Mains'} category={this.props.mains.mains}  />}/>
                        <Route path='/menu/desserts' component={() => this.props.desserts.isLoading ? <Loading/> :  <MenuItems headTitle={'Desserts'} category={this.props.desserts.desserts}/>}/>
                        <Route path='/menu/sides' component={() => this.props.sides.isLoading ? <Loading/> :       <MenuItems headTitle={'Sides'} category={this.props.sides.sides}/>}/>
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        entrees: state.entrees,
        mains: state.mains,
        desserts: state.desserts,
        sides: state.sides
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchEntrees: () => dispatch(_.fetchEntrees()),
        fetchMains: () => dispatch(_.fetchMains()),
        fetchDesserts: () => dispatch(_.fetchDesserts()),
        fetchSides: () => dispatch(_.fetchSides())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
