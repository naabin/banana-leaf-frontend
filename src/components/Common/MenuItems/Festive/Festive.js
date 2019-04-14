import React from 'react'

import './Festive.css'


const Festive = props => {
    return(
        <div className='col-sm-12 col-md-8  p-2'>
            <div className='container' id='festive'>
            <h3 className='text-center m-1'>Easter holiday trading hours</h3>
            <table className='table table-sm justify-content-center'>
                <tbody>
                    <tr >
                        <td>Friday(Good Friday)</td>
                        <td>12-2pm, 6-9pm</td>
                    </tr>
                    <tr  >
                        <td>Saturday</td>
                        <td>12-2pm, 6-9pm</td>
                    </tr>
                    <tr>
                        <td>Sunday(Easter Sunday)</td>
                        <td>6-9pm</td>
                    </tr>
                    <tr>
                        <td>Monday(Easter Monday)</td>
                        <td>6-9pm</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h5>Easter Special will be updated shortly.</h5>
            </div>
            </div>
        </div>  
    )
}

export default Festive;