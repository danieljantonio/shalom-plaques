import React from 'react';
import { Drawer, Button, Space } from 'antd';

interface Props {
	toggleDrawer: (value: boolean) => void;
	title: string;
	visible?: boolean;
}

const BottomDrawerComponent: React.FC<Props> = ({ title, visible, toggleDrawer, children }) => {
	const onClose = () => {
		toggleDrawer(false);
	};

	return (
		<div>
			<Drawer
				placement='bottom'
				destroyOnClose={true}
				title={`${title}`}
				visible={visible}
				height='70%'
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

export default BottomDrawerComponent;
