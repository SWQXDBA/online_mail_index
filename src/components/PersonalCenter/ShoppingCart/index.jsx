import React, {Component, useEffect, useState} from 'react';
import {Button, Col, Row} from "antd";
import {Urls} from "../../Support";
import {useNavigate} from "react-router";

export function ShoppingCart (){
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

    useEffect(() => {
        requestSource()
    }, [])
        return (
            <>
                {
                    shoppingCarts?.map(item=>{
                        const {productName,skuAttribute,id,cartNum} = item
                        return <Row key={id}>
                            <Col span={4}  style={{backgroundColor:'pink'}}>
                                <p>{`${productName}`}</p>
                                <p>{`${skuAttribute}`}</p>
                            </Col>

                            <Col offset={4}   className={'centerCol'} style={{textAlign:"center"}}>
                                <p style={{height:'5rem',lineHeight:'5rem'}}> {`数量: ${cartNum}`}</p>
                            </Col>
                            <Col offset={4}  className={'centerCol'} style={{textAlign:"center"}}>
                                <Button onClick={()=>deleteCart(id)} danger> 删除</Button>
                            </Col>
                        </Row>
                    })
                }
            </>
        );

}

