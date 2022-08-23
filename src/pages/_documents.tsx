import { Html, Head, Main, NextScript } from 'next/document';
import ReactModal from 'react-modal';

export default function Document() {
	ReactModal.setAppElement('#__next');

	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link href='https://fonts.googleapis.com/css2?family=Uchen&display=swap' rel='stylesheet' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
