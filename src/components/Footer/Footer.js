import React, {Component} from 'react'

import {connect} from 'react-redux';
import * as _ from '../../store/actions/actionCreator';

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


class Footer extends Component {
    state = {
        email: ''
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        this.props.fetchSubs(this.state.email);
    }
    render(){
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
                        <h3>Follow us on</h3> 
                        <button onClick={() => window.open('https://www.tripadvisor.com.au/Restaurant_Review-g255057-d1082008-Reviews-Banana_Leaf-Canberra_Australian_Capital_Territory.html','_blank')}className={'btn btn-default bg-white btn-lg  m-2'}><i className="fa fa-tripadvisor fa-2x"></i></button>
                        <button onClick={() => window.open('https://www.facebook.com/BananaLeafCanberra', '_blank')} className={'btn btn-primary btn-lg  m-2'}><i className={'fa fa-facebook-square fa-2x'}></i></button>
                        <button onClick={() => window.open('https://www.instagram.com/bananaleaf.canberra/', '_blank')} className={'btn btn-danger btn-lg  m-2'}><i className={'fa fa-instagram fa-2x'}></i></button>
    
                    </div>
                    <div className="col-sm-12 col-md-4 mb-4">
                        <h3>Subscribe for newsletter</h3>
                        <form  className='form-inline'>
                            <input value={this.state.email} name='email' onChange={(e) => this.handleChange(e)} className="form-control form-control-sm mr-3 w-75" placeholder="Email" type="text" />
                            <div className="input-group-append">
                                <button onClick={(e) => this.handleSubmit(e)} className="btn btn-warning btn-sm m-1 btn-outline-white mx-auto" type="button">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </footer>

        )
    }
};
const mapStateToProps = state => {
    return {
        subscribe: state.subs
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchSubs: (email) => dispatch(_.fetchSubscribe(email))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
