import React from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import './loading-screen.css';

const LoadingScreen = () => {
    return (
        <div className="main-loading-screen">
            <Row>
                <Col sm={12} md={12}>
                    <div className="loads">
                    
                        <Spinner color="primary">
                            Loading...
                        </Spinner>
                        
                    </div>
                     {/* Loading... */}
                </Col>
            </Row>
        </div>
    )
}

export default LoadingScreen;
