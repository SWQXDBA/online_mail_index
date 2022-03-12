import React, {Component, useEffect, useState} from 'react';
import {Urls} from "../Support";
import {Col, Layout, Row} from "antd";
import {useNavigate} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import './index.css'
function PersonalCenter(){

    let [shoppingCarts,setShoppingCarts] = useState([])

    let navigate = useNavigate()
    const requestSource = () => {

        fetch(Urls.getAllShoppingCartUrl, {
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

        })

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

                        </Sider>
                        <Content>
                            {
                                shoppingCarts?.map(item=>{
                                    const {productName,skuAttribute,id,cartNum} = item
                                    return <Row key={id}>
                                        <Col  style={{backgroundColor:'pink'}}>
                                            <p  style={{padding:0,margin:0}}>{`${productName}`}</p>
                                            <p  style={{padding:0,margin:0}}>{`${skuAttribute}`}</p>
                                        </Col>

                                        <Col offset={1}  className={'centerCol'} style={{backgroundColor:'pink',textAlign:"center"}}>
                                            <p> {`数量: ${cartNum}`}</p>
                                        </Col>
                                    </Row>
                                })
                            }
                        </Content>
                    </Layout>

                </Layout>

            </>

        );

}

export default PersonalCenter;