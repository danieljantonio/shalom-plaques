import React, { useState } from 'react';

const Sidebar = ({ categories }: any) => {
	const [checks, setChecks] = useState(
		categories.map(() => {
			return false;
		})
	);
	const changeState = (index: number, checked: boolean) => {
		let temp = [...checks];
		temp[index] = checked;
		setChecks(temp);
	};
	return (
		<div className='w-80'>
			{categories.map((category: ICategory, i: number) => {
				return (
					<label key={i} className='flex justify-between px-2 py-1'>
						<p className='text-lg'>{category.name}</p>
						<input type='checkbox' onClick={(e) => changeState(i, e.currentTarget.checked)} />
					</label>
				);
			})}
		</div>
	);
};

export default Sidebar;
