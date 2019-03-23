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
    
                    <div className={'col-sm-12 col-md-12 m-1'}>
                        <h3 className="text-center">Address</h3>
                        <p className="text-center">17 Kennedy St Kingston <br />ACT  2604 </p>
                        {<Map 
                              isMarkerShown
                              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZmJlI4KhNjcusIMptnE8E80nXGic2jpc"
                              loadingElement={<div style={{ height: `100%` }} />}
                              containerElement={<div style={{display:'block', height: `300px`, width: `100%` }} />}
                              mapElement={<div style={{ height: `100%` }} />}
                        />}
    
                    </div>
                    </div>
                    <div className='row'>
                    </div>
                <div className='col-sm-12 col-md-12'>
                    <p className='text-center'>	&copy; 2019 Banana Leaf Restaurant</p>
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
