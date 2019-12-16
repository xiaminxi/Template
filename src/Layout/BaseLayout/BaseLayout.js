/*
 * @Author: 夏民喜
 * @Date: 2019-11-14 15:21:32
 * @LastEditors: 夏民喜
 * @LastEditTime: 2019-12-05 13:38:07
 * @Description: 基础布局文件
 */
import classNames from 'classnames';
import Header from "./Component/Header"
import SiderMenu from "./Component/SiderMenu";
import DocumentTitle from 'react-document-title';
import React, { Component, Fragment } from 'react';
import { Layout, Breadcrumb, Button, Tooltip } from 'antd';
import { ContainerQuery } from 'react-container-query';
import mode from "../../theme/theme"
console.log(mode)

const { Content, Footer } = Layout;

export default class BaseLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            systemKey: "1",
            systemName: "审核平台",
            loading: false
        }
    }

    componentDidMount() {
        localStorage.getItem("theme") ? mode.changeTheme(localStorage.getItem("theme")) : null
    }
    

    // 获取当前网页标题
    getPageTitle() {
        // const { routerData, location } = this.props;
        // const { pathname } = location;
        // let title = '中钻联 [ 管理平台 ]';
        // let currRouterData = null;
        // // match params path
        // Object.keys(routerData).forEach(key => {
        //     if (pathToRegexp(key).test(pathname)) {
        //         currRouterData = routerData[key];
        //     }
        // });
        // if (currRouterData && currRouterData.name) {
        //     title = `${currRouterData.name} - 中钻联 [ 管理平台 ]`;
        // }
        return '中钻联 [ 管理平台 ]';
    }

    render() {
        const { systemKey } = this.state;

        const query = {
            'screen-xs': {
                maxWidth: 575,
            },
            'screen-sm': {
                minWidth: 576,
                maxWidth: 767,
            },
            'screen-md': {
                minWidth: 768,
                maxWidth: 991,
            },
            'screen-lg': {
                minWidth: 992,
                maxWidth: 1199,
            },
            'screen-xl': {
                minWidth: 1200,
            },
        };

        const layout = (
            <Layout style={{ minHeight: '100vh' }}>
                {/* 右侧 ===> 侧边菜单 */}
                <SiderMenu systemKey={systemKey} />
                {/* 左侧 */}
                <Layout>
                    {/* 顶部菜单 */}
                    <Header setCurrentSystem={this.setCurrentSystem} />
                    {/* 面包屑 */}
                    <Breadcrumb style={{ margin: "10px 10px 0px 10px", backgroundColor: "#FFF", padding: 10 }} >
                        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="we">一级菜单</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="rwe">二级菜单</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
                    </Breadcrumb>
                    {/* 内容区 */}
                    <Content style={{ margin: 10, border: "1px solid red" }}>
                        <div style={{ padding: 10, background: '#fff', minHeight: 360, height: 9000 }}>
                            {this.state.systemName}
                            <Button type="primary" >sfsfsf测试</Button>
                            <Button type="danger" >sfsfsf测试</Button>
                            <Button type="sucsses" >sfsfsf测试</Button>
                            <div style={{textAlign: "center"}} >
                                {
                                    mode.colorList.map(item => <Tooltip title={item.title} key={item.key}>
                                        <div style={{backgroundColor: item.key, width: 22, height: 22, borderRadius: 4, margin: "20px 10px", display: "inline-block"}} onClick={() => mode.changeTheme(item.key)} ></div>
                                    </Tooltip>)
                                }
                            </div>
                        </div>
                    </Content>
                    {/* 底部 */}
                    <Footer style={{ textAlign: 'center', background: '#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )

        return (
            <Fragment>
                {/* 改变网页标题 */}
                <DocumentTitle title={this.getPageTitle()} >
                    {/* 媒体查询 响应式组件 */}
                    <ContainerQuery query={query}>
                        {params => <div className={classNames(params)}>{layout}</div>}
                    </ContainerQuery>
                </DocumentTitle>
            </Fragment>
        )
    }
}
