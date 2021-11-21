import React from "react";
import { Col, Row } from "reactstrap";
import './header.css';
import Logo from '../../images/alcologo.png';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="main-header">
            <Row>
                <Col sm={12} md={4}>
                    <div className="logo-div">
                        <img src={Logo}  />
                    </div>
                </Col>
                <Col sm={12} md={8}>
                    <div className="navbar-div">
                         <ul>
                             <li><Link to="/">Home</Link>  </li>
                             <li><Link to="#"> About Us </Link></li>
                             <li><Link to="#">Contact</Link></li>
                         </ul>

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;