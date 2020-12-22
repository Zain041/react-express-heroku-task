import React from 'react';
import { Link } from "react-router-dom";
import logo from '.././logo.svg';
import '.././App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap';


const Header = (props) => {

    return (
        <div className="App mb-3 mt-5">

<Navbar className="bg-light">
  <Navbar.Brand ><Link className="text-secondary" to="/">{props.title}</Link></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Link to="/" className="  nav-link">{props.link1}</Link>
  
    
    </Navbar.Text>
    <Navbar.Text>
   
    <Link to="/create" className="text-primary">{props.link2}</Link>
    
    </Navbar.Text>

  </Navbar.Collapse>
</Navbar>
            
                
           
       
        </div>
    );
}

export default Header;
