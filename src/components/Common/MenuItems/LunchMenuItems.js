import React, { Component } from 'react';

import { Collapse, Button } from 'react-bootstrap';


import './LunchMenuItems.css';
import DieteryIcon from '../DieteryIcon/DieteryIcon';

class LunchMenuItems extends Component {

    state = {
        lightLucnhOpen: true,
        burgersOpen: true,
        traditionalMainsOpen: false,
        mainsOpen: false,
        sidesOpen: false,
        dessertsOpen: false
    }

    render() {
        const lightLunches = this.props.category && this.props.category.light_lunches;
        const burgers = this.props.category && this.props.category.burgers;
        const traditionalMains = this.props.category && this.props.category.traditional_mains && this.props.category.traditional_mains[0].mains;
        const mains = this.props.category && this.props.category.mains;
        const sides = this.props.category && this.props.category.sides;
        const desserts = this.props.category && this.props.category.desserts;

        return (
            <div className={'col-sm-12 col-md-12 col-lg-12 lunch'}>
                <div className='p-2'>
                    <Button
                        className='text-uppercase p-2'
                        size='lg'
                        variant='outline-dark'
                        block
                        onClick={() => this.setState({ lightLucnhOpen: !this.state.lightLucnhOpen })}
                        aria-controls='lightLunches'
                        aria-expanded={this.state.lightLucnhOpen}
                    >
                        Light Lunches
                    {this.state.lightLucnhOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.lightLucnhOpen}>
                        <div id='lightLunches'>

                            {lightLunches.map((item, index) => {
                                return (
                                    <div key={item.id} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-12 col-md-10 noGap '}>
                                            <h4>{item.name}{item.is_gluten_free || item.is_dairy_free || item.is_vegetarian ||item.is_vegan ? <br/> : null}
                                                <DieteryIcon
                                                    glutenFree={item.is_gluten_free}
                                                    dairyFree={item.is_dairy_free}
                                                    vegetarian={item.is_vegetarian}
                                                    vegan={item.is_vegan} />
                                                <p className='float-right'>{'//'}{item.price}</p></h4>
                                            {item.description ? <p className='col-sm-12 col-md-9 noGap'>{item.description}</p> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
                <div className='p-2'>
                    <Button
                        className='text-uppercase p-2'
                        size='lg'
                        variant='outline-dark'
                        block
                        onClick={() => this.setState({ burgersOpen: !this.state.burgersOpen })}
                        aria-controls='burgers'
                        aria-expanded={this.state.burgersOpen}
                    >
                        Burgers
                    {this.state.burgersOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.burgersOpen}>
                        <div id='burgers'>
                            {burgers.map((item, index) => {
                                return (
                                    <div key={item.id} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-12 col-md-10 noGap '}>
                                            <h4>{item.name}{item.is_gluten_free || item.is_dairy_free || item.is_vegetarian ||item.is_vegan ? <br/> : null}
                                                <DieteryIcon
                                                    glutenFree={item.is_gluten_free}
                                                    dairyFree={item.is_dairy_free}
                                                    vegetarian={item.is_vegetarian}
                                                    vegan={item.is_vegan} />
                                                <p className='float-right'>{'//'}{item.price}</p></h4>
                                            {item.description ? <p className='col-sm-12 col-md-9 noGap'>{item.description}</p> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
                <div className='p-2'>
                    <Button
                        className='text-uppercase p-2'
                        size='lg'
                        variant='outline-dark'
                        block
                        onClick={() => this.setState({ traditionalMainsOpen: !this.state.traditionalMainsOpen })}
                        aria-controls='traditionalMains'
                        aria-expanded={this.state.traditionalMainsOpen}
                    >
                        Traditional Mains
                    {this.state.traditionalMainsOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.traditionalMainsOpen}>
                        <div id='traditionalMains'>
                            {traditionalMains.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-12 col-md-10 noGap '}>
                                            <h4>{item.name}{item.is_gluten_free || item.is_dairy_free || item.is_vegetarian ||item.is_vegan ? <br/> : null}
                                                <DieteryIcon
                                                    glutenFree={item.is_gluten_free}
                                                    dairyFree={item.is_dairy_free}
                                                    vegetarian={item.is_vegetarian}
                                                    vegan={item.is_vegan} />
                                                <p className='float-right'>{'//'}{item.price}</p></h4>
                                            {item.description ? <p className='col-sm-12 col-md-9 noGap'>{item.description}</p> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
                <div className='p-2'>
                    <Button
                        className='text-uppercase p-2'
                        size='lg'
                        variant='outline-dark'
                        block
                        onClick={() => this.setState({ mainsOpen: !this.state.mainsOpen })}
                        aria-controls='mains'
                        aria-expanded={this.state.mainsOpen}
                    >
                        Mains
                    {this.state.mainsOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.mainsOpen}>
                        <div id='mains'>
                            {mains.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-12 col-md-10 noGap '}>
                                            <h4>{item.name}{item.is_gluten_free || item.is_dairy_free || item.is_vegetarian ||item.is_vegan ? <br/> : null}
                                                <DieteryIcon
                                                    glutenFree={item.is_gluten_free}
                                                    dairyFree={item.is_dairy_free}
                                                    vegetarian={item.is_vegetarian}
                                                    vegan={item.is_vegan} />
                                                <p className='float-right'>{'//'}{item.lunch_price}</p></h4>
                                            {item.description ? <p className='col-sm-12 col-md-9 noGap'>{item.description}</p> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
                <div className='p-2'>
                    <Button
                        className='text-uppercase p-2'
                        size='lg'
                        variant='outline-dark'
                        block
                        onClick={() => this.setState({ dessertsOpen: !this.state.dessertsOpen })}
                        aria-controls='desserts'
                        aria-expanded={this.state.dessertsOpen}
                    >
                        Desserts
                    {this.state.dessertsOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.dessertsOpen}>
                        <div id='dessserts'>
                            {desserts.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-12 col-md-10 noGap '}>
                                            <h4>{item.name}{item.is_gluten_free || item.is_dairy_free || item.is_vegetarian ||item.is_vegan ? <br/> : null}
                                                <DieteryIcon
                                                    glutenFree={item.is_gluten_free}
                                                    dairyFree={item.is_dairy_free}
                                                    vegetarian={item.is_vegetarian}
                                                    vegan={item.is_vegan} />
                                                <p className='float-right'>{'//'}{item.price}</p></h4>
                                            {item.description ? <p className='col-sm-12 col-md-9 noGap'>{item.description}</p> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
                <div className='p-2'>
                    <Button
                        className='text-uppercase p-2'
                        size='lg'
                        variant='outline-dark'
                        block
                        onClick={() => this.setState({ sidesOpen: !this.state.sidesOpen })}
                        aria-controls='sides'
                        aria-expanded={this.state.sidesOpen}
                    >
                        Sides
                    {this.state.sidesOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.sidesOpen}>
                        <div id='sides'>
                            {sides.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-12 col-md-10 noGap '}>
                                            <h4>{item.name}<br/>
                                                <DieteryIcon
                                                    glutenFree={item.is_gluten_free}
                                                    dairyFree={item.is_dairy_free}
                                                    vegetarian={item.is_vegetarian}
                                                    vegan={item.is_vegan} />
                                                <p className='float-right'>{'//'}{item.price}</p></h4>
                                            {item.description ? <p className='col-sm-12 col-md-9 noGap'>{item.description}</p> : null}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }

};

export default LunchMenuItems;