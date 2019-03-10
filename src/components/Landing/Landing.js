import React, { Component } from 'react'

import { Carousel, Card } from 'react-bootstrap'


import { connect } from 'react-redux'


import './Landing.css'
import * as _ from '../../store/actions/actionCreator'
import Loading from "../Loading/Loading";
import Reservation from "../Reservation/Reservation";


class Landing extends Component {
    componentDidMount() {
        this.props.specialOFD();
    }

    showModal = (e) => {
        e.preventDefault();
        this.props.showModal();
    };

    render() {
        const specialOfTheDay = this.props.mains && this.props.mains.mains && this.props.mains.mains.filter(item => {
            return item.is_special_ofd === true
        });
        let item = null;
        if (this.props.mains.isLoading) {
            item = <Loading />;
        }
        else if (this.props.mains && specialOfTheDay) {
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
                            <div className='container bg-light'>
                                <h3 className="text-center py-1">Enquiry</h3>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-6'>
                                        <label htmlFor="name">Name:</label>
                                        <input className="form-control" type="text" id="name" placeholder="Name"></input>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <label htmlFor="email">Email:</label>
                                        <input className='form-control' type="email" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-md-8">
                                        <label htmlFor="phone">Phone:</label>
                                        <input className="form-control" type="text" id="phone" placeholder="Phone No."></input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                        <label htmlFor="mesaage">Message:</label>
                                        <textarea cols="10" rows="8" id="message" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mx-auto">
                                        <input className="form-control btn btn-success m-2" type="submit" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 nogap'>
                            <div className='jumbotron text-center hoverable'>
                                <div className='row'>
                                    <div className="col-md-4 offset-md-1 mx-3 my-3">
                                        <div className="view overlay">
                                            <img src={require('../../assets/res.jpg')} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className=" col-sm-12 col-md-6 text-md-left ml-3 mt-3">
                                        <h4 className="h4 mb-4">We are making big announcements</h4>
                                        <p className="font-weight-normal">
                                            In this menu, you will be delighted with the selection of Sri Lankan offerings that have been tempered with the characteristics
                                            of Indian, Arab, Malay, Moor, Portuguese, Dutch, and British influences
                                        </p>
                                        <button className='btn btn-success btn-sm'>Read More</button>
                                    </div>
                                </div>
                            </div>
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
        mains: state.mains,
        modal: state.booking
    }
};
const mapDispatchToProps = dispatch => {
    return {
        specialOFD: () => dispatch(_.fetchMains()),
        showModal: () => dispatch(_.showModal())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);