import React, {Component, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {Urls} from "../../../Support";
import {useNavigate} from "react-router";

export function AddUserAddress(){

    const[state,setState1] = useState(false)
    let navigate = useNavigate();
    const onFinish = (values: any) => {

        fetch(Urls.addUserAddressUrl, {
            method: 'POST',
            credentials: "include",
            body:JSON.stringify(values),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(r=>r.json()).then(data=>{
            if(data.code===500){
                alert(data.msg)
                navigate('/login')
            }else{
                alert('添加成功')
                setState1(!state)
            }
        })
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Form
                initialValues={{ commonAddress: true }}
                onFinish={onFinish}
                onFinishFailed = {onFinishFailed}
            >
                <Form.Item name="receiverName" label={'收件人'}  rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="receiverMobile" label={'手机号'}  rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item   name="province" label={'省份'}  rules={[{ required: true }]}>
                    <Input/>
                </Form.Item>
                <Form.Item   name="city" label={'城市'}  rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item   name="address" label={'详细地址'}  rules={[{ required: true }]}>
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item   name="commonAddress" valuePropName="checked" rules={[{ required: true }]} >
                    <Checkbox >设置为默认地址</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>

    );
}

