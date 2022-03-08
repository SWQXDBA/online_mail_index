import React, {Component} from 'react';
import './index.css'
import {UserContext} from '../../App'
/*import {
    NavLink,
    Outlet,
    useSearchParams,
} from "react-router-dom";*/
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
function ProductDetail (){
    let location = useLocation();

    console.log(location.state.productId)
    return (<div className={'ProductDetail'}>
        {``}window.history
    </div>)
}


export default ProductDetail;