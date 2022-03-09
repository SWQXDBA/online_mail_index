import React, {Component} from 'react';
import './index.css'

import {
    useParams,
} from "react-router";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Col, Layout, Row} from "antd";
import Sider from "antd/es/layout/Sider";

function ProductDetail (){
    let urlParams = useParams();
    console.log(urlParams.productId)
    return (

        <div className={'ProductDetail'}>
            <Layout style={{height:'70rem'}}>
                <Header style={{height:'5rem'}}>header</Header>
                <Layout style={{height:'10rem',backgroundColor:'pink'}}>
                    <Sider style={{backgroundColor:'green'}}>left sidebar</Sider>
                    <Content >
                        <Row style={{height:'7rem'}}/>
                        <Row style={{height:'58rem',backgroundColor:'white'}}>
                            <Col offset={4} span={8} style={{backgroundColor:'aliceblue',height:'100%',}}>
                                <Row style={{backgroundColor:'red',height:'3rem'}}/>
                                <Row style={{color:'white', height:'25rem',width:'25rem',backgroundColor:'black'}}>
                                    商品图片
                                </Row>
                            </Col>
                            <Col  span={12} style={{backgroundColor:'purple',height:'100%'}}>
                                <Row style={{height:'5rem',backgroundColor:'white'}}>
                                    <Col offset={6} span={8} style={{height:'5rem',backgroundColor:'green',textAlign:'center',lineHeight:'5rem'}}>
                                        商品名称

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