import React, {Component} from 'react';
import {Urls} from "../../Support";
import {Col, Row} from "antd";
import './index.css'

export class ProductCategoryDetail extends Component {
    getSubCategories(parentId) {

        return this.state.categories.filter(item => {
            return item.parentId === parentId && item.level !== 1
        })
    }

    state = {
        categories: [],
        products: Array()
    }

    componentDidMount() {
        this.requestSource()
    }

    requestSource = () => {
        /*        axios.get(Urls.indexImgUrl).then(response=>{
                    response.data.data.forEach(item=> console.log(item))

                })*/
        //先获取所有的分类
        fetch(Urls.categoriesUrl, {
            method: 'GET', // or 'PUT'
        }).then(response => {
            return response.json()
        })

            .then(data => {
                this.setState({categories: data.data})

                data.data.forEach(sub => {
                    //筛选出子分类
                    if (sub.level !== 1)
                        //根据分类Id查询商品
                        fetch(Urls.productByCategoryIdUrl + `?id=${sub.id}`, {
                            method: 'GET', // or 'PUT'
                        }).then(response => {
                            return response.json()
                        }).then(productsResult => {
                            //存了一个map 子分类id:数组(商品)
                            if (this.state.products[sub.id] == null) {
                                this.state.products[sub.id] = Array()
                            }
                            this.state.products[sub.id].push(productsResult.data)

                            //如果只是 this.setState() 似乎不会刷新页面
                            this.setState({})

                        })
                })

            })

    }


    render() {
        const categories = this.state.categories;
        return (
            <>
                <Row className={'CategoryLevel_1'}>
                    <Col span={24}>

                        {
                            //取出一级分类
                            categories.filter(item => item.level === 1)
                                .map(
                                    //1级分类
                                    item => {
                                        return this.getSubCategories(item.id).map(
                                            //2级分类
                                            sub => {

                                                //当前子分类的所有商品
                                                let products = this.state.products[sub.id]

                                                let productsDom
                                                if (products == null) {
                                                    productsDom = <></>
                                                } else {
                                                    productsDom = products.map(product => {
                                                            return <Col style={{backgroundColor: "green"}} key={product.id}
                                                                        span={2}>
                                                                666{product.name}
                                                            </Col>
                                                        }
                                                    )
                                                }

                                                return <div key={sub.id}>
                                                    <div style={{height: '2rem'}}>
                                                        {`子分类: ${sub.name}`}
                                                    </div>
                                                    <Row className={'CategoryLevel_2'}>
                                                        {
                                                            productsDom
                                                        }
                                                    </Row>
                                                </div>
                                            })

                                    })

                        }

                    </Col>
                </Row>
            </>
        );
    }

}

