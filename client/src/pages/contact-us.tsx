import { NextPage } from 'next';
import React, { useState } from 'react';

type FormState = {
	firstName: string;
	lastName: string;
	company: string;
	phone: string;
	email: string;
	message: string;
};

const ContactUs: NextPage = () => {
	const [form, setForm] = useState<FormState>({
		firstName: '',
		lastName: '',
		company: '',
		phone: '',
		email: '',
		message: '',
	});

	const validateForm: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const isValid = Object.values(form).every((value) => value.length > 0);
		if (isValid)
			window.location.href = `mailto:info@shalomplaques.com?subject=Product Inquiry&body=Hi, I am ${form.firstName} ${form.lastName} from ${form.company}. \n${form.message}. \n\n You can contact me through ${form.email} or ${form.phone}.`;
	};

	return (
		<div className='container mx-auto'>
			<form className='mt-8' onSubmit={validateForm} id='contact-form'>
				<h1 className='text-5xl bold text-center mb-8'>Contact Us</h1>
				<div className='grid gap-6 mb-6 md:grid-cols-2'>
					<div>
						<label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900'>
							First name
						</label>
						<input
							type='text'
							id='first_name'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
							placeholder='John'
							required
							onChange={(e) => setForm({ ...form, firstName: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900'>
							Last name
						</label>
						<input
							type='text'
							id='last_name'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
							placeholder='Doe'
							required
							onChange={(e) => setForm({ ...form, lastName: e.target.value })}
						/>
					</div>

					<div>
						<label htmlFor='company' className='block mb-2 text-sm font-medium text-gray-900'>
							Company
						</label>
						<input
							type='text'
							id='company'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
							placeholder='Shalom Plaques'
							required
							onChange={(e) => setForm({ ...form, company: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor='phone_number' className='block mb-2 text-sm font-medium text-gray-900'>
							Phone Number
						</label>
						<input
							type='number'
							id='phone_number'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
							placeholder='(00) 123-456-789'
							required
							onChange={(e) => setForm({ ...form, phone: e.target.value })}
						/>
					</div>
				</div>
				<div className='mb-6'>
					<label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
						Email address
					</label>
					<input
						type='email'
						id='email'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='john.doe@company.com'
						required
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>
				</div>
				<div className='mb-6'>
					<label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900'>
						Message
					</label>
					<textarea
						id='message'
						rows={6}
						className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
						placeholder='I would like to purchase...'
						onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
				</div>
				<button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ' type='submit' form='contact-form'>
					Submit Inquiry
				</button>
			</form>
		</div>
	);
};

export default ContactUs;
