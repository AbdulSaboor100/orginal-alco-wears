import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import './carosel.css';
import Img1 from '../../images/img1.jpg';
import Img2 from '../../images/img2.jpg';
import Img3 from '../../images/img3.jpg';
import { GlobalContext } from "../../context/context";


var i = 0

function Carosel(){
    let {state , dispatch} = useContext(GlobalContext);
    let [imgState , setImgState] = useState(-1)
    const imgArr = [
        Img1,
        Img2,
        Img3
    ]

    // function nextBtn(){
    //     i +=1;
    //     if(i > 2){
    //         i = 0;
    //     }
    //     setImgState(i)
    // }

    // function backBtn(){
    //     i -=1;
    //     if(i < 0){
    //         i = 1;
    //         i+=1
    //     }

    //     setImgState(i)
    // }

    useEffect(function(){
        setInterval(function(){
                i +=1;
                if(i > 2){
                    i = 0;
                }
                setImgState(i)
        },3000)
    },[])
    

    return(
        <div className="main-slider" >
            <Row>
                <Col sm={12} md={12}>
                    <div className="custom-carusel">
                        <img  src={imgArr[i]} />
                        <div className="btns">
                            {/* <div className="btn1">
                                <button onClick={backBtn}>back</button>
                            </div>
                            <div className="btn2">
                                <button onClick={nextBtn}>Next</button>
                            </div> */}

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default Carosel;