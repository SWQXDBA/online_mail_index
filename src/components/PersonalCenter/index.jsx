import React, {useEffect, useState} from 'react';

import {Col, Layout, Menu, Row} from "antd";
import {useLocation, useNavigate} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import {ShoppingCart} from "./ShoppingCart";
import {UserAddress} from "./UserAddress";
import {HomeTwoTone} from "@ant-design/icons";
import {useSearchParams} from "react-router-dom";
import {Urls} from "../Support";

function PersonalCenter() {


    let [content, setContent] = useState(<ShoppingCart/>)

    const changeContent = (content) => {
        setContent(content)
    }
    let location = useLocation();



    const requestSource = () => {

        fetch(Urls.isLoginUrl, {
            method: 'GET', // or 'PUT'
            credentials: 'include'
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.code === 500) {
                const urlSearchParams = new URLSearchParams();
                urlSearchParams.append("path",'/personalCenter')
                 navigate('/login?' + `${urlSearchParams}`)
            }
        })

    }

    let navigate = useNavigate();
    useEffect(() => {
        requestSource()
    }, [])

    return (
        <>
            <Layout>
                <Header>
                    <Row>
                        <Col className={'centerCol'}>
                            <HomeTwoTone style={{fontSize: '2rem'}} onClick={() => navigate('/')}/>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider style={{backgroundColor: 'red'}}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            theme="dark"
                        >
                            <Menu.Item key="1" onClick={() => {
                                setContent(<ShoppingCart/>)
                            }}>
                                购物车
                            </Menu.Item>
                            <Menu.Item key="2" onClick={() => {
                                setContent(<UserAddress/>)
                            }}>
                                收货地址
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                        <Row style={{height: '15rem'}}/>
                        {content}
                    </Content>
                </Layout>

            </Layout>

        </>

    );

}

export default PersonalCenter;