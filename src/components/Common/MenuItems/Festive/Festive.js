import React from 'react'

import './Festive.css'


const Festive = props => {
    return(
        <>
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
            </div>
        </div> 
        <div>
            <h1 className='text-center'>Easter specials</h1>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-4 d-flex align-items-stretch'>
                <div className='card'>
                    <img className='card-img-top' src='https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/56757402_2613370595345171_4237995671510056960_o.jpg?_nc_cat=107&_nc_ht=scontent.fcbr2-1.fna&oh=455156462280473eed4786a9c26192c7&oe=5D40A032' alt='Easter special'/>
                    <div className='card-body'>
                        <h5 className='card-title'><span className='float-left'>Prawn Kotthu Rotti</span>{'//'}29.90(D)</h5>
                        <p className='card-text text-justify'>
                            A classic! A favourite around this time of the year. Strips of thin rotti tossed with assorted strips of vegetables and Sri Lankan spiced induced seafood gravy. Served with gently cooked King Prawns
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-4 d-flex align-items-stretch '>
                <div className='card'>
                    <img className='card-img-top' src='https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/57583135_2613370602011837_1487313940147863552_o.jpg?_nc_cat=100&_nc_ht=scontent.fcbr2-1.fna&oh=c355ff1817e4ba1f890b72b3d7eb4ac4&oe=5D2F2D3B' alt='Easter special'/>
                    <div className='card-body'>
                        <h5 className='card-title'><span className='float-left'>Seafood Mix Grill</span>{'//'}31.90(D)(G)</h5>
                        <p className='card-text text-justify'>
                            Sri Lankan alternative. Tossed Squids, Fish, Prawns, Scallops, Spanish onions and colour capsicum in a tropical sauce.
                            Served with steamed Basmati rice
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-4 d-flex align-items-stretch '>
                <div className='card'>
                    <img className='card-img-top' src='https://scontent.fcbr2-1.fna.fbcdn.net/v/t1.0-9/56850388_2613370612011836_2973191024756654080_o.jpg?_nc_cat=102&_nc_ht=scontent.fcbr2-1.fna&oh=e727b5f3483ed23ac1c5a38df2676569&oe=5D3DABA3' alt='Easter special'/>
                    <div className='card-body'>
                        <h5 className='card-title'><span className='float-left'>Tasmanian Salmon</span>{'//'}33.90(D)(G)</h5>
                        <p className='card-text text-justify'>
                        Grilled to perfection an all-time favourite
                        Served with assorted seasonal vegetables and topped with a mild chilli mango sauce.
                        </p>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Festive;