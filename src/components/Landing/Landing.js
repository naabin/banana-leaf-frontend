import React, { Component } from 'react';

import { connect } from 'react-redux';

import './Landing.css';
import * as _ from '../../store/actions/actionCreator';
import Reservation from "../Reservation/Reservation";
import AboutUs from './AboutUs/AboutUs';
import OpeningHours from './OpeningHours/OpeningHours';
import EasterSpecial from '../EasterSpecial/EasterSpecial';


class Landing extends Component {
    showModal = (e) => {
        e.preventDefault();
        this.props.showModal();
    };
    render() {
        let item = null;
        item = <div className='col-sm-12 col-md-12 nogap'>
            <AboutUs />
        </div>
        return (
            <>  
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    
                </div>
                    <div id={'welcome'} className={'col-sm-12  col-md-12 col-lg-12'}>
                    <EasterSpecial/> 
                    <div className='title col-sm-12 col-md-12'>
                            <h1 style={{fontSize:'4rem'}}> BANANA LEAF</h1>
                            <h5 style={{fontSize:'1.5rem'}}> SRI LANKAN CUISINE IN KINGSTON CANBERRA</h5>
                    </div>
                        <div id="buttons" className='btn-group-justified'>
                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button onClick={(e) => this.showModal(e)} className={'btn btn-default bg-white btn-lg'}><i className="fa fa-check"></i> Book Now
                            </button>
                                {this.props.modal.showModal && <Reservation />}
                            </div>

                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button className=" btn btn-default bg-white btn-lg" onClick={() => document.location.href = 'tel:+61 02 6101 2713'}><i className='fa fa-phone'></i> Make a phone call</button>
                            </div>
                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button className="btn btn-default bg-white btn-lg" onClick={() => document.location.href = 'https://www.google.com/maps/place/Banana+Leaf+Restaurant/@-35.3162165,149.1385411,17z/data=!3m1!4b1!4m5!3m4!1s0x6b164d68d25b41c3:0x9a5743b343a6073d!8m2!3d-35.3162209!4d149.1407298'}><i className="fa fa-map-marker"></i> Get directions</button>
                            </div>
                            <div className='col-sm-12 my-4 col-md-6  justify-content-center'>
                                <OpeningHours />
                            </div>
                       
                        <div id='sideNav' className='side py-3'>
                            <button id='review-button' onClick={() => window.open('https://www.goodfood.com.au/banana-leaf-kingston/banana-leaf-review-20190401-h1d178', '_blank')} className={'btn btn-primary btn-lg  m-2'} >Reviews<i className={'fa fa-comment float-right p-2 '}></i></button>
                            <button id="tripAdvisor" onClick={() => window.open('https://www.tripadvisor.com.au/Restaurant_Review-g255057-d1082008-Reviews-Banana_Leaf-Canberra_Australian_Capital_Territory.html', '_blank')} className={'btn btn-default bg-info btn-lg m-2'}>Give us a feedback on <i className="fa fa-tripadvisor float-right p-2"></i></button>
                            <button id="facebook" onClick={() => window.open('https://www.facebook.com/BananaLeafCanberra', '_blank')} className={'btn btn-primary btn-lg  m-2'}>Like us on Facebook<i className={'fa fa-facebook-square float-right p-2 '}></i></button>
                            <button id="instagram" onClick={() => window.open('https://www.instagram.com/bananaleaf.canberra/', '_blank')} className={'btn btn-danger btn-lg  m-2'}>Follow us on Instagram<i className={'fa fa-instagram float-right p-2 '}></i></button>
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
        showModal: () => dispatch(_.showModal()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);