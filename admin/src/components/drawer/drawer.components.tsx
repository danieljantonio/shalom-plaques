import React from 'react';
import { Drawer, Button, Space } from 'antd';

interface Props {
	toggleDrawer: (value: boolean) => void;
	title: string;
	visible?: boolean;
}

const DrawerComponent: React.FC<Props> = ({ title, visible, toggleDrawer, children }) => {
	const onClose = () => {
		toggleDrawer(false);
	};

	return (
		<div>
			<Drawer
				destroyOnClose={true}
				title={`Add New ${title}`}
				visible={visible}
				width={520}
				onClose={onClose}
				extra={
					<Space>
						<Button onClick={onClose}>Cancel</Button>
					</Space>
				}>
				{children}
			</Drawer>
		</div>
	);
};

export default DrawerComponent;
