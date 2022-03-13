import React, {Component, useEffect, useState} from 'react';

import {Button, Checkbox, Col, Form, Input, Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router";
import {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import {AddUserAddress} from "./AddUserAddress";
import {ShowAddress} from "./ShowAddress";

export function UserAddress(){


    return(
        <>
            <ShowAddress/>
            <AddUserAddress/>
        </>


    )

}

