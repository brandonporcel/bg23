import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>bg23</title>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta property="og:title" content="bg23 book gallery" />
				<meta name="description" content="Brandon Porcel | newproject#23" />
				<meta property="og:image" content="%PUBLIC_URL%/669.jpg" />
				<link
					rel="shortcut icon"
					href="https://images.emojiterra.com/twitter/v13.1/128px/1f380.png"
					type="image/png"
				/>
			</Head>
			<Header />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
}
