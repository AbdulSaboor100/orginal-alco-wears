import React, { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import Carosel from "../carosel/carosel";
import './taekwondo.css';
import DropDown from "../dropdown/dropdown";
import { Col, Row } from "reactstrap";
import { GlobalContext } from "../../context/context";
import { Link, useParams } from "react-router-dom";
import Footer from "../footer/footer";
import { db, collection, getDocs } from "../../configs/firebase";
import LoadingScreen from "../loading-screen/loading-screen";


function Taekwondo() {
    let { state, dispatch } = useContext(GlobalContext);
    let [productId, setProductId] = useState([]);
    let [productHead, setProductHead] = useState('');
    let [loader , setLoader] = useState(false);
    const { id } = useParams();

    const taekwondoArr = [
        'taekwondo-bags',
        'taekwondo-belts',
        'taekwondo-clothing',
        'taekwondo-groin-guards',
        'taekwondo-shin-guards',
        'taekwondo-suits',
        'taekwondo-head-guards',
        'taekwondo-mouth-guards',
        'taekwondo-pads-and-sheilds',
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
        <div className="main-martial-arts4">
            <Header />
            <DropDown />
            <Carosel />

            <div className="main-products4">
                <Row>
                    <Col sm={12} md={4}>
                        <div className="products-categories4">
                            <div className="div1-4">
                                <h3>Our Categories</h3>
                            </div>
                            <div className="div2-4">
                                {
                                    state.taekwondo.map(function (item, index) {
                                        return (
                                            <>
                                                <ul key={item + index}>
                                                    <li><Link to={`/taekwondo/${taekwondoArr[index]}`}>{item}</Link></li>
                                                </ul>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={8}>
                        <div className="product-name4">
                            <h2>{productHead}</h2>
                        </div>
                        <div className={`${"ProductsArts4"} ${loader === true ? "setloaderclass" : ""}`}>
                        <Row>
                            {
                                loader != true ? (
                                    productId.map(function(doc,index){
                                        return(
                                            <>
                                                <Col sm={12} md={4}>
                                                <div key={doc+index} className="products-here">
                                                    <img src={doc.data().URL} />
                                                    <h4>Product name : {doc.data().ProductName}</h4>
                                                    <h4 style={{textAlign:'left'}}>Product Id : {doc.data().ProductID}</h4>
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

export default Taekwondo;