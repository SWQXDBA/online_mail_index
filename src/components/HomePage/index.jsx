import React, {Component} from 'react';
import {UserContext} from '../../App'
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';

const { Header, Content, Footer } = Layout;
export class HomePage extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {
                    (context) => (
                        <Layout className="layout" style={{height:'100%'}}>
                            <Header style={{backgroundColor:'orange'}}>
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
                            <Content style={{ padding: '2rem 50px',backgroundColor:'wheat' }}>
                                <Row>
                                    <Col offset={2} span={4}>
                                        <Menu theme="dark" mode="vertical " defaultSelectedKeys={['0']}>
                                            {
                                                 new Array(5).fill(null).map((v,index,_)=>{
                                                    return  <Menu.Item key={index}>{`商品 ${index}`}</Menu.Item>
                                                })
                                            }
                            {/*                <Menu.Item key={0}>{`nav ${123}`}</Menu.Item>
                                            <Menu.Item key={1}>{`nav ${1}`}</Menu.Item>*/}
                                        </Menu>
                                    </Col>
                                </Row>
                            </Content>
                            <Content style={{ padding: '2rem 50px',backgroundColor:'wheat' }}>
                                <Row>
                                    <Col offset={2} span={4}>
                                        <Menu theme="dark" mode="vertical " defaultSelectedKeys={['0']}>
                                            {
                                                new Array(5).fill(null).map((v,index,_)=>{
                                                    return  <Menu.Item key={index}>{`商品 ${index}`}</Menu.Item>
                                                })
                                            }
                                            {/*                <Menu.Item key={0}>{`nav ${123}`}</Menu.Item>
                                            <Menu.Item key={1}>{`nav ${1}`}</Menu.Item>*/}
                                        </Menu>
                                    </Col>
                                </Row>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>
                    )
                }
            </UserContext.Consumer>

        );
    }
}
