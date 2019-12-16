/*
 * @Author: 夏民喜
 * @Date: 2019-09-06 03:59:45
 * @LastEditors: 夏民喜
 * @LastEditTime: 2019-12-05 12:52:07
 * @Description: 请输入文件描述
 */
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
// import logo from '../../../public/logo192.png';
import { isUrl } from '../../../utils/utils';


const { SubMenu } = Menu;
const { Sider } = Layout;
const MenuItem = Menu.Item

export default class SiderMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }

    // 最小化菜单
    collapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    // 展开菜单
    expandMenu = (expanKeys) => {
        console.log(expanKeys)
    }

    render() {
        const { collapsed } = this.state;
        const { systemKey } = this.props;

       

        const menuObject = 
            [
                {
                    name: "运营-1",
                    auth: "xiaminxi",
                    path: "xiaminxi",
                    icon: "warning",
                    children: [
                        {
                            name: "二级菜单2-1"
                        },
                        {
                            name: "二级菜单2-2"
                        },
                        {
                            name: "二级菜单2-3",
                            children: [
                                {
                                    name: "三级菜单3-1",
                                },
                                {
                                    name: "三级菜单3-2",
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "一级菜单1-2",
                    auth: "xiaminxi",
                    path: "xiaminxi",
                    icon: "user",
                    children: [
                        {
                            name: "二级菜单2-4"
                        },
                        {
                            name: "二级菜单2-5"
                        },
                        {
                            name: "二级菜单2-6",
                            children: [
                                {
                                    name: "三级菜单3-3",
                                },
                                {
                                    name: "三级菜单3-4",
                                }
                            ]
                        },
                    ]
                }
            ];
            // 2: [
            //     {
            //         name: "审核-1",
            //         auth: "xiaminxi",
            //         path: "xiaminxi",
            //         icon: "warning",
            //         children: [
            //             {
            //                 name: "二级菜单2-1"
            //             },
            //             {
            //                 name: "二级菜单2-2"
            //             },
            //             {
            //                 name: "二级菜单2-3",
            //                 children: [
            //                     {
            //                         name: "三级菜单3-1",
            //                     },
            //                     {
            //                         name: "三级菜单3-2",
            //                     }
            //                 ]
            //             },
            //         ]
            //     },
            //     {
            //         name: "一级菜单1-2",
            //         auth: "xiaminxi",
            //         path: "xiaminxi",
            //         icon: "user",
            //         children: [
            //             {
            //                 name: "二级菜单2-4"
            //             },
            //             {
            //                 name: "二级菜单2-5"
            //             },
            //             {
            //                 name: "二级菜单2-6",
            //                 children: [
            //                     {
            //                         name: "三级菜单3-3",
            //                     },
            //                     {
            //                         name: "三级菜单3-4",
            //                     }
            //                 ]
            //             },
            //         ]
            //     }
            // ],
            // 3: [
            //     {
            //         name: "催收-1",
            //         auth: "xiaminxi",
            //         path: "xiaminxi",
            //         icon: "warning",
            //         children: [
            //             {
            //                 name: "二级菜单2-1"
            //             },
            //             {
            //                 name: "二级菜单2-2"
            //             },
            //             {
            //                 name: "二级菜单2-3",
            //                 children: [
            //                     {
            //                         name: "三级菜单3-1",
            //                     },
            //                     {
            //                         name: "三级菜单3-2",
            //                     }
            //                 ]
            //             },
            //         ]
            //     },
            //     {
            //         name: "一级菜单1-2",
            //         auth: "xiaminxi",
            //         path: "xiaminxi",
            //         icon: "user",
            //         children: [
            //             {
            //                 name: "二级菜单2-4"
            //             },
            //             {
            //                 name: "二级菜单2-5"
            //             },
            //             {
            //                 name: "二级菜单2-6",
            //                 children: [
            //                     {
            //                         name: "三级菜单3-3",
            //                     },
            //                     {
            //                         name: "三级菜单3-4",
            //                     }
            //                 ]
            //             },
            //         ]
            //     }
            // ],
    

        function formatter(data, parentPath = "/", parentAuthority) {
            console.log(data, parentPath, parentAuthority)
            return data.map(item => {
                let { path } = item;
                if (!isUrl(path)) {
                    path = parentPath + item.path;
                }
                const result = {
                    ...item,
                    path,
                    authority: item.authority || parentAuthority,
                };
                if (item.children) {
                    result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
                }
                return result;
            });
        }
     const getMenuData = () => formatter(menuObject);

        console.log(getMenuData())

        const siderProps = {
            theme: "light",
            collapsible: true,
            collapsed: collapsed,
            onCollapse: this.collapse,
        }

        const menuProps = {
            mode: "inline",
            onOpenChange: this.expandMenu,
        }

        const SubMenuProps = (item) => {
            return {
                key: item.name + "f",
                title: item.icon ? <span><Icon type={item.icon} /><span>{item.name}</span></span> : item.name,
            }
        }

        const renderMenu = (data) => {
            return data.map(item => {
                if (item.children) {
                    return <SubMenu {...SubMenuProps(item)}>{renderMenu(item.children)}</SubMenu>
                }
                return <MenuItem key={"6" + item.name}>{item.name}</MenuItem>
            });
        }

        return (
            <Sider {...siderProps} >
                <div className="logo" >
                    <img src={""} alt="中钻联" />
                </div>
                <Menu {...menuProps} >{renderMenu(menuObject)}</Menu>
            </Sider>
        )
    }
}

