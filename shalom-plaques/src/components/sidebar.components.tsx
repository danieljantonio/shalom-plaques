import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineLeft } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
	categories: ICategory[];
	setCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
	setSubCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
};

const Sidebar = ({ categories }: Props) => {
	const [active, setActive] = useState<number | null>(null);
	const [checks, setChecks] = useState<boolean[][]>(
		categories.map((category) => {
			return category.subCategories.map(() => {
				return false;
			});
		})
	);
	const changeState = (index: number, index2: number, checked: boolean) => {
		console.log(index, index2, checked);
		const temp = [...checks[index]];
		setChecks(
			categories.map((category, i) => {
				if (i === index) {
					return category.subCategories.map((sub, j) => {
						if (j === index2) {
							return checked;
						}
						return temp[j];
					});
				}
				return category.subCategories.map(() => {
					return false;
				});
			})
		);
	};
	const handleReset = () => {
		setChecks(
			categories.map((category) => {
				return category.subCategories.map(() => {
					return false;
				});
			})
		);
	};
	const handleClickCategory = (index: number) => {
		if (active === index) {
			setActive(null);
			setChecks(
				categories.map((category, i) => {
					return category.subCategories.map(() => {
						return false;
					});
				})
			);
		} else {
			setActive(index);
			setChecks(
				categories.map((category, i) => {
					if (i === index) {
						return category.subCategories.map(() => {
							return true;
						});
					}
					return category.subCategories.map(() => {
						return false;
					});
				})
			);
		}
	};
	useEffect(() => {
		setChecks(
			categories.map((category) => {
				return category.subCategories.map(() => {
					return false;
				});
			})
		);
	}, []);
	useEffect(() => {
		console.log(active);
	}, [active]);
	return (
		<div className='flex flex-col w-80 shadow-md min-h-full mb-0'>
			{/* Search */}
			<div className='relative px-5 py-5 grow-0 shrink basis-auto shadow-sm'>
				<AiOutlineSearch className='absolute top-1/2 -translate-y-1/2 left-8 h-5 w-5 cursor-text' />
				<input type='search' className='input w-full input-bordered input-sm pl-9' placeholder='Search...' />
			</div>
			{/* Checkbox */}
			<button onClick={handleReset}>Reset</button>
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
										<input type='checkbox' checked={checks[i][j]} onChange={(e) => changeState(i, j, e.currentTarget.checked)} />
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
