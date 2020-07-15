import React, {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import Link from "next/link";
import {Layout, Menu, Row, Col} from 'antd';
import styled from "@emotion/styled";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ReadOutlined,
    EyeOutlined,
    ContactsOutlined,
    ShareAltOutlined
} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;

const HeaderWrapper = styled(Header)`
    padding: 0;
`;

const AppLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    const contentStyle = useMemo(() =>({
        margin: '24px 16px',
        padding: 24,
        minHeight: 280
    }), []);

    return (
        <Row>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                        <Menu.Item key="0" icon={<ReadOutlined />}>
                            <Link href="/"><a>메인</a></Link>
                        </Menu.Item>  <Menu.Item key="1" icon={<ReadOutlined />}>
                            <Link href="/tarot"><a>타로카드</a></Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<EyeOutlined />}>
                            <Link href="/fortune"><a>오늘의 운세처럼</a></Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ContactsOutlined />}>
                            <Link href="/before"><a>이전의 운세처럼</a></Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<ShareAltOutlined />}>
                            <Link href="/recommendation"><a>친구에게 추천하기</a></Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <HeaderWrapper className="site-layout-background">
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggleCollapsed,
                        })}
                    </HeaderWrapper>
                    <Content
                        className="site-layout-background"
                        style={contentStyle}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Row>
    )
}

AppLayout.protoTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;