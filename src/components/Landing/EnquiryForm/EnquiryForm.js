import React, { Component } from 'react';

import * as _ from '../../../store/actions/actionCreator'

import { connect } from 'react-redux';

import './EnquiryForm.css'

class EnquiryForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    nextStep = () => {
        this.setState({ step: this.state.step + 1 })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchEnquiry(this.state.name, this.state.email, this.state.phone, this.state.message);
    }
    render() {
                if(!this.props.enq.message) {
                    return (
                        <div className='container bg-light'>
                            <h3 className="text-center py-1">Enquiry</h3>
                            <div className='row'>
                                <div className='col-sm-6 col-md-6'>
                                    <label htmlFor="name">Name:</label>
                                    <input onChange={(e) => this.handleChange(e)} value={this.state.name} name='name' className="form-control" type="text" id="name" placeholder="Name"></input>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <label htmlFor="email">Email:</label>
                                    <input onChange={(e) => this.handleChange(e)} value={this.state.email} name='email' className='form-control' type="email" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-8">
                                    <label htmlFor="phone">Phone:</label>
                                    <input onChange={(e) => this.handleChange(e)} value={this.state.phone} name='phone' className="form-control" type="text" id="phone" placeholder="Phone No."></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    <label htmlFor="mesaage">Message:</label>
                                    <textarea onChange={(e) => this.handleChange(e)} value={this.state.message} name='message' cols="10" rows="8" id="message" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mx-auto">
                               {this.props.enq.isLoading ? <button className="btn btn-success" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                            </button>:<input onClick={(e) => {this.handleSubmit(e)}} className="form-control btn btn-success m-2" type="submit" />
                                }
                                </div>
                            </div>
                        </div>
                    )
                }
                else {
                    return(
                        <div className='container bg-light nogap'>
                            <div className="row">
                                <div className='col-sm-12 col-md-12'>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <div className='card-title'>
                                                <i id='icon' className='fa fa-check-circle'></i>
                                                <h4 className='text-center'>{this.props.enq.message && this.props.enq.message.message}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
        }
}
const mapStatetoProps = state => {
    return {
        enq: state.enquiry
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchEnquiry: (name, email, phone, message) => dispatch(_.fetchEnquiry(name, email, phone, message))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EnquiryForm);