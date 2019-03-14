import React from 'react';


const OpeningHours = (props) => {
    return (
        <div className='row d-flex justify-content-center'>
            <div className='col-sm-12 col-md-5 col-lg-4'>
            <h5 className='text-center'>Opening Hours</h5>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>Days</th>
                            <th scope='col'>Lunch</th>
                            <th scope='col'>Dinner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>closed</td>
                            <td>6pm - till late</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>closed</td>
                            <td>6pm - till late</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>12pm-2pm</td>
                            <td>6pm-till late</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>12pm-2pm</td>
                            <td>6pm-till late</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>12pm-2pm</td>
                            <td>6pm-till late</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>12pm-2pm</td>
                            <td>6pm-till late</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>closed</td>
                            <td>closed</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={(e) => props.showModal(e)} className={'btn btn-block btn-default bg-dark text-white  btn-lg mx-auto'}><i className="fa fa-check"></i> Book Now
                            </button>
            </div>
        </div>
    )
}

export default OpeningHours;