import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import './ProductsDetails.css';
import ReactImageZoom from 'react-image-zoom';
import { GlobalContext } from '../../context/context';
import { useParams } from 'react-router-dom';
import { db, collection, getDocs, query, where } from "../../configs/firebase";

const ProductsDetails = () => {
    let { state, dispatch } = useContext(GlobalContext)
    let [props, setProps] = useState({});
    let { product, details } = useParams();
    let [productsDetails , setProductsDetails] = useState([]);

    useEffect(async () => {
        let productClone = [];
        if (details != undefined, product != undefined) {
            let dataRef = query(collection(db, product), where("ProductID", "==", details))
            let res = await getDocs(dataRef);
            res.forEach((item) => {
                productClone.push(item.data());
            })
            setProductsDetails(productClone);
        }
    }, [details])
    // const props = { width: 400, height: 250, zoomWidth: 500, img: { imgState } };

    return (
        <div className='products_details'>
            <Row>
                <Col md={6} sm={12}>
                    <div className='image_hover'>
                        {/* <ReactImageZoom {...props} /> */}
                        {
                            productsDetails.map((item)=>{
                                return <img src={item.URL} />
                            })
                        }
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <div className='description'></div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductsDetails