import React from "react";
import { Col, Row } from "reactstrap";
import './footer.css';
import Logo from '../../images/alcologo.png'

function Footer(){
    return(
        <div className="main-footer">
            <Row>
                <div className="main-all-info">
                <Col sm={12} md={12}>
                    <div className="main-area">
                        {/* <img src={Logo} /> */}
                        <h2>Alco Wears</h2>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className="footer-navbar">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Gallery</li>
                            <li>Inquairy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className="contact-number">
                        <p> +92 333 6765560</p>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className="contact-email">
                        <p>info@sialkothawks.com</p>
                    </div>
                </Col>
                <Col sm={12} md={12}>
                    <div className="location">
                        <p>Near Punjab Rice Mills Daska Road,Sialkot-Pakistan</p>
                    </div>
                </Col>
                </div>
                <Col sm={12} md={12}>
                    <div className="main-footer-area">
                        <p>© 2021 Alco Wears. All rights reserved. Designed and Developed By AbdulSaboor</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;