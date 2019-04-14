import React from 'react';

import './EasterSpecial.css';

import {Link} from 'react-router-dom';

import {Alert} from 'react-bootstrap';



const EasterSpecial = ( props ) => {
    return (
        <Alert   id='easter-alert' variant='dark'>
            We are open Easter including Sunday for your Easter weekend craving!<strong><Link to='/menu/festive'>{' '}More Information</Link></strong>
        </Alert>
    )
}
export default EasterSpecial;

