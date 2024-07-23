import React from "react"
import MenuConfig from "../../config"
import * as Icons from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import config from "../../config";
const { Header, Sider, Content } = Layout;

// get icon dynamically
const iconToElement = (name) => React.createElement(Icons[name])

// handle the menu data
const menuItems = MenuConfig.map((item) => {
    const menuItem = {
        key: item.path,
        icon: iconToElement(item.icon),
        label: item.label
    }
    if (item.children) {
        menuItem.children = item.children.map(childItem => {
            return {
                key: childItem.path,
                label: childItem.label
            } 
        }) 
    }
    return menuItem
})

const CommonSider = () => {
    return (
        <Sider trigger={null} collapsible>
                <h3 className="app-name">通用后台管理系统</h3>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuItems}
                    style={{
                        height: '100%'
                    }}
                />
            </Sider>
    )
}

export default CommonSider