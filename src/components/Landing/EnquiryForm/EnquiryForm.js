import React,{Component} from 'react';

import {connect} from 'react-redux';

import './EnquiryForm.css'

class  EnquiryForm extends Component {
    state = {
        step : 1,
        name: '',
        email: '',
        phone: '',
        message: ''
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();

    }
    render(){
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
                    <input className="form-control btn btn-success m-2" type="submit" />
                </div>
            </div>
        </div>
        )
    }

}
export default EnquiryForm;