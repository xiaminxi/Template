/*
 * @Author: 夏民喜
 * @Date: 2019-09-06 03:40:21
 * @LastEditors: 夏民喜
 * @LastEditTime: 2019-12-05 12:57:48
 * @Description: 请输入文件描述
 */
import React, { Component } from 'react'
import { Layout, Menu, Form, Row, Col, Button } from 'antd';

const { Header } = Layout;

export default class Headers extends Component {

    clickSystem = (e) => console.log(e)

    render() {
        const { setCurrentSystem } = this.props

        const menuProps = {
            mode: "horizontal",
            onClick: setCurrentSystem,
            defaultSelectedKeys: ["1"],
            style: {
                lineHeight: '64px',
                width: "100%"
            }
        }

        const renderMenu = () => {
            let menuArray = [];
            for(let i = 0; i < 20; i++){
                menuArray.push(  <Menu.Item key={i}>运营平台{i}</Menu.Item>)
            }
            return menuArray
        }

        return (
            <Header style={{ background: '#fff', padding: "0px 10px" }}>
                <Row>
                    <Col span={18} >
                        <Menu {...menuProps}>
                            {renderMenu()}
                        </Menu>
                    </Col>
                    <Col span={6}>
                        {/* <Button  type="primary" size="large" block={true} >侧翻青蛙</Button> */}
                    </Col>
                </Row>
            </Header>
        )
    }
}

