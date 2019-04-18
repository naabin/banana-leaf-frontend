import React, { Component } from 'react';

import * as _ from '../../store/actions/actionCreator';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { Collapse, Button, Jumbotron, Container } from 'react-bootstrap';
import DieteryIcon from '../Common/DieteryIcon/DieteryIcon';


class TakeAway extends Component {

    state = {
        isBoxOpen: false,
        isCurriesOpen: false,
        isSidesOpen: false,
    }

    componentDidMount() {
        this.props.fetchBoxMeal();
        this.props.fetchCurries();
        this.props.fetchSides();
    }
    render() {
        return (
            <>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    <Jumbotron as='div'>
                        <Container fluid>
                            <div className='text-center'>
                                <h1>PICK UP ONLY<br />
                                    <hr />
                                    LUNCH 11:30AM – 2:00PM & DINNER 5:30PM – 9:00PM<br />
                                    <br />
                                    FREE DESSERT OVER $50 SPENDING <br />
                                    FREE DESSERT & SNACK OVER $100 SPENDING <br />
                                </h1>
                                <button className='btn btn-success bg-white btn-lg p-2 m-2'> <Link style={{ color: 'black', textDecoration: 'none' }} to='/contact'>Contact details</Link> </button>
                            </div>
                            <p className='float-right'>*Online ordering coming soon.</p>
                        </Container>
                    </Jumbotron>
                    <div className='p-2'>
                        <Button
                            className='text-uppercase p-2'
                            size='lg'
                            variant='outline-dark'
                            block
                            onClick={() => this.setState({ isBoxOpen: !this.state.isBoxOpen })}
                            aria-controls='lightLunches'
                            aria-expanded={this.state.isBoxOpen}
                        >
                            SINGLE BOX COMPLETE MEAL PACKAGES
                {this.state.isBoxOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                        </Button>
                        <Collapse in={this.state.isBoxOpen}>
                            <div>
                                {this.state.isBoxOpen && this.props.boxed &&  this.props.boxed.boxMeals.map(boxed => {
                                    return (
                                        <div key={boxed.id} className={'row'} id={'foodItem'}>
                                            <div className={'col-sm-12 col-md-10 noGap '}>
                                                <h4>{boxed.name}{boxed.is_gluten_free || boxed.is_dairy_free ? <br /> : null}
                                                    <DieteryIcon
                                                        glutenFree={boxed.is_gluten_free}
                                                        dairyFree={boxed.is_dairy_free}
                                                        vegetarian={false}
                                                        vegan={false} />
                                                    <p className='float-right'>{'//'}{boxed.price}</p></h4>
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
                            onClick={() => this.setState({ isCurriesOpen: !this.state.isCurriesOpen })}
                            aria-controls='lightLunches'
                            aria-expanded={this.state.isCurriesOpen}
                        >
                            CURRIES
                {this.state.isCurriesOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                        </Button>
                        <Collapse in={this.state.isCurriesOpen}>
                            <div>
                                {this.state.isCurriesOpen && this.props.boxedCurries &&  this.props.boxedCurries.curries.map(curry => {
                                    return (
                                        <div key={curry.id} className={'row'} id={'foodItem'}>
                                            <div className={'col-sm-12 col-md-10 noGap '}>
                                                <h4>{curry.name}{curry.is_gluten_free || curry.is_dairy_free ? <br /> : null}
                                                    <DieteryIcon
                                                        glutenFree={curry.is_gluten_free}
                                                        dairyFree={curry.is_dairy_free}
                                                        vegetarian={false}
                                                        vegan={false} />
                                                    <p className='float-right'>{'//'}{curry.price}</p></h4>
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
                            aria-controls='lightLunches'
                            aria-expanded={this.state.isSidesOpen}
                        >
                            SIDES
                {this.state.isSidesOpen ? <i className='fa fa-angle-double-down p-1 '></i> : <i className='fa fa-angle-double-right p-1'></i>}
                        </Button>

                        <Collapse in={this.state.isSidesOpen}>
                            <div>
                                <h1 className='p-2'>FOLLOWING SIDES ARE ONLY SOLD WITH CURRIES ABOVE</h1>
                                {this.state.isSidesOpen && this.props.sideFood &&  this.props.sideFood.sides.map(side => {
                                    return side.curries_only_side && (
                                        <div key={side.pk} className={'row'} id={'foodItem'}>
                                            <div className={'col-sm-12 col-md-10 noGap '}>
                                                <h4>{side.name}{side.is_gluten_free || side.is_dairy_free ? <br /> : null}
                                                    <DieteryIcon
                                                        glutenFree={side.is_gluten_free}
                                                        dairyFree={side.is_dairy_free}
                                                        vegetarian={false}
                                                        vegan={false} />
                                                    <p className='float-right'>{'//'}{side.price}</p></h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Collapse>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    boxed: state.takeAway,
    boxedCurries: state.takeAwayCurries,
    sideFood: state.sides
})

const mapDispatchToProps = dispatch => ({
    fetchBoxMeal: () => dispatch(_.fetchBoxMeal()),
    fetchCurries: () => dispatch(_.fetchCurries()),
    fetchSides: () => dispatch(_.fetchSides())
})

export default connect(mapStateToProps, mapDispatchToProps)(TakeAway);