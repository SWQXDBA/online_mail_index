import React, {Component} from 'react';
import './index.css'

import {
    useParams,
} from "react-router";

function ProductDetail (){
    let urlParams = useParams();
    console.log(urlParams.productId)
    return (<div className={'ProductDetail'}>
        {``}window.history
    </div>)
}


export default ProductDetail;