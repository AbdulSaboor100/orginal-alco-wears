import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import "./carosel.css";
import Img1 from "../../images/alco_banner1.jpg";
import Img2 from "../../images/alco_banner2.jpg";
import Img3 from "../../images/alco_banner3.jpg";
import { GlobalContext } from "../../context/context";

var i = 0;

function Carosel() {
  let { state, dispatch } = useContext(GlobalContext);
  let [imgState, setImgState] = useState(-1);
  const imgArr = [Img1, Img2, Img3];

  useEffect(function () {
    setInterval(function () {
      i += 1;
      if (i > 2) {
        i = 0;
      }
      setImgState(i);
    }, 3000);
  }, []);

  return (
    <div className="main-slider">
      <Row>
        <Col sm={12} md={12}>
          <div className="custom-carusel">
            <img
              style={{
                maxWidth: "100%",
                width: "100%",
                height: "100%",
                display: "block",
              }}
              src={imgArr[i]}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Carosel;
