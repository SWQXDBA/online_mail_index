import React, {useEffect, useState} from 'react';
import './index.css'

import {useParams,} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import {Col, Layout, Row} from "antd";
import Sider from "antd/es/layout/Sider";
import {Urls} from "../Support";

function ProductDetail() {
    let urlParams = useParams();

    let [imgs, setImgs] = useState()
    let [product,setProduct] = useState({name:''})

    const requestSource = () => {

        fetch(Urls.productImgByIdUrl + `?id=${urlParams.productId}`, {
            method: 'GET', // or 'PUT'
        }).then(response => {
            return response.json()
        }).then(data => {
            setImgs(data.data)
        })
        fetch(Urls.productByIdUrl + `?id=${urlParams.productId}`, {
            method: 'GET', // or 'PUT'
        }).then(response => {
            return response.json()
        }).then(data => {
            setProduct(data.data)
        })
    }

    useEffect(() => {
        requestSource()
    }, [])
    let mainImg
    let mainImgDom
    if (imgs !== undefined) {
        imgs.forEach(item => {
            if (item.isMain === 1) {
                mainImg = item
            }
        })
    }

    if (mainImg === undefined) {
        mainImgDom = <></>
    } else {

        mainImgDom =

            <img
                style={{height: '100%', width: '100%'}}

                src={`/img/${mainImg.url}`}

                alt={'图片未找到'}/>

    }

    return (

        <div className={'ProductDetail'}>
            <Layout style={{height: '70rem'}}>
                <Header style={{height: '5rem'}}>header</Header>
                <Layout style={{height: '10rem', backgroundColor: 'pink'}}>
                    <Sider style={{backgroundColor: 'green'}}>left sidebar</Sider>
                    <Content>
                        <Row style={{height: '4rem'}}/>
                        <Row style={{height: '58rem', backgroundColor: 'white'}}>
                            <Col offset={4} span={8} style={{backgroundColor: 'aliceblue', height: '100%',}}>
                                <Row style={{backgroundColor: 'red', height: '3rem'}}/>
                                <Row style={{color: 'white', height: '25rem', width: '25rem'}}>
                                    <Col offset={2} span={24} style={{
                                        height: '25rem',
                                        backgroundColor: 'green',
                                        textAlign: 'center',

                                    }}>
                                        {mainImgDom}
                                    </Col>

                                </Row>
                            </Col>
                            <Col span={12} style={{backgroundColor: 'purple', height: '100%'}}>
                                <Row style={{height: '5rem', backgroundColor: 'white'}}>
                                    <Col offset={6} span={8} style={{
                                        height: '5rem',
                                        backgroundColor: 'green',
                                        textAlign: 'center',
                                        lineHeight: '5rem'
                                    }}>
                                        {product.name}
                                    </Col>
                                </Row>
                            </Col>'
                        </Row>
                        main content

                    </Content>
                </Layout>

            </Layout>
        </div>

    )
}


export default ProductDetail;