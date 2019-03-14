import React, {Component} from 'react';
import {Navbar, Nav, Dropdown,} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Navigation.css'


class Navigation extends Component{
    state={
        expanded: false
    }
    setExpanded = () => {
        this.setState({expanded: !this.state.expanded})
    }
    closeNav = () => {
        this.setState({expanded: false})
    }

    render(){
        return (
            <Navbar onToggle={() => this.setExpanded()} expanded={this.state.expanded}  expand='xl' className="col-sm-12" sticky={this.props.show ? 'top ' : null} >
                <Navbar.Brand><NavLink className={'nav-link'} id={'Link'} to='/'>
                    <img src={require("../../assets/logo.jpg")}className={'img'} alt=""/></NavLink></Navbar.Brand>
                <Navbar.Toggle className='bg-white p-4 rounded-0 navbar-toggler'/>
                <Navbar.Collapse>  
                    <Nav  className={'mr-auto'} id={'nav'}>  
                        <Dropdown id="collapsible-nav-dropdown">
                            <Dropdown.Toggle className='col-sm-12 text-white'  variant=''  id="Link"><i className='fa fa-book'></i> Menu</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <NavLink onClick={this.closeNav} style={{textAlign:'center'}}  id='Link' to='/menu/lunch' className='nav-link'>Lunch</NavLink>
                                <NavLink onClick={this.closeNav} style={{textAlign:'center'}}  id='Link' to='/menu/dinner' className='nav-link'>Dinner</NavLink>
                                <NavLink onClick={this.closeNav} style={{textAlign:'center'}}  id='Link' to='/menu/special' className='nav-link'>Festive Special</NavLink>
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink onClick={this.closeNav} style={{textAlign:'center'}}  className={'nav-link text-white'} id={'Link'} to={'/booking'}><i className='fa fa-paper-plane'></i> Reservation</NavLink>
                        <NavLink onClick={this.closeNav} style={{textAlign:'center'}}  className={'nav-link text-white'} id={'Link'} to={'/gallery'}><i className='fa fa-image'></i> Gallery</NavLink>
                        <NavLink onClick={this.closeNav} style={{textAlign:'center'}} className={'nav-link text-white'} id={'Link'} to={'/contact'}  ><i className="fa fa-address-book"></i> Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

};
export default Navigation;
