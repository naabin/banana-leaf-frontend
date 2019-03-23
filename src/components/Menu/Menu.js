import React, {Component} from 'react';

import {connect} from "react-redux";

import {Switch, Route} from 'react-router-dom';

import * as _ from '../../store/actions/actionCreator'
import './Menu.css'
import LunchMenuItems from "../Common/MenuItems/LunchMenuItems";
import Loading from '../Loading/Loading';
import DinnerMenuItems from '../Common/MenuItems/DinnerMenuItems';
import Beverage from '../Common/MenuItems/Beverage/Beverage';
import Festive from '../Common/MenuItems/Festive/Festive';

class Menu extends Component {
    componentDidMount() {
        this.props.fetchLunchMenu();
        this.props.fetchDinnerMenu();
    }
    render() {
        return (
            <div className={'Menu'}>
                <div className={'row'}>
                    <div className={'container'}>
                    <Switch>
                        <Route path='/menu/lunch' component={() => this.props.lunch && this.props.lunch.isLoading ? <Loading/> : <LunchMenuItems category={this.props.lunch && this.props.lunch.lunchMenu && this.props.lunch.lunchMenu[0]}/>}/>
                        <Route path='/menu/dinner' component={() => this.props.dinner && this.props.dinner.isLoading ? <Loading/> : <DinnerMenuItems category={this.props.dinner && this.props.dinner.dinnerMenu && this.props.dinner.dinnerMenu[0]}  />}/>
                        <Route path='/menu/beverage' component={() =><Beverage/>}/>
                        <Route path='/menu/festive' component={()=><Festive/>}/>
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lunch: state.lunch,
        dinner: state.dinner
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchDinnerMenu: () => dispatch(_.fetchDinnerMenu()),
        fetchLunchMenu: () => dispatch(_.fetchLunchMenu())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
