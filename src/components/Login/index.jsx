import React, {Component} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import 'antd/dist/antd.variable.min.css';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './index.css'
import axios from "axios";
import {Urls} from "../Support";


export class Login extends Component {
    doLogin = (username, password) => {
        axios.post("http://localhost:8080/test/test",{username:username,password:password})
        return
        const urlSearchParams = new URLSearchParams()

        urlSearchParams.set("username",username)
        urlSearchParams.set("password",password)
        console.log(urlSearchParams)
 /*       const FormData = require('form-data');
        const form = new FormData()

        form.append("username",username)
        form.append("password",password)*/
        const promise = axios.post(Urls.loginUrl, urlSearchParams)
       // const promise = axios.post(Urls.loginUrl, "username="+username+"&password="+password)
        promise.then(response => {
            if (response.data.code === 200) {
                alert('登录成功!');
            } else {
                alert(response.data.msg);
            }
        })
    }
    onFinish = (values: any) => {

        const {username, password} = values

        this.doLogin(username, password)

    };

    onFinishFailed = (values: any) => {
        alert('请确认用户名和密码合法');
    };

    state = {
        username: '',
        password: ''
    }

    render() {
        return (

            <div className="login-form">
                {/*        <img src={'svg/phone.svg'} alt={''}/>*/}
                <Form
                    name="normal_login"

                    initialValues={{remember: true}}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >

                    <Form.Item
                        name="username"
                        rules={[{type: 'string', message: '必须为string类型'}
                            , {min: 6, message: '必须大于6位'}
                            , {max: 15, message: '最大为15位'}
                            , {required: true, message: '必须输入密码'}
                            , {pattern: '[A-Za-z0-9_\\-\u4e00-\u9fa5]+', message: '请输入英文或数字或中文字符'}]}

                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{type: 'string', message: '必须为string类型'}
                            , {min: 6, message: '必须大于6位'}
                            , {max: 15, message: '最大为15位'}
                            , {required: true, message: '必须输入密码'}
                            , {pattern: '[A-Za-z0-9]+', message: '请输入大小写英文或数字'}]
                        }

                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        Or <a href="./register">注册!</a>
                    </Form.Item>
                </Form>
            </div>

        );
    }


}

