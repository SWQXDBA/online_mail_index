import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Urls} from "../../../Support";

import {Col,Row} from "antd";

export function ShowAddress(){
    let [userAddresses,setUserAddresses] = useState([])
    let navigate = useNavigate()
    const requestSource = () => {

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
                setUserAddresses(data.data)
            }

        })

    }
    useEffect(requestSource,[])
    return (
        <>
            {
                userAddresses?.map(item=>{
                    const {id,receiverName,receiverMobile,province,city,area,address,postCode,status,commonAddress} = item
                 return   <Row key={id}>
                        <Col span={24}>
                            <p>{`${receiverName}`}</p>
                        </Col>
                    </Row>
                })
            }
        </>
    )
}