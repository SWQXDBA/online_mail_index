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
    state = {
        img:[]
    }
    getImages = () => {
        /*        axios.get(Urls.indexImgUrl).then(response=>{
                    response.data.data.forEach(item=> console.log(item))

                })*/
        fetch(Urls.indexImgUrl, {
            method: 'GET', // or 'PUT'
        }).then(response => {
            return response.json()
        }).then(data => {

            this.setState({img: data.data})
        })
    }

    jump = (productId)=>{
        alert(productId)
    }
    componentDidMount(){
        this.getImages()
    }
    render() {

        return (
            <Carousel interval={2000} style={{textAlign: 'center'}} variant="dark">
                {
                    this.state.img.map(item => {
                        const {imgUrl, imgBackgroundColor, productId, categoryId, indexType, seq} = item
                        return <Carousel.Item key={seq} style={{backgroundColor: `${imgBackgroundColor}`}}>
                            <img onClick={()=>this.jump(productId)} src={`${Urls.IMGUrl}${imgUrl}`} alt={'找不到图片'}/>
                        </Carousel.Item>
                    })
                }

            </Carousel>


        );
    }
}

export default IndexImg;