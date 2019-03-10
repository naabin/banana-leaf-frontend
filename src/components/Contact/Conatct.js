import React from 'react';

import './Contact.css'



const Contact = props => {
    return  (
        <div className='container my-2'>
            <div className='col-sm-12 col-md-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Contact</h3>
                     </div>
                    <div className='card-body'> 
                        <p>Address: 17 Kennedy St Kingston, ACT 2604</p>
                        <p>Phone: +61 02 6101 2713</p>
                        <p>Email: bananaleaf@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
