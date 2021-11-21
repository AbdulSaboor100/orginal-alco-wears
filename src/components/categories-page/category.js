import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import { GlobalContext } from "../../context/context";
import './category.css';


function Category(){
    let {state , dispatch} = useContext(GlobalContext);
    return(
        <div className="main-category">
            <Row>
                <Col sm={12} md={4}>
                    <div className="main-naving">
                        <h4>Our Categories</h4>
                    </div>
                </Col>
                <Col sm={12} md={8}>
                    <div className="main-details">
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Category;