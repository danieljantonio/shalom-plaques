import React, { useState } from 'react';
import './contactus.page.scss';

const ContactUsPage: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	// const [country, setCountry] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	// to consider https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175

	const submitForm = () => {
		if (!email || !name || !phone || /*!country ||*/ !message) alert('Please fill in all fields');
		const encodedMsg = encodeURI(`Hi, ${message}. \nContact me through: ${email} / ${phone}`);
		console.log(name);
		console.log(email);
		// console.log(country);
		console.log(message);
		console.log(encodedMsg);
		window.location.href = `mailto:info@shalomplaques.com?subject=Product Inquiry&body=${encodedMsg}`;
	};

	return (
		<div className="contact-us container">
			<h1>Contact Us</h1>
			<div className="input-container">
				<label htmlFor="name">Name: </label>
				<input id="name" type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className="input-container">
				<label htmlFor="email">Email: </label>
				<input id="email" type="email" placeholder="johndoe@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="input-container">
				<label htmlFor="phone">Phone Number: </label>
				<input id="phone" type="phone" placeholder="+62 812 xxx xxx" value={phone} onChange={(e) => setPhone(e.target.value)} />
			</div>
			{/* <div className="input-container">
				<label htmlFor="country">Country: </label>
				<input id="country" type="text" placeholder="Indonesia" value={country} onChange={(e) => setCountry(e.target.value)} />
			</div> */}
			<div className="input-container">
				<label htmlFor="message">Message: </label>
				<textarea
					id="message"
					placeholder="I'd like to inquire about..."
					cols={4}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>
			<div className="button-container">
				<button onClick={submitForm}>Send Mail</button>
			</div>
		</div>
	);
};

export default ContactUsPage;
