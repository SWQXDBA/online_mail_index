import React, {Component, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";

export function AddUserAddress(){


    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
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

