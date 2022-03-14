import React, {Component, useEffect, useState} from 'react';
import {Button, Col, Row, Select} from "antd";
import {Urls} from "../../Support";
import {useNavigate} from "react-router";
import {InputGroup} from "react-bootstrap";


const { Option } = Select;

export function ShoppingCart (){
    let [shoppingCarts,setShoppingCarts] = useState([])
    let [address,setAddress] = useState([])
    let navigate = useNavigate()
    let [addressId,setAddressId] = useState(0)


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
        fetch(Urls.getAllUserAddressUrl, {
            method: 'GET', // or 'PUT'
            credentials : 'include'
        }).then(response => {
            return response.json()
        }).then(data => {
            if(data.code===500){
                alert(data.msg)
                navigate('/login')
            }else{
                const addresses = data.data;
                setAddress(addresses)
                if(addresses?.length>0){
                    setAddressId(addresses[0].id)
                }
            }

        })
    }
    const placeOrder = ()=>{

        fetch(Urls.placeOrderUrl,{
            method:"POST",
            credentials: 'include',
            body:JSON.stringify({addressId}),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json()).then(data=>{
            if(data.code===200)
            {
                alert('下单成功!')
            }
            else {
                alert('下单失败!请稍后再试')
            }
        })
    }
    const deleteCart = (id)=>{
        if(window.confirm('确认要删除吗?')){
            fetch(Urls.deleteShoppingCartUrl+`?id=${id}`, {
                method: 'DELETE', // or 'PUT'
                credentials : 'include'
            }).then(response => {
                return response.json()
            }).then(data => {
                if(data.code===500){
                    alert(data.msg)
                    // navigate('/login')
                }else{
                    alert(data.msg)
                    requestSource()
                }

            })

        }
    }
    const totalPrice = ()=>{
        let price = 0
        shoppingCarts?.forEach(item=>price+=item.productPrice)
        return price
    }

    const handlerChange = (value)=>{
        setAddressId(address[value].id)
    }
    useEffect(() => {
        requestSource()
    }, [])
        return (
            <Row >
                <Col style={{border:'1px solid'}} offset={6} span={12} >
                    <Row>
                        <Col className={'centerCol'}>
                            <p>请选择收货地址</p>
                        </Col>
                        <Col className={'centerCol'}>
                            <Select style={{width:'30rem'}} defaultValue={0} onChange={handlerChange}>
                                {
                                    address?.map((item,index)=>{
                                        const {id,receiverName,receiverMobile,province,city,area} = item
                                       return <Option  key = {index} value={index}>{`${receiverName},${receiverMobile},${province},${city}，${area}`}</Option>
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    {
                        shoppingCarts?.map(item=>{
                            const {productName,skuAttribute,id,cartNum,productPrice} = item
                            return <Row key={id}>
                                <Col span={1} >
                                    <p>{`商品:`}</p>
                                    <p>{`套餐:`}</p>
                                </Col>
                                <Col span={4}  >
                                    <p>{`${productName}`}</p>
                                    <p>{`${skuAttribute}`}</p>
                                </Col>

                                <Col  offset={2} span={4}    className={'centerCol'} style={{textAlign:"center"}}>
                                    <p style={{height:'5rem',lineHeight:'5rem'}}> {`数量: ${cartNum}`}</p>
                                </Col>
                                <Col offset={2} span={4}    className={'centerCol'} style={{textAlign:"center"}}>
                                    <p style={{height:'5rem',lineHeight:'5rem'}}> {`价格: ${productPrice}`}</p>
                                </Col>
                                <Col  span={4}   className={'centerCol'} style={{textAlign:"center"}}>
                                    <Button onClick={()=>deleteCart(id)} danger> 删除</Button>
                                </Col>
                            </Row>
                        })
                    }
                    <Row>
                        <Col offset={13} span={4} className={'centerCol'} style={{textAlign:"center"}}>
                            <p style={{height:'5rem',lineHeight:'5rem'}}> {`总价: ${totalPrice()}`}</p>
                        </Col>
                        <Col   span={4}  className={'centerCol'}>
                            <Button type="primary" onClick={placeOrder}>下单</Button>
                        </Col>
                    </Row>

                </Col>
            </Row>


        );

}

