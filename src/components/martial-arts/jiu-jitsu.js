import React, { useContext, useEffect, useState } from "react";
import Header from "../header/header";
import Carosel from "../carosel/carosel";
import './martial-arts.css';
import DropDown from "../dropdown/dropdown";
import { Col, Row } from "reactstrap";
import { GlobalContext } from "../../context/context";
import { Link , useParams } from "react-router-dom";
import Footer from "../footer/footer";
import { db ,collection, getDocs } from "../../configs/firebase";
import LoadingScreen from "../loading-screen/loading-screen";


function JiuJitsu(){
    let {state , dispatch} = useContext(GlobalContext);
    let [productId , setProductId] = useState([]);
    let [productHead , setProductHead] = useState('');
    let [loader , setLoader] = useState(false);
    const {id} = useParams();
    
    const jiuJitsuArr = [
        'jiu-jitsu-bags',
        'jiu-jitsu-belts',
        'jiu-jitsu-gi',

    ]

    useEffect(async function(){
        let dataRef = collection(db, id)
        let data = await getDocs(dataRef);
        let userClone = []
        data.forEach(function(item){
            userClone.push(item)
            setProductHead(item.data().ProductName)
        })
        setProductId(userClone)
        
    },[id])

    useEffect(function(){
        setLoader(true)
        setTimeout(function(){
            setLoader(false)
        },3000)
    },[])

    return(
        <>
        {/* { */}
            {/* productId != '' ? (<LoadingScreen />) : ( */}
                <div className="main-martial-arts">
            <Header />
            <DropDown />
            <Carosel />
            
           <div className="main-products">
                <Row>
                    <Col sm={12} md={4}>
                        <div className="products-categories">
                            <div className="div1">
                                <h3>Our Categories</h3>
                            </div>
                            <div className="div2">
                                {
                                    state.jiuJitsu.map(function(item,index){
                                        return(
                                            <>
                                                <ul key={item+index}>
                                                    <li><Link to={`/jiu-jitsu/${jiuJitsuArr[index]}`}>{item}</Link></li>
                                                </ul>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col> 
                    <Col sm={12} md={8}>
                        <div className="product-name">
                            <h2>{productHead}</h2>
                        </div>
                        <div className="ProductsArts">
                        <Row>
                            {
                                productId.map(function(doc,index){
                                    return(
                                        <>
                                            <Col sm={12} md={4}>
                                            <div key={doc+index} className="products-here">
                                                <img src={doc.data().URL} />
                                                <h4>{doc.data().ProductName}</h4>
                                                <h4 style={{textAlign:'left'}}>Product Id : {doc.data().ProductID}</h4>
                                            </div>
                                            </Col>
                                        </>
                                    )
                                })
                            }
                            </Row>
                        </div>
                    </Col> 
                </Row>
           </div>
           <Footer />
        </div>
            {/* )  */}
        {/* } */}
        </>
    )
}

export default JiuJitsu;