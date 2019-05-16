import React , {Component } from 'react';

import {Modal} from 'react-bootstrap'

import './OpeningHours.css';

class OpeningHours extends Component {
    constructor(props){
        super(props);
        let date = this.getTimeString();
        this.state = {
            now: new Date(),
            weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: date,
            openModal: false
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            const date = this.getTimeString();
            this.setState({ time: date })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    getTimeString = () => {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }
    openOpeningHours = () => {
        this.setState({ openModal: !this.state.openModal })
    }
    render(){
        let openingHours = <Modal show={this.state.openModal} onHide={this.openOpeningHours}>
        <Modal.Header closeButton>
            <Modal.Title>
                <h3>Opening hours</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table className='table table-sm borderless'>
                <tbody>
                    <tr className={this.state.weekday[this.state.now.getDay()] === 'Monday' ? 'bg-dark  text-white' : null}>
                        <td>Monday</td>
                        <td>5-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] === 'Tuesday' ? 'bg-dark text-white' : null}>
                        <td>Tuesday</td>
                        <td>5-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] === 'Wednesday' ? 'bg-dark text-white' : null} >
                        <td>Wednesday</td>
                        <td>12-2pm, 5-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] === 'Thursday' ? 'bg-dark text-white' : null} >
                        <td>Thursday</td>
                        <td>12-2pm, 5-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] === 'Friday' ? 'bg-dark text-white' : null} >
                        <td>Friday</td>
                        <td>12-2pm, 5-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] === 'Saturday' ? 'bg-dark text-white' : null} >
                        <td>Saturday</td>
                        <td>12-2pm, 5-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] === 'Sunday' ? 'bg-dark text-white' : null} >
                        <td>Sunday</td>
                        <td>CLOSED</td>
                    </tr>
                </tbody>
            </table>
        </Modal.Body>
    </Modal>
        return(
            <p className='openingCalendar p-5 text-center'><strong>{`It's ${this.state.weekday[this.state.now.getDay()]} ${this.state.time}`}</strong>
            <button className='btn btn-default bg-dark text-white mx-auto d-flex justify-content-center ' onClick={() => this.openOpeningHours()}><i className='fa fa-calendar p-1'></i>Opening hours</button>
            {this.state.openModal ? openingHours : null}
        </p>
        )
    }
}

export default OpeningHours;
