import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/icons/shalom-favicon3.png" type="image/png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
