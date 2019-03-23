import React from 'react';

import './Contact.css'

import EnquiryForm from '../Landing//EnquiryForm/EnquiryForm'

const Contact = props => {
    return  (
        <div className='container my-2'>
            <div className='col-sm-12 col-md-12 col-lg-12 contact '>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Contact</h3>
                     </div>
                    <div className='card-body'> 
                        <p>Address: 17 Kennedy St Kingston, ACT 2604</p>
                        <p>Phone: +61 02 6101 2713 <a className='btn btn-default bg-dark text-white' href='tel:+61 02 6101 2713'><i className='fa fa-phone p-1'></i>Call</a> </p>
                        <p>Email: teambananaleaf@gmail.com <a className='btn btn-default bg-dark text-white' href='mailto:teambananaleaf@gmail.com'><i className='fa fa-envelope p-1'></i>Email</a> </p>
                        <EnquiryForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
