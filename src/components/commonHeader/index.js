import React from "react"

import { Button, Layout, Avatar, Dropdown } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import './index.css'
const { Header } = Layout;

const CommonHeader = () => {
    const logout = () => {

    }
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => logout} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            ),
        },
    ];
    return (
        <Header className="header-contrainer">
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                // onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: "white",
                }}
            />
            <Dropdown
                menu={{
                    items,
                }}
            >
                <Avatar size={36} src={require("../../assets/images/user.png")}></Avatar>
            </Dropdown>

        </Header>
    )
}

export default CommonHeader