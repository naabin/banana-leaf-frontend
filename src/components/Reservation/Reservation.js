import React, {Component} from 'react';

import DatePicker from 'react-datepicker'
// import moment from 'moment'

import {connect} from "react-redux";
import * as _ from '../../store/actions/actionCreator';

import {Modal} from 'react-bootstrap'

import './Reservation.css';
import ReservationSummary from './ReservationSummary/ReservationSummary';
import BookingConfirmation from './BookingConfirmation/BookingConfirmation';
// import OpeningHours from './OpeningHours/OpeningHours';


class Reservation extends Component {
    state = {
        step: 1,
        isFormValid: false,
        name: '',
        email: '',
        phone: '',
        date: new Date(),
        time: new Date(),
        num_of_guests: undefined,
        special_request: ''
    };
    prevStep = (e) => {
        e.preventDefault();
        this.setState({step: this.state.step-1});
        this.props.show()   ;
    }
    nextStep = (e) => {
        e.preventDefault();
        this.setState({step: this.state.step + 1});
    }

    componentWillMount() {
        this.props.show();
    }
    checkValidity = (value, isRequired) => {
        let isValid = false;
        if(isRequired){
            isValid = value.trim() !== '';
        }
        return isValid;
    }

    handleChange = (e) => {
        let {isFormValid} = this.state;
        isFormValid = this.anyRequiredFieldMissing(e.target.form)
        this.setState({[e.target.name]: e.target.value, isFormValid: isFormValid});
    };
    handleDateChange = (date) => {
        this.setState({
            date: date
        })
    };
    handleTimeChange = (time) => {
        this.setState({time: time});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.nextStep(e);
        var date = `${this.state.date.getFullYear()}-${this.state.date.getMonth()}-${this.state.date.getDate()}`
        var time = `${this.state.time.getHours()}:${this.state.time.getMinutes()}`
        this.props.postBooking(this.state.name, this.state.email, this.state.phone, date, time, this.state.num_of_guests, this.state.special_request);
    };
    anyRequiredFieldMissing = form =>{ 
        return Array.from(form.elements).filter(x=>x.required).every(el=>el.value && el.value.trim()!=='')
    }
    render() {
        const minTime = new Date()
        minTime.setHours(11);
        const maxTime = new Date()
        maxTime.setHours(19);
        const {step} = this.state;
        let form = null;
        switch(step) {
            case 1:
                return <div>
                {this.props.modal.showModal &&
                <Modal show={this.props.modal.showModal} onHide={() => this.props.hide()}>
                    <Modal.Header className={'bg-light'} closeButton>
                        <Modal.Title id={'contained-modal-title-vcenter'}>
                            <h3 className={'center'}>Make a reservation</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <form onSubmit={(e) => this.nextStep(e)} className={'form'}>
                        <Modal.Body>
                            <p>*<i>Just a quick note that we might not be able to reply to emails during service, for immediate booking please contact the restaurant directly.</i>
                                <a className='btn btn-default bg-dark text-white    ' href='tel:0261012713'>Call Restaurant</a> </p>
                            <div className={'row'}>
                                <div className={'col-sm-12 col-md-6'}>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        required
                                        value={this.state.name}
                                        name='name'
                                        onChange={(e) => this.handleChange(e)}
                                        className={'form-control'} id={'name'} type="text"
                                        placeholder={'Your Name'}/>
                                </div>
                                <div className={'col-sm-12 col-md-6'}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        required
                                        value={this.state.email}
                                        name='email'
                                        onChange={(e) => this.handleChange(e)}
                                        className={'form-control'}
                                        type="email" id={'email'}
                                        placeholder={'Email'}/>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-sm-12 col-md-6'}>
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        required
                                        className={'form-control'}
                                        name='phone'
                                        onChange={(e) => this.handleChange(e)}
                                        type="text" id={'phone'}
                                        placeholder={'Phone Number'}/>
                                </div>
                                <div className={'col-sm-12 col-md-6'}>
                                    <label htmlFor="num_of_guests">Number of Guests:</label>
                                    <select
                                        required
                                        value={this.state.num_of_guests}
                                        name="num_of_guests"
                                        onChange={(e) => this.handleChange(e)}
                                        id="num_of_guests" className={'form-control'}>
                                        
                                        <option value="">Select number</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                    </select>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-sm-12 col-md-7'}>
                                    <label className={'col-sm-12'} htmlFor="date">Date:</label>
                                    <DatePicker 
                                                 withPortal
                                                 isClearable
                                                required
                                                dropdownMode={'select'}
                                                className={'form-control'}
                                                id={'date'}
                                                onChange={(e) => this.handleDateChange(e)}
                                                minDate={new Date()}
                                                selected={this.state.date}
                                                dateFormat='dd/MM/yyyy'
                                    />
                                </div>
                                <div className={'col-sm-3  col-md-4'}>
                                    <label className={'col-sm-12'} htmlFor="time">Time:</label>
                                    <DatePicker 
                                                
                                                isClearable 
                                                 withPortal
                                                required
                                                dropdownMode={'select'}
                                                className={'form-control'}
                                                onChange={(e) => this.handleTimeChange(e)}
                                                selected={this.state.time}
                                                id={'time'}
                                                showTimeSelectOnly
                                                showTimeSelect
                                                timeCaption="Time"
                                                minTime={minTime}
                                                maxTime={maxTime}
                                                dateFormat="h:mm aa"
                                    />
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-sm-12 col-md-12'}>
                                    <label className={'col-sm-12'} htmlFor="special_req">Special requests:</label>
                                    <textarea
                                        value={this.state.special_request}
                                        className={'form-control'}
                                        onChange={(e) => this.handleChange(e)}
                                        name="special_request" id="special_req"
                                        cols="10" rows="5" 
                                        >
                                        
                                </textarea>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                                <button className={'btn btn-success'} disabled={!this.state.isFormValid} onClick={ (e) =>this.nextStep(e)} >Continue</button>
                        </Modal.Footer>
                    </form>
                </Modal>
                }
            </div>  
            case 2 :
                return <ReservationSummary 
                            nextStep = {this.nextStep}
                            postResponse = {this.props.modal}
                            submit = {this.handleSubmit}
                            name={this.state.name}
                            email={this.state.email}
                            phone={this.state.phone}
                            date={`${this.state.date.getDate()} / ${this.state.date.getMonth()} / ${this.state.date.getFullYear()}`}
                            time={this.state.time.toLocaleTimeString('en-AU', { hour: 'numeric', minute: 'numeric', hour12: true })}
                            num_of_guests={this.state.num_of_guests}
                            special_request={this.state.special_request}
                            hideModal={this.props.hide} 
                            next={this.nextStep} 
                            previous={this.prevStep} 
                        /> 
            case 3 :
                if(this.props.modal.isLoading) {
                    return(
                        <ReservationSummary 
                            isLoading = {this.props.modal.isLoading}
                            nextStep = {this.nextStep}
                            postResponse = {this.props.modal}
                            submit = {this.handleSubmit}
                            name={this.state.name}
                            email={this.state.email}
                            phone={this.state.phone}
                            date={`${this.state.date.getDate()} / ${this.state.date.getMonth()} / ${this.state.date.getFullYear()}`}
                            time={this.state.time.toLocaleTimeString('en-AU', { hour: 'numeric', minute: 'numeric', hour12: true })}
                            num_of_guests={this.state.num_of_guests}
                            special_request={this.state.special_request}
                            hideModal={this.props.hide} 
                            next={this.nextStep} 
                            previous={this.prevStep} 
                        /> 
                    )
                }
                else{
                        return <BookingConfirmation 
                        goBack = {this.prevStep}
                        confirmation = {this.props.modal}
                    />
                }
               
            default:
                return null;
            }

    }
}


const mapStateToProps = state => {
    return {
        modal: state.booking,   
    }
};
const mapDispatchToProps = dispatch => {
    return {
        show: () => dispatch(_.showModal()),
        hide: () => dispatch(_.hideModal()),
        postBooking: (name, email, phone, date, time, num_of_guests, special_request) => dispatch(_.fetchFields(name, email, phone, date, time, num_of_guests, special_request))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
