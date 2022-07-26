import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
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
			{/* Search */}
			<div className='relative px-5 mt-5'>
				<AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 left-8 h-5 w-5' />
				<input type='search' className='input w-full input-bordered input-sm pl-9' placeholder='Search...' />
			</div>
			{/* Checkbox */}
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
