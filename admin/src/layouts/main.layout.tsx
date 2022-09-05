import React, { Dispatch, useState } from 'react';
import './main.layout.scss';
import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../store/user/action-creators.user';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

interface Props {
	selectedKey: string;
	title: string;
}

const MainLayout: React.FC<Props> = ({ children, selectedKey, title = '' }) => {
	const [isCollapsed, setCollapse] = useState<boolean>(false);
	const dispatch: Dispatch<any> = useDispatch();

	return (
		<Layout className="layout" style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={isCollapsed} onCollapse={() => setCollapse(!isCollapsed)}>
				<div className="logo"></div>
				<Menu theme="dark" defaultSelectedKeys={[`${selectedKey}`]} mode="inline">
					<Menu.Item key="0">
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item key="1">
						<Link to="/categories">Categories</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/sub-categories">SubCategories</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<Link to="/products">Products</Link>
					</Menu.Item>
					<Menu.Item key="4" onClick={() => dispatch(logout())}>
						Logout
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="main-layout">
				<Header className="layout-header">
					<Title>{title}</Title>
				</Header>
				<Content className="layout-content">{children}</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
