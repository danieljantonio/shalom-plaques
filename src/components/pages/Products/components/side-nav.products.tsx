import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './side-nav.products.scss'

interface Props {
	productCategories: any
}

const SideNav: React.FC<Props> = ({productCategories}) => {
	const [isExpand, setExpand] = useState<boolean[]>(productCategories.map((category: any) => false));
	const [update, setUpdated] = useState<boolean>(false);

	useEffect(() => {}, [update]);
	
	const updateStatus = (index: number): void => {
		console.log(`click ${index}: ${isExpand[index]}`);
		const expand = isExpand;
		expand[index] = !isExpand[index];
		setExpand(expand);
		setUpdated(!update);
	}
					

	return (
	<div className="sidenav">
		<div className="card">
			{productCategories.map((product: any, index: any) => (
				<div className="header" onClick={() => updateStatus(index)}>
					<p>{product}</p>
					<img src={`/icons/icon_${isExpand[index] ? 'minus' : 'plus'}.svg`} alt="expand" />
				</div>
			))}
		</div>
	</div>)
};

export default SideNav;