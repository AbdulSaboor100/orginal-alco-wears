import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import "./ProductsDetails.css";
import { GlobalContext } from "../../context/context";
import { useHistory, useParams } from "react-router-dom";
import { db, collection, getDocs, query, where } from "../../configs/firebase";
import img1 from "../../images/sports-wear.jpg";
import ReactImageMagnify from "react-image-magnify";
import Header from "../header/header";
import Carosel from "../carosel/carosel";
import DropDown from "../dropdown/dropdown";
import Footer from "../footer/footer";
import whatsAppImg from "../../images/whatsapp.png";

const ProductsDetails = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let [props, setProps] = useState({});
  let { product, details } = useParams();
  let [productsDetails, setProductsDetails] = useState([]);

  useEffect(async () => {
    let productClone = [];
    if ((details != undefined, product != undefined)) {
      let dataRef = query(
        collection(db, product),
        where("ProductID", "==", details)
      );
      let res = await getDocs(dataRef);
      res.forEach((item) => {
        productClone.push(item.data());
      });
      setProductsDetails(productClone);
    }
  }, [details]);

  function sendMessageOnWhatsapp() {}

  return (
    <>
      <Header />
      <DropDown />
      <Carosel />
      <div className="products_details">
        <Row>
          <Col md={6} sm={12}>
            <div className="image_hover">
              {productsDetails.map((item) => (
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: item.URL,
                    },
                    largeImage: {
                      src: item.URL,
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              ))}
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="description">
              {productsDetails.map((item) => (
                <div>
                  <h2>Ref : {item.ProductName}</h2>
                  <h4>Description : </h4>
                  <p>Type : {item.Type}</p>
                  <p>{item.Description}</p>
                  <button onClick={sendMessageOnWhatsapp}>
                    <img src={whatsAppImg} alt="whatsapp.svg" />
                    Contact Here On Whatsapp
                  </button>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default ProductsDetails;
