import React, { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import Carosel from "../carosel/carosel";
import './sports-gloves.css';
import DropDown from "../dropdown/dropdown";
import { Col, Row } from "reactstrap";
import { GlobalContext } from "../../context/context";
import { Link, useHistory, useParams } from "react-router-dom";
import Footer from "../footer/footer";
import { db, collection, getDocs } from "../../configs/firebase";
import LoadingScreen from "../loading-screen/loading-screen";


function SportsGloves() {
    let { state, dispatch } = useContext(GlobalContext);
    let [productId, setProductId] = useState([]);
    let [productHead, setProductHead] = useState('');
    let [loader, setLoader] = useState(false);
    let history = useHistory();
    const { id } = useParams();

    const sportsGlovesArr = [
        'cycling-gloves',
        'motorcycle-gloves',
        'ski-gloves',
        'golf-gloves',
        'dressing-gloves',
        'winter-gloves',
        'horse-riding-gloves',
        'weight-lifting-gloves',
    ]

    useEffect(async function () {
        setLoader(true)
        let dataRef = collection(db, id)
        let data = await getDocs(dataRef);
        let userClone = []
        data.forEach(function (item) {
            userClone.push(item)
            setProductHead(id)
            setLoader(false)
        })
        setProductId(userClone)

    }, [id])



    return (
        <div className="main-martial-arts6">
            <Header />
            <DropDown />
            <Carosel />

            <div className="main-products6">
                <Row>
                    <Col sm={12} md={4}>
                        <div className="products-categories6">
                            <div className="div1-6">
                                <h3>Our Categories</h3>
                            </div>
                            <div className="div2-6">
                                {
                                    state.sportsGloves.map(function (item, index) {
                                        return (
                                            <>
                                                <ul key={item + index}>
                                                    <li><Link to={`/sports-gloves/${sportsGlovesArr[index]}`}>{item}</Link></li>
                                                </ul>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={8}>
                        <div className="product-name6">
                            <h2>{productHead}</h2>
                        </div>
                        <div className={`${"ProductsArts6"} ${loader === true ? "setloaderclass" : ""}`}>
                            <Row>
                                {
                                    loader != true ? (
                                        productId.map(function (doc, index) {
                                            return (
                                                <>
                                                    <Col sm={12} md={4}> 
                                                        <div key={doc + index} className="products-here" onClick={()=>history.push(`/${productHead}/${doc.data().ProductID}`)}>
                                                            <img src={doc.data().URL} />
                                                            <h4>Product name : {doc.data().ProductName}</h4>
                                                            <h4 style={{ textAlign: 'left' }}>Product Id : {doc.data().ProductID}</h4>
                                                        </div>
                                                    </Col>
                                                </>
                                            )
                                        })
                                    ) : (
                                        <LoadingScreen />
                                    )
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default SportsGloves;