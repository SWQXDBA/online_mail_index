import React, {Component, useEffect, useState} from 'react';

import {Col, Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import {ShoppingCart} from "./ShoppingCart";
import {UserAddress} from "./UserAddress";
function PersonalCenter(){


    let[content,setContent] = useState(<></>)

    const changeContent = (content)=>{
        setContent(content)
    }

    const requestSource = () => {

/*        fetch(Urls.getAllShoppingCartUrl, {
            method: 'GET', // or 'PUT'
            credentials : 'include'
        }).then(response => {
            return response.json()
        }).then(data => {
            if(data.code===500){
                alert(data.msg)
                navigate('/login')
            }else{
                setShoppingCarts(data.data)
            }

        })*/

    }

    useEffect(() => {
        requestSource()
    }, [])

        return (
            <>
                <Layout>
                    <Header>
                        <Row>
                            <Col>
                                {`你好`}
                            </Col>
                        </Row>
                    </Header>
                    <Layout>
                        <Sider style={{backgroundColor:'red'}}>
                            <Menu
                                defaultSelectedKeys={['1']}
                                mode="inline"
                                theme="dark"
                            >
                                <Menu.Item onClick = {()=>{setContent(<ShoppingCart/>)}}>
                                    购物车
                                </Menu.Item>
                                <Menu.Item onClick = {()=>{setContent(<UserAddress/>)}}>
                                    收货地址
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            <Row style={{height:'15rem'}}/>
                            <Row >
                                <Col style={{border:'1px solid'}} offset={6} span={12} >
                                    {content}
                                </Col>
                            </Row>

                        </Content>
                    </Layout>

                </Layout>

            </>

        );

}

export default PersonalCenter;