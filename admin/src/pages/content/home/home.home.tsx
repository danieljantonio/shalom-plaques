import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;

const Home: React.FC = () => {
	return (
		<div>
			<Steps direction='vertical' size='small' current={3}>
				<Step title='Add Category' description='Add a new category' />
				<Step title='Add SubCategory' description='Add a new subcategory for a selected category' />
				<Step title='Add Product' description='Add a new product for a selected subcategory from a selected category' />
			</Steps>
		</div>
	);
};

export default Home;
