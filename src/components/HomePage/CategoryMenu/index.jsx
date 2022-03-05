import React, {Component} from 'react';
import {Col, Menu} from "antd";
import {Urls} from "../../Support";
import './index.css'
export class CategoryMenu extends Component {
    state = {
        categories:[]
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
            data.data.forEach(item => console.log(item))
            this.setState({categories: data.data})
        })
    }

    componentDidMount(){
        this.getCategories()
    }
    render() {
        return (
            <Menu
                onClick={(i)=>{alert(i)}}
                mode="vertical " defaultSelectedKeys={['0']}>
                {
                    this.state.categories.map(item=>{
                        console.log("item",item)
                        const {name,level,parentId,icon,slogan,picture,backgroundColor}=item
                      return  <Menu.Item onMouseEnter={()=>this.props.showCategoryDetailChange('block',`${item.name}`)}
                                         onMouseLeave={()=>this.props.showCategoryDetailChange('none',null)}
                                         onClick={()=>{}}
                                         style={{position:'relative'}}  key={name}>
                          <img style={{height:'2rem',width:'2rem'}} src={`svg/${icon}`} alt={'未找到图片'}/>
                          {` ${name}`}

                        </Menu.Item>
                    })
                }
                {/*                <Menu.Item key={0}>{`nav ${123}`}</Menu.Item>
                                            <Menu.Item key={1}>{`nav ${1}`}</Menu.Item>*/}
            </Menu>
        );
    }
}

