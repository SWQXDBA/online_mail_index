import React, {Component} from 'react';
import {Col, Menu} from "antd";
import {Urls} from "../../Support";
import './index.css'

export class CategoryMenu extends Component {
    state = {
        categories: [],
        categoryDisplay:'none',
        categoryContent:<></>
    }

    getCategories = () => {
        /*        axios.get(Urls.indexImgUrl).then(response=>{
                    response.data.data.forEach(item=> console.log(item))

                })*/
        fetch(Urls.categoriesUrl, {
            method: 'GET', // or 'PUT'
        }).then(response => {
            return response.json()
        }).then(data => {
            this.setState({categories: data.data})
        })
    }

    componentDidMount() {
        this.getCategories()
    }

    //准备隐藏子分类详情
    tryToHideSub = () => {
        this.state.categoryDisplay = 'none'
        setTimeout(()=>{
            if(this.state.categoryDisplay === 'none'){
                this.setState({
                    categoryContent:<></>
                })
            }
        },300)

    }
    getSubCategories(parentId, categories2) {


        const filtered = categories2.filter(item => {

            return item.parentId === parentId && item.level !== 1
        })
        if (filtered.size === 0) {
            return <></>
        }

        return <Menu

            mode="horizontal">
            {
                filtered.map(item => {
                    const {name, level, parentId, icon, slogan, picture, backgroundColor} = item
                    return <Menu.Item

                        onClick={() => {
                        }}
                        style={{}} key={name}>
                        >
                        {`子分类:${name}`}
                        {` ${name}`}
                    </Menu.Item>
                })
            }
        </Menu>

    }

    render() {
        const categories = this.state.categories;

        return (
            <>
                <Menu
                    onClick={(i) => {

                    }}
                    mode="vertical " defaultSelectedKeys={['0']}>
                    {
                        categories.filter(item => item.level === 1)
                            .map(item => {

                                const {id, name, level, parentId, icon, slogan, picture, backgroundColor} = item

                                return <Menu.Item
                                    onMouseEnter={() => {
                                        this.setState({
                                            categoryDisplay:'block',
                                            categoryContent:this.getSubCategories(item.id, categories)
                                        })

                                    }}
                                    onMouseLeave={this.tryToHideSub}
                                    onClick={() => {
                                    }}
                                    style={{position: 'relative'}} key={name}>
                                    <img style={{height: '2rem', width: '2rem'}} src={`svg/${icon}`} alt={'未找到图片'}/>
                                    {` ${name}`}

                                </Menu.Item>
                            })
                    }
                    {/*                <Menu.Item key={0}>{`nav ${123}`}</Menu.Item>
                                            <Menu.Item key={1}>{`nav ${1}`}</Menu.Item>*/}
                </Menu>
                <div
                    onMouseEnter={()=>{
                        //阻止隐藏子分类详情 使得tryToHideSub失败
                        this.state.categoryDisplay = 'block'
                    }}
                    style={{display:this.state.categoryDisplay}} className={'detail'}
                    onMouseLeave={this.tryToHideSub}
                >
                    {this.state.categoryContent}
                </div>
            </>

        );
    }
}

