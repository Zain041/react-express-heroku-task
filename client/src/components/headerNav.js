import React, { Component } from 'react'

import {NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './header.css';


export default class HeaderNav extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                                                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            
                                {
                                    localStorage.getItem('jwtToken')? 
                                    <Nav className="mr-auto">
                                    <NavLink className="menu-item" to='/signout'>Logout</NavLink>
                                    </Nav>
                                    :
                                    <>
                                    <Nav className="mr-auto">
                                    <NavLink className="menu-item" to='/login'>Login</NavLink>
                                    </Nav>
                                    <Nav className="mr-auto">
                                
                                <NavLink className="menu-item" to='/signup'>Sign Up</NavLink>
                               

                            </Nav>
                            </>
                                }
                                 
                                

                           
                            
                            <Nav className="mr-auto">
                                 
                                <NavLink className="menu-item" to='/'>Home</NavLink>

                            </Nav>
                          
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </>
        )
    }
}
