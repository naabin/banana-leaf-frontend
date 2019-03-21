import React, { Component } from 'react'

import { Modal } from 'react-bootstrap'


import { connect } from 'react-redux'


import './Landing.css'
import * as _ from '../../store/actions/actionCreator'
// import Loading from "../Loading/Loading";
import Reservation from "../Reservation/Reservation";
import AboutUs from './AboutUs/AboutUs';
// import EnquiryForm from './EnquiryForm/EnquiryForm';


class Landing extends Component {
    constructor(props){
        super(props);
        let date = this.getTimeString();
        this.state={
            now: new Date(),   
            weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: date,
            openModal: false
        }
    }
    getTimeString = () => {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }
    componentDidMount() {
        this.props.specialOFD();
        this.timer = setInterval(()=>{
            const date = this.getTimeString();
            this.setState({time:date})
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    showModal = (e) => {
        e.preventDefault();
        this.props.showModal();
    };
    openOpeningHours = () => {
        this.setState({openModal: !this.state.openModal})
    }
    render() {
        // const specialOfTheDay = this.props.dinner && this.props.dinner.dinnerMenu && this.props.dinner.dinnerMenu[0].mains.filter(item => {
        //     return item.is_special_ofd === true
        // });
        let item = null;
        let openingHours = <Modal show={this.state.openModal} onHide={this.openOpeningHours}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>Opening hours</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table table-sm borderless'>
                <tbody>
                    <tr className={this.state.weekday[this.state.now.getDay()] ==='Monday' ? 'bg-dark  text-white' : null}>
                        <td>Monday</td>
                        <td>6-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] ==='Tuesday' ? 'bg-dark text-white' : null}>
                        <td>Tuesday</td>
                        <td>6-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] ==='Wednesday' ? 'bg-dark text-white' : null} > 
                        <td>Wednesday</td>
                        <td>12-2pm, 6-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] ==='Thursday' ? 'bg-dark text-white' : null} >
                        <td>Thursday</td>
                        <td>12-2pm, 6-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] ==='Friday' ? 'bg-dark text-white' : null} >
                        <td>Friday</td>
                        <td>12-2pm, 6-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] ==='Saturday' ? 'bg-dark text-white' : null} >
                        <td>Saturday</td>
                        <td>12-2pm, 6-9pm</td>
                    </tr>
                    <tr className={this.state.weekday[this.state.now.getDay()] ==='Sunday' ? 'bg-dark text-white' : null} >
                        <td>Sunday</td>
                        <td>CLOSED</td>
                    </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
        // if (this.props.dinner.isLoading) {
        //     item = <Loading />;
        // }
        // else if (this.props.dinner && specialOfTheDay) {
        //     item = specialOfTheDay.map(sp => {
        //         return (
        //             <div key={sp.pk} className='row'>
        //                 <div className='col-sm-12 col-md-8 nogap bg-light'>
                            /* <Card>
                                <Card.Header>
                                    <h4 className='text-center'>Special of the day</h4>
                                </Card.Header>
                                <Carousel>
                                    {sp.image.map(image => (
                                        <Carousel.Item key={image.pk}>
                                            <img src={image.image} alt='special-images' className='w-100' />
                                            <Carousel.Caption>
                                                <h4>{sp.name}</h4>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Card> */
                        // </div>
                        /* <div className='col-sm-12 col-md-4 nogap'>
                            <EnquiryForm/>
                        </div> */
                     item =    <div className='col-sm-12 col-md-12 nogap'>
                            <AboutUs/>
                        </div>
                    // </div>

        //         )
        //     });
        // }
        // else {
        //     item = <div className={'text-center'}>
        //         <h1>Something went wrong. Sorry for the inconvenience.</h1>
        //     </div>
        // }
        return (
            <>
                <div className=''>
                    <div id={'welcome'} className={'col-sm-12  col-md-12 col-lg-12'}>
                        <h1> BANANA LEAF</h1>
                        <h5>SRI LANKAN CUISINE IN KINGSTON CANBERRA</h5>
                        <div id="buttons" className='btn-group-justified'>
                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button onClick={(e) => this.showModal(e)} className={'btn btn-default bg-white btn-lg'}><i className="fa fa-check"></i> Book Now
                            </button>
                                {this.props.modal.showModal &&  <Reservation />  }
                            </div>

                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button className=" btn btn-default bg-white btn-lg" onClick={() => document.location.href='tel:+61 02 6101 2713'}><i className='fa fa-phone'></i> Make a phone call</button>
                            </div>
                            <div className='col-sm-12 col-md-6 btn-group m-1'>
                                <button className="btn btn-default bg-white btn-lg" onClick={() => document.location.href='https://www.google.com/maps/place/Banana+Leaf+Restaurant/@-35.3162165,149.1385411,17z/data=!3m1!4b1!4m5!3m4!1s0x6b164d68d25b41c3:0x9a5743b343a6073d!8m2!3d-35.3162209!4d149.1407298'}><i className="fa fa-map-marker"></i> Get directions</button>
                            </div>
                        </div>
                        <div className='col-sm-12 my-4 col-md-4 justify-content-center'>
                            <p className='openingCalendar p-5 text-center'><strong>{`It's ${this.state.weekday[this.state.now.getDay()]} ${this.state.time}`}</strong>
                            <button className='btn btn-default bg-dark text-white mx-auto d-flex justify-content-center ' onClick={()=>this.openOpeningHours()}><i className='fa fa-calendar p-1'></i>Opening hours</button>
                            {this.state.openModal ? openingHours : null}
                            </p>
                        
                        </div>
                        <div id='sideNav' className='side'>
                        <button id="tripAdvisor" onClick={() => window.open('https://www.tripadvisor.com.au/Restaurant_Review-g255057-d1082008-Reviews-Banana_Leaf-Canberra_Australian_Capital_Territory.html','_blank')}className={'btn btn-default bg-info btn-lg m-2'}>Give us a feedback on <i className="fa fa-tripadvisor float-right p-2"></i></button>
                        <button id="facebook" onClick={() => window.open('https://www.facebook.com/BananaLeafCanberra', '_blank')} className={'btn btn-primary btn-lg  m-2'}>Like us on Facebook<i className={'fa fa-facebook-square float-right p-2 '}></i></button>
                        <button id="instagram" onClick={() => window.open('https://www.instagram.com/bananaleaf.canberra/', '_blank')} className={'btn btn-danger btn-lg  m-2'}>Follow us on Instagram<i className={'fa fa-instagram float-right p-2 '}></i></button>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    {item}
                </div>

            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        dinner: state.dinner,
        modal: state.booking
    }
};
const mapDispatchToProps = dispatch => {
    return {
        specialOFD: () => dispatch(_.fetchDinnerMenu()),
        showModal: () => dispatch(_.showModal())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);