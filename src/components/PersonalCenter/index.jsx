import React, {Component, useEffect, useState} from 'react';
import {Urls} from "../Support";
import {Col, Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import './index.css'
import {ShoppingCart} from "./ShoppingCart";
function PersonalCenter(){




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
                                <Menu.Item>
                                    1
                                </Menu.Item>
                                <Menu.Item>
                                    2
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            <Row style={{height:'15rem'}}/>
                            <Row >
                                <Col style={{border:'1px solid'}} offset={6} span={12} >
                                    <ShoppingCart/>
                                </Col>
                            </Row>

                        </Content>
                    </Layout>

                </Layout>

            </>

        );

}

export default PersonalCenter;