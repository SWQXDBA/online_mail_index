import React, {Component, useEffect, useState} from 'react';

import {Button, Checkbox, Col, Form, Input, Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import {AddUserAddress} from "./AddUserAddress";
import {ShowAddress} from "./ShowAddress";

export function UserAddress(){

    let[component,setComponent] = useState(<ShowAddress/>)

    const selectComponent = (c)=>{
        setComponent(c)
    }
    return(
        <>
            <Row>
                <Col offset={8}>
                    <Button onClick={()=>selectComponent(<AddUserAddress/>)}>添加收货地址</Button>
                </Col>
                <Col>
                    <Button onClick={()=>selectComponent(<ShowAddress/>)}>收获地址列表</Button>
                </Col>
            </Row>
            <Row >
                <Col style={{border:'1px solid'}} offset={6} span={12} >
                    {component}
                </Col>
            </Row>
        </>




    )

}

