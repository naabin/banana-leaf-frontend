import React, { Component } from 'react';

import { Collapse, Button } from 'react-bootstrap'

import './DinnerMenuItems.css'
import DieteryIcon from '../DieteryIcon/DieteryIcon';


class DinnerMenuItems extends Component {

    state = {
        isEntreeOpen: true,
        isMainsOpen: false,
        isDessertsOpen: false,
        isSidesOpen: false,
    }

    render() {
        const entrees = this.props.category && this.props.category.entrees;
        const mains = this.props.category && this.props.category.mains;
        const sides = this.props.category && this.props.category.sides;
        const desserts = this.props.category && this.props.category.desserts;
        return (
            <div className='col-sm-12 col-md-12'>
                <div className='p-2'>
                    <Button
                        className='text-uppercase p-2'
                        size='lg'
                        variant='outline-dark'
                        block
                        onClick={() => this.setState({ isEntreeOpen: !this.state.isEntreeOpen })}
                        aria-controls='entrees'
                        aria-expanded={this.state.isEntreeOpen}
                    >
                        Entrees
                {this.state.isEntreeOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.isEntreeOpen}>
                        <div id='entrees'>
                            {entrees.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-12 col-md-10 noGap '}>
                                            <h4>{item.name}<DieteryIcon
                                                glutenFree={item.is_gluten_free}
                                                dairyFree={item.is_dairy_free}
                                                vegetarian={item.is_vegetarian}
                                                vegan={item.is_vegan}

                                            />
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
                        onClick={() => this.setState({ isMainsOpen: !this.state.isMainsOpen })}
                        aria-controls='mains'
                        aria-expanded={this.state.isMainsOpen}
                    >
                        Mains
                    {this.state.isMainsOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.isMainsOpen}>
                        <div id='mains'>
                            {mains.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-6 col-md-10 noGap '}>
                                            <h4>{item.name}
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
                        onClick={() => this.setState({ isDessertsOpen: !this.state.isDessertsOpen })}
                        aria-controls='desserts'
                        aria-expanded={this.state.isDessertsOpen}
                    >
                        Desserts
                    {this.state.isDessertsOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.isDessertsOpen}>
                        <div id='dessserts'>
                            {desserts.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-6 col-md-10 noGap '}>
                                            <h4>{item.name}
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
                        onClick={() => this.setState({ isSidesOpen: !this.state.isSidesOpen })}
                        aria-controls='sides'
                        aria-expanded={this.state.isSidesOpen}
                    >
                        Sides
                    {this.state.isSidesOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                    </Button>
                    <Collapse in={this.state.isSidesOpen}>
                        <div id='sides'>
                            {sides.map((item, index) => {
                                return (
                                    <div key={item.pk} className={'row'} id={'foodItem'}>
                                        <div className={'col-sm-6 col-md-10 noGap '}>
                                            <h4>{item.name}
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
}

export default DinnerMenuItems;
