import React, {Component} from 'react'

import {Modal} from 'react-bootstrap'

import './ReservationSummary.css'

class ReservationSummary extends Component {
    state = {
        show : true
    }
    toggleModal = () => {
        this.setState({show: !this.state.show})
        this.props.hideModal();
    }
    render(){
        console.log(this.props.date);
        return(
            <div>
                <form>
                <Modal show={this.state.show} onHide={() => this.toggleModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h3 className='center'>Reservation details</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className='col-sm-12 col-md-12'>
                            <p>Name: <strong>{this.props.name}</strong></p>
                            <p>Email: <strong>{this.props.email}</strong></p>
                            <p>Phone: <strong>{this.props.phone}</strong></p>
                            <p>Date: <strong>{this.props.date}</strong></p>
                            <p>Time: <strong>{this.props.time}</strong></p> 
                            <p>Number of People: <strong>{this.props.num_of_guests}</strong> </p>
                            <p>Special request: <strong>{this.props.special_request}</strong> </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-info mr-auto' onClick={this.props.previous}>Go Back</button>
                        {this.props.isLoading ? <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                        </button> : <button className='btn btn-success' onClick={(e) => { this.props.submit(e)}}>Submit</button> }
                    </Modal.Footer>
                </Modal>
                </form>
            </div>
        )
    }
}

export default ReservationSummary;