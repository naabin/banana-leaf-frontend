import React from 'react'

import './ReservationPage.css'
import Reservation from '../Reservation';


const ReservationPage = (props) => {
    return (
        <div className='col-sm-12 col-md-12 p-4 d-flex justify-content-center'>
            <button onClick={(e) => props.show()} className={'btn btn-dark border-none  btn-lg'}><i className="fa fa-check"></i> Book a Table</button>
            {props.show ? <Reservation/> : null}
        </div>

    )
}
export default ReservationPage