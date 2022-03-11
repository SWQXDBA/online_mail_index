import React, {useEffect, useState} from 'react';
import {Urls} from "../../Support";
import {Col, Row} from "antd";
import './index.css'
import {useNavigate} from "react-router";

export function ProductCategoryDetail() {
    let [categories, setCategories] = useState([]);
    let [productsMap, setProductsMap] = useState([]);

    let [productImg, setproductImgs] = useState([])

    const getSubCategories = (parentId) => {

        return categories.filter(item => {
            return item.parentId === parentId && item.level !== 1
        })
    }

    let navigate = useNavigate();


    /*    componentDidMount() {
            this.requestSource()
        }*/

    const requestSource = () => {

        fetch(Urls.categoriesUrl, {
            method: 'GET', // or 'PUT'
        }).then(response => {
            return response.json()
        })
            .then(data => {
                categories = data.data
                setCategories(new Array(...categories))
                data.data.forEach(sub => {

                    //筛选出子分类
                    if (sub.level !== 1){
                        fetch(Urls.productByCategoryIdUrl + `?id=${sub.id}`, {
                            method: 'GET', // or 'PUT'
                        }).then(response => {
                            return response.json()
                        }).then(productsResult => {

                            const products = productsResult.data;

                            products.forEach(product=>{
                                //存了一个map 子分类id:数组(商品)
                                if (productsMap[sub.id] == null) {
                                    productsMap[sub.id] = Array()
                                }
                                productsMap[sub.id].push(product)




                                fetch(Urls.productImgByIdUrl + `?id=${product.id}`, {
                                    method: 'GET', // or 'PUT'
                                }).then(r => r.json()).then(result => {
                                    const imgData = result.data;

                                    imgData.filter(img=>img.isMain===1) .forEach(img=>{
                                        const {productId} = img
                                        productImg[productId] = img

                                        setproductImgs(new Array(...productImg))
                                    })

                                })
                                setProductsMap(new Array(...productsMap))
                            })


                        })
                    }
                        //根据分类Id查询商品

                })

            })

    }

    useEffect(()=>{
        requestSource()
    },[])
    //   useEffect()




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
                                    return getSubCategories(item.id).map(
                                        //2级分类
                                        sub => {

                                            //当前子分类的所有商品
                                            let products = productsMap[sub.id]

                                            let productsDom
                                            if (products == null) {
                                                productsDom = <></>
                                            } else {
                                                productsDom = products.map(product => {

                                                    const img = productImg[product.id];


                                                    if(img === undefined){
                                                        return <Col key={product.id}/>
                                                    }
                                                    console.log(<img
                                                        style={{height:'100%',width:'100%'}}
                                                        onClick={() => {

                                                            // navigate(`/productDetail/${product.id}`)
                                                            navigate(`/productDetail/${product.id}`)
                                                        }}

                                                        src={`/img/${img.url}`} alt={'未找到图片'}/>)
                                                        return <Col

                                                            style={{backgroundColor: "green"}}
                                                            key={product.id}
                                                            span={2}>
                                                            <img
                                                                style={{height:'100%',width:'100%'}}
                                                                onClick={() => {

                                                                    // navigate(`/productDetail/${product.id}`)
                                                                    navigate(`/productDetail/${product.id}`)
                                                                }}

                                                                src={`./img/${img.url}`} alt={'未找到图片'}/>
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

