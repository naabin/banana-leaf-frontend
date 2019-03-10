import React from 'react'
import './Footer.css';

import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'


const Map = withScriptjs(withGoogleMap((props) => {
    return(
        (<GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -35.3162, lng: 149.1407 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -35.3162, lng: 149.1407 }} />}
        </GoogleMap>
        )
    )
}))


const Footer = (props) => {
    return (
        <footer className="page-footer font-small  special-color-dark pt-4" id={'footer'}>
            <hr style={{ backgroundColor: 'white' }} />
            <div className={'row'}>

                <div className={'col-sm-12 col-md-4 pl-2'}>
                    <h4>Address</h4>
                    <p>17 Kennedy St Kingston <br />ACT  2604 </p>
                    {<Map 
                          isMarkerShown
                          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZmJlI4KhNjcusIMptnE8E80nXGic2jpc"
                          loadingElement={<div style={{ height: `100%` }} />}
                          containerElement={<div style={{ height: `200px`, width: `300px` }} />}
                          mapElement={<div style={{ height: `100%` }} />}
                    />}

                </div>
                <div className={'col-sm-12 col-md-4 pl-2'}>
                    <h4>Follow us on</h4>
                    <button className={'btn btn-danger btn-lg m-2'}><i className={'fa fa-youtube'}></i></button>
                    <button className={'btn btn-primary btn-lg  m-2'}><i className={'fa fa-facebook'}></i></button>
                    <button className={'btn btn-danger btn-lg  m-2 '}><i className={'fa fa-instagram'}></i></button>

                </div>
                <div className="col-sm-12 col-md-4 mb-4">
                    <h3>Subscribe for newsletter</h3>
                    <form className='form-inline'>
                        <input className="form-control form-control-sm mr-3 w-75" placeholder="Email" type="text" />
                        <div className="input-group-append">
                            <button className="btn btn-warning btn-sm m-1 btn-outline-white mx-auto" type="button">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    )
};

export default Footer;