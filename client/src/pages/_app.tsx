import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../layout/main.layout';
import ReactModal from 'react-modal';

function MyApp({ Component, pageProps }: AppProps) {
	ReactModal.setAppElement('#__next');
	return (
		<>
			<Head>
				<link rel='icon' href='/icons/shalom-favicon3.png' type='image/png' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
