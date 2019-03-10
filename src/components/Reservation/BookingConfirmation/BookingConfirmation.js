import React, {Component} from 'react';

import './BookingConfirmation.css'

import {Modal} from 'react-bootstrap'


class  BookingConfirmation extends Component {
    state ={
        show: true
    }
    toggleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        let messsage = this.props.confirmation.message;
        let confirmation = null;
        if (this.props.confirmation.message !== null) {
            confirmation = (
                <Modal  show={this.state.show} onHide={this.toggleShow}>
                    <Modal.Header className="bg-success" closeButton>
                        <Modal.Title>
                        <p className="text-white text-center">{messsage.message}</p>
                        </Modal.Title>
                    </Modal.Header>
                </Modal>
            )
        }
        if (this.props.confirmation.error !== null) {
            confirmation = (
                <Modal show={this.state.show} onHide={this.toggleShow}>
                    <Modal.Header className="bg-danger" closeButton>
                        <Modal.Title>
                        <p className="text-white text-center">
                            Could not process the request. Please try again and complete all the required fields.
                        </p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer className='bg-light'>
                    <button className='btn btn-info mr-auto' onClick={(e) =>  this.props.goBack(e)}>Go Back</button>
                    </Modal.Footer>
                </Modal>
            )
        }
        return (
            <div className='row' id='confirmation'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
                {confirmation}
            </div>
        </div>
        )
    }
}

export default BookingConfirmation;
