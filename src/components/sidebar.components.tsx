import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineLeft } from 'react-icons/ai';
import { motion } from 'framer-motion';

type Props = {
	categories: ICategory[];
	setCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
	setSubCategoryIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const Sidebar = ({ categories, setCategoryId, setSubCategoryIds }: Props) => {
	const [active, setActive] = useState<number | null>(null);
	const [subIds, setSubIds] = useState<string[]>([]);

	const changeSub = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget) {
			const val = e.currentTarget.value;

			if (e.currentTarget.checked && !subIds.includes(val)) setSubIds((old) => [...old, val]);

			if (!e.currentTarget.checked && subIds.includes(val)) {
				setSubIds((old) => {
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
		setSubIds([]);
	};

	const handleClickCategory = (index: number) => {
		if (active === index) {
			setActive(null);
			setSubIds([]);
			return;
		}
		setActive(index);
		setSubIds(
			categories[index].subCategories.map((sub) => {
				return sub._id;
			})
		);
	};

	useEffect(() => {
		if (active !== null) {
			setCategoryId(categories[active]._id);
			setSubCategoryIds(subIds);
		}
	}, [active, subIds]);

	return (
		<div className='flex flex-col w-80 shadow-md min-h-full mb-0'>
			{/* Search */}
			<div className='relative px-5 py-5 grow-0 shrink basis-auto shadow-sm'>
				<AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 left-8 h-5 w-5 cursor-text' />
				<input type='search' className='input w-full input-bordered input-sm pl-9' placeholder='Search...' />
			</div>
			{/* Checkbox */}
			<button onClick={handleClear}>Clear</button>
			<div className='grow shrink basis-auto'>
				{categories.map((category, i) => (
					<>
						<div key={category._id} className='flex flex-col justify-between px-2 py-1 cursor-pointer'>
							<p onClick={() => handleClickCategory(i)} className='relative text-lg btn-ghost px-2'>
								{category.name}
								<AiOutlineLeft className={active === i ? 'absolute right-1.5 top-1.5 -rotate-90 transition-transform' : 'absolute right-1.5 top-1.5 transition-transform'} />
							</p>
							{active === i &&
								category.subCategories.map((subCategory, j) => (
									<motion.label key={subCategory._id} initial={{ opacity: 0, y: '-50%' }} animate={{ opacity: 1, y: 0 }} className='ml-3 btn-ghost flex justify-between px-2 cursor-pointer'>
										<p className='text-lg'>{subCategory.name}</p>
										<input type='checkbox' defaultChecked={true} value={subCategory._id} onChange={changeSub} />
									</motion.label>
								))}
						</div>
						<div className='divider'></div>
					</>
				))}
			</div>
			{/* footer */}
			<Link href='/#'>
				<a className='grow-0 shrink auto text-center'>back to top</a>
			</Link>
		</div>
	);
};

export default Sidebar;
