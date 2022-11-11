import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineLeft, AiOutlineFilter } from 'react-icons/ai';
import { motion } from 'framer-motion';

type Props = {
	categories: ICategory[];
	setCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
	subCategoryIds: string[];
	setSubCategoryIds: React.Dispatch<React.SetStateAction<string[]>>;
};

// TODO: Could try and simplify the code, don't use your own state but pass it over from the parent
// TODO: The function used is inconsistent, some use your own useState, some use the parent's setState function
// TODO: The code's readability could be improved.
const Sidebar = ({ categories, setCategoryId, subCategoryIds, setSubCategoryIds }: Props) => {
	const [active, setActive] = useState<number | null>(null);

	const changeSub = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			const val = e.currentTarget.value;

			if (e.currentTarget.checked && !subCategoryIds.includes(val)) setSubCategoryIds((old) => [...old, val]);

			if (!e.currentTarget.checked && subCategoryIds.includes(val)) {
				setSubCategoryIds((old) => {
					return old.filter((id) => {
						if (id === val) return false;
						return true;
					});
				});
			}
		}
	};

	const handleClear = () => {
		setActive(null);
		setCategoryId(null);
		setSubCategoryIds([]);
	};

	const handleClickCategory = (index: number) => {
		if (active === index) {
			setActive(null);
			setSubCategoryIds([]);
			return;
		}
		setActive(index);
		setSubCategoryIds(
			categories[index].subCategories.map((sub) => {
				return sub._id;
			})
		);
	};

	useEffect(() => {
		if (active !== null) {
			setCategoryId(categories[active]._id);
		} else {
			setCategoryId(null);
			setSubCategoryIds([]);
		}
	}, [active]);

	return (
		<div className='px-6'>
			<div className='card shadow-lg border border-primary border-opacity-20 mt-4 collapse w-full'>
				<input type='checkbox' className='sm:hidden' />
				<div className='collapse-title text-xl sm:hidden flex w-full pl-5 justify-center btn'>
					<AiOutlineFilter className='my-auto' />
					Filter
				</div>
				<div className='smax:collapse-content'>
					{/* SideBar */}
					<div className='flex flex-col min-h-full mb-0 w-full'>
						{/* Search */}
						{/* <div className='relative px-5 py-5 grow-0 shrink basis-auto shadow-sm'>
							<AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 left-8 h-5 w-5 cursor-text' />
							<input type='search' className='input w-full input-bordered input-sm pl-9' placeholder='Search Product...' />
						</div> */}
						{/* Checkbox */}
						<div className='grow shrink basis-auto'>
							{categories.map((category, i) => (
								<div key={i}>
									<div key={category._id} className='flex flex-col justify-between px-2 py-1 cursor-pointer'>
										<p onClick={() => handleClickCategory(i)} className='relative p-3 text-lg btn-ghost px-2'>
											{category.name}
											<AiOutlineLeft className={`absolute right-1.5 top-4 transition-transform ${active === i ? '-rotate-90' : ''}`} />
										</p>
										{active === i &&
											category.subCategories.map((subCategory, j) => (
												<motion.label key={subCategory._id} initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} className='ml-3 btn-ghost flex justify-between px-2 cursor-pointer'>
													<p className='text-lg p-1'>{subCategory.name}</p>
													<input type='checkbox' defaultChecked={true} value={subCategory._id} onChange={changeSub} />
												</motion.label>
											))}
									</div>
									<div className='divider my-1'></div>
								</div>
							))}
						</div>
						<button onClick={handleClear} className='btn p-4 mx-2 -mt-1 mb-2'>
							Clear Selection
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
