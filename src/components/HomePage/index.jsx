import React, {Component} from 'react';
import {UserContext} from '../../App'
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import IndexImg from "./IndexImg";
import {CategoryMenu} from "./CategoryMenu";
import './index.css'
import {ProductCategoryDetail} from "./ProductCategoryDetail";
const { Header, Content, Footer } = Layout;
export class HomePage extends Component {



    render() {
        return (
            <UserContext.Consumer>
                {
                    (context) => (
                        <Layout className="layout" style={{height:'100%'}}>
                            <Header >
                                {/*<div className="logo" />*/}

                                <Row>
                                    <Col span={4}>
                                        <div style={{float:'left',color:'white'}}> 欢迎 {context.username}</div>
                                    </Col>
                {/*                    <Col span={4}>
                                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['6']}>
                                            <Menu.Item style={{right:0}} key={5}>{`nav ${123}`}</Menu.Item>
                                            <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>
                                        </Menu>
                                    </Col>*/}
                                </Row>
                            </Header>
                            <Content style={{ height: '25rem',padding: '2rem 50px', }}>
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

                            <Footer style={{ textAlign: 'center' }}>fotter</Footer>
                        </Layout>
                    )
                }
            </UserContext.Consumer>

        );
    }
}
