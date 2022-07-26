import Link from 'next/link';
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
		<div className='flex flex-col w-80 shadow-md min-h-full mb-0'>
			{/* Search */}
			<div className='relative px-5 my-5 grow-0 shrink basis-auto'>
				<AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 left-8 h-5 w-5 cursor-text' />
				<input type='search' className='input w-full input-bordered input-sm pl-9' placeholder='Search...' />
			</div>
			<div className='grow shrink basis-auto'>
				{/* Checkbox */}
				{categories.map((category: ICategory, i: number) => {
					return (
						<label key={i} className='flex justify-between px-2 py-1 cursor-pointer'>
							<p className='text-lg'>{category.name}</p>
							<input type='checkbox' onClick={(e) => changeState(i, e.currentTarget.checked)} />
						</label>
					);
				})}
			</div>
			<Link href='/#'>
				<a className='grow-0 shrink auto text-center'>back to top</a>
			</Link>
		</div>
	);
};

export default Sidebar;
