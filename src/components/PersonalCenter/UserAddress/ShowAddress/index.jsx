import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Urls} from "../../../Support";

import {Col, Row} from "antd";

export function ShowAddress() {
    let [userAddresses, setUserAddresses] = useState([])
    let navigate = useNavigate()
    const requestSource = () => {

        fetch(Urls.getAllUserAddressUrl, {
            method: 'GET', // or 'PUT'
            credentials: 'include'
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.code === 500) {
                alert(data.msg)
                navigate('/login')
            } else {
                setUserAddresses(data.data)
            }

        })

    }
    useEffect(requestSource, [])
    return (
        <>
            {
                userAddresses?.map(item => {
                    const {
                        id,
                        receiverName,
                        receiverMobile,
                        province,
                        city,
                        area,
                        address,
                        postCode,
                        status,
                        commonAddress
                    } = item
                    return <Row key={id}>
                        <Col className={"centerCol"} span={2}>
                            <p>{`收货人: ${receiverName}`}</p>
                        </Col>
                        <Col className={"centerCol"}  span={4}>
                            <p>{`手机号: ${receiverMobile}`}</p>
                        </Col>
                        <Col className={"centerCol"}  span={2}>
                            <p>{`省份: ${province}`}</p>
                        </Col>
                        <Col className={"centerCol"}  span={2}>
                            <p>{`城市: ${city}`}</p>
                        </Col>
                        <Col className={"centerCol"}  span={2}>
                            <p>{`地区: ${area}`}</p>
                        </Col>
                        <Col className={"centerCol"}  span={4}>
                            <p>{`详细地址: ${address}`}</p>
                        </Col>
                        <Col className={"centerCol"}  span={2}>
                            <p>{`邮编: ${postCode}`}</p>
                        </Col>
                        <Col className={"centerCol"}  span={3}>
                            <p>{`是否默认: ${commonAddress===1?"是":"否"}`}</p>
                        </Col>

                    </Row>
                })
            }
        </>
    )
}