import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Urls} from "../../Support";
import axios from "axios";
import {Carousel} from "react-bootstrap";
class IndexImg extends Component {
     settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    getImages = ()=>{
/*        axios.get(Urls.indexImgUrl).then(response=>{
            response.data.data.forEach(item=> console.log(item))

        })*/
        fetch(Urls.indexImgUrl,{
            method: 'GET', // or 'PUT'
        }).then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data)
            data.data.forEach(item=>console.log(item))
        })
    }
    render() {
       this.getImages()
        return (
            <Carousel interval={2000} style={{textAlign:'center'}} variant="dark">
                <Carousel.Item>
                    <img src={'./img/indexImg1.png'} alt={'找不到图片'}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={'./img/img2.png'} alt={'找不到图片'}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        );
    }
}

export default IndexImg;