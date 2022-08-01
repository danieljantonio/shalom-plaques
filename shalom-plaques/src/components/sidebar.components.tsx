import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
type Props = {
	categories: ICategory[];
};

const Sidebar = ({ categories }: Props) => {
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
		console.log(checks);
	}, [checks]);
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
					<div key={category._id} className='flex flex-col justify-between px-2 py-1 cursor-pointer'>
						<p onClick={() => handleClickCategory(i)} className='text-lg btn-ghost px-2'>
							{category.name}
						</p>
						{category.subCategories.map((subCategory, j) => (
							<label className='ml-3 btn-ghost flex justify-between px-2 cursor-pointer'>
								<p className='text-lg'>{subCategory.name}</p>
								<input type='checkbox' checked={checks[i][j]} onClick={(e) => changeState(i, j, e.currentTarget.checked)} />
							</label>
						))}
					</div>
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
