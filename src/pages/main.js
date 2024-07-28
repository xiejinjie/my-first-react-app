import { React, useState } from "react"
import { Outlet } from "react-router-dom"
import { Button, Layout, Menu, theme } from 'antd';
import CommonSider from "../components/commonAside";
import CommonHeader from "../components/commonHeader";

const { Header, Sider, Content } = Layout;

const Main = () => {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="main-container">
            <CommonSider/>
            <Layout>
                <CommonHeader/>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Main