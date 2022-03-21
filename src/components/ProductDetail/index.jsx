import React, {useEffect, useState} from 'react';
import './index.css'

import {useLocation, useNavigate, useParams,} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import {Button, Col, InputNumber, Layout, Row} from "antd";
import Sider from "antd/es/layout/Sider";
import {Urls} from "../Support";
import {HomeOutlined, HomeTwoTone} from "@ant-design/icons";
import {useSearchParams} from "react-router-dom";


function ProductDetail() {
    let urlParams = useParams();

    let navigate = useNavigate()
    let [imgs, setImgs] = useState()
    let [product, setProduct] = useState({name: ''})
    let [sku, setSku] = useState()
    let [buyCount,setBuyCount] = useState(1)
    const selectSku = (sku) => {
        setSku(sku)
    }
    let location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();

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
    const buyCountChange = (val)=>{
        buyCount = val
    }
    const addShoppingCart = ()=> {
        if(sku==null){
            alert("未选择套餐!")
            return
        }
        fetch(Urls.addShoppingCartUrl, {
            method: 'POST', // or 'PUT'
            credentials : 'include',
            body: JSON.stringify({
                skuId:sku.id,
                cartNum:buyCount
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
           return response.json()
        }).then(data=>{
            if(data.code===500){
                alert(data.msg)
                const urlSearchParams = new URLSearchParams();
                urlSearchParams.append("path",'/productDetail/'+product.id)
                navigate('/login?'+urlSearchParams)
/*                let location = useLocation();
                let [searchParams, setSearchParams] = useSearchParams();

                setSearchParams({path:'/productDetail/'+product.id})
                navigate('/login'+location.search)*/
            }else{
                alert('添加成功!')
            }
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
                <Header style={{height: '5rem'}}>
                    <Row>
                        <Col className={'centerCol'}>
                            <HomeTwoTone style={{fontSize:'2rem'}} onClick={()=>navigate('/')} />
                        </Col>
                    </Row>

                </Header>
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
                                    <Col span={4} style={{
                                        height: '5rem',
                                        backgroundColor: 'green',
                                        textAlign: 'center',
                                        lineHeight: '5rem'
                                    }}>
                                        {`销量: ${product.soldNum}`}
                                    </Col>
                                </Row>
                                <Row gutter={[0, 0]} style={{height: '5rem', backgroundColor: 'white'}}>
                                    <Col offset={0} span={4} className={'centerCol'}>
                                        <p>选择套餐</p>
                                    </Col>
                                    {
                                        product.skus?.map(sku => {
                                            return <Col key={sku.id} span={4} className={'centerCol'}>
                                                <Button
                                                    onClick={() => selectSku(sku)}
                                                >{sku.name}</Button>

                                            </Col>
                                        })
                                    }

                                </Row>

                                <Row style={{backgroundColor: 'white'}}>
                                    <Col offset={0} span={4} className={'centerCol'}>
                                        <p>套餐信息:</p>
                                    </Col>
                                    {

                                        sku ?
                                            <Col  className={'centerCol'}>
                                                <span>{`  ${sku.attribute} `} </span>
                                                &nbsp;
                                                <span>{`  库存: ${sku.stock} `} </span>
                                                &nbsp;
                                                <span >{`  原价: ${sku.originalPrice} `} </span>
                                                &nbsp;
                                                <span >{`  折扣: ${sku.discountsStr} `} </span>
                                                &nbsp;
                                            </Col>
                                        :<></>
                                    }

                                </Row>
                                <Row style={{backgroundColor: 'white'}}>
                                    <Col span={4} className={'centerCol'}>
                                        <span>{'购买数量'}</span>
                                    </Col>
                                    <Col span={4} className={'centerCol'}>
                                        <InputNumber min={1} defaultValue={1}
                                                     onChange={buyCountChange}/>
                                    </Col>
                                    <Col span={4} className={'centerCol'}>
                                        <Button onClick={addShoppingCart} >
                                            加入购物车
                                        </Button>
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