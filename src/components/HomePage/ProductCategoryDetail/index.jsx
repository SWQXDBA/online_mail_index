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
        const promise = fetch(Urls.categoriesUrl, {
            method: 'GET', // or 'PUT'
        }).then(response => {
            return response.json()
        })
        promise.then(data => {
            this.setState({categories: data.data})
            data.data.forEach(sub => {
                if (sub.level !== 1)
                    fetch(Urls.productByCategoryIdUrl + `?id=${sub.id}`, {
                        method: 'GET', // or 'PUT'
                    }).then(response => {
                        return response.json()
                    }).then(productsResult => {
                        if(this.state.products[sub.id] ==null){
                            this.state.products[sub.id] = Array()
                        }

                        this.state.products[sub.id].push(productsResult.data)

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
                                                let products = this.state.products[sub.id];

                                                if (products == null) {
                                                    products = <></>
                                                } else {

                                                    products = products.map(product => {

                                                            return <Col style={{backgroundColor:"green"}} key={product.id} span={2}>
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
                                                            products
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

