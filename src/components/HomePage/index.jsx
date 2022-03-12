import React from 'react';
import {UserContext} from '../../App'
import {Button, Col, Layout, Row} from 'antd';
import IndexImg from "./IndexImg";
import {CategoryMenu} from "./CategoryMenu";
import './index.css'
import {ProductCategoryDetail} from "./ProductCategoryDetail";
import {useNavigate} from "react-router";

const {Header, Content, Footer} = Layout;

export function HomePage() {


    let navigate = useNavigate();
    const goShoppingCart = ()=>{
        navigate('/personalCenter')
    }
    return (
        <UserContext.Consumer>
            {
                (context) => (
                    <Layout className="layout" style={{height: '100%'}}>
                        <Header>
                            {/*<div className="logo" />*/}

                            <Row>
                                <Col span={2}>
                                    <div style={{float: 'left', color: 'white'}}> 欢迎 {context.username}</div>
                                </Col>
                                <Col span={2}>
                                    <Button onClick={goShoppingCart}> 前往购物车</Button>
                                </Col>
                                {/*                    <Col span={4}>
                                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['6']}>
                                            <Menu.Item style={{right:0}} key={5}>{`nav ${123}`}</Menu.Item>
                                            <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
                                        </Menu>
                                    </Col>*/}
                            </Row>
                        </Header>
                        <Content style={{height: '25rem', padding: '2rem 50px',}}>
                            <Row>
                                <Col offset={2} span={4}>
                                    <CategoryMenu/>
                                </Col>
                                <Col offset={2} span={8}>
                                    <IndexImg/>
                                </Col>
                            </Row>
                        </Content>
                        <Content>
                            <ProductCategoryDetail/>
                        </Content>

                        <Footer style={{textAlign: 'center'}}>fotter</Footer>
                    </Layout>
                )
            }
        </UserContext.Consumer>

    );

}
