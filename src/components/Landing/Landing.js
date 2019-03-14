import React, { Component } from 'react'

import { Carousel, Card } from 'react-bootstrap'


import { connect } from 'react-redux'


import './Landing.css'
import * as _ from '../../store/actions/actionCreator'
import Loading from "../Loading/Loading";
import Reservation from "../Reservation/Reservation";
import AboutUs from './AboutUs/AboutUs';
import EnquiryForm from './EnquiryForm/EnquiryForm';


class Landing extends Component {
    componentDidMount() {
        this.props.specialOFD();
    }

    showModal = (e) => {
        e.preventDefault();
        this.props.showModal();
    };

    render() {
        const specialOfTheDay = this.props.dinner && this.props.dinner.dinnerMenu && this.props.dinner.dinnerMenu[0].mains.filter(item => {
            return item.is_special_ofd === true
        });
        let item = null;
        if (this.props.dinner.isLoading) {
            item = <Loading />;
        }
        else if (this.props.dinner && specialOfTheDay) {
            item = specialOfTheDay.map(sp => {
                return (
                    <div key={sp.pk} className='row'>
                        <div className='col-sm-12 col-md-8 nogap bg-light'>
                            <Card>
                                <Card.Header>
                                    <h4 className='text-center'>Special of the day</h4>
                                </Card.Header>
                                <Carousel>
                                    {sp.image.map(image => (
                                        <Carousel.Item key={image.pk}>
                                            <img src={image.image} alt='special-images' className='w-100' />
                                            <Carousel.Caption>
                                                <h4>{sp.name}</h4>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Card>
                        </div>
                        <div className='col-sm-12 col-md-4 nogap'>
                            <EnquiryForm/>
                        </div>
                        <div className='col-sm-12 col-md-12 nogap'>
                            <AboutUs/>
                        </div>
                    </div>

                )
            });
        }
        else {
            item = <div className={'text-center'}>
                <h1>Something went wrong. Sorry for the inconvenience.</h1>
            </div>
        }
        return (
            <>
                <div className=''>
                    <div id={'welcome'} className={'col-sm-12  col-md-12 col-lg-12'}>
                        <h1> BANANA LEAF</h1>
                        <h5>SRI LANKAN CUISINE IN CANBERRA</h5>
                        <div id="buttons" className='btn-group-justified'>
                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button onClick={(e) => this.showModal(e)} className={'btn btn-default bg-white btn-lg'}><i className="fa fa-check"></i> Book Now
                            </button>
                                {this.props.modal.showModal &&  <Reservation />  }
                            </div>

                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button className=" btn btn-default bg-white btn-lg" onClick={() => document.location.href='tel:+61 02 6101 2713'}><i className='fa fa-phone'></i> Make a phone call</button>
                            </div>
                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button className="btn btn-default bg-white btn-lg" onClick={() => document.location.href='https://www.google.com/maps/place/Banana+Leaf+Restaurant/@-35.3162165,149.1385411,17z/data=!3m1!4b1!4m5!3m4!1s0x6b164d68d25b41c3:0x9a5743b343a6073d!8m2!3d-35.3162209!4d149.1407298'}><i className="fa fa-map-marker"></i> Get directions</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    {item}
                </div>

            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        dinner: state.dinner,
        modal: state.booking
    }
};
const mapDispatchToProps = dispatch => {
    return {
        specialOFD: () => dispatch(_.fetchDinnerMenu()),
        showModal: () => dispatch(_.showModal())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);