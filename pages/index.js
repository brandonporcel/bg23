import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<p>🎀</p>
				<Link href="/info">
					<a>Info</a>
				</Link>
			</header>
			<main>
				<div className="book-article">
					{/* {console.log(data)} */}
					{data.map(({ id, name }) => (
						<div key={id}>{name}</div>
					))}
					<p>title</p>
					<span>author</span>
				</div>
			</main>
			<footer>asdsad</footer>
		</div>
	);
}

export async function getStaticProps() {
	try {
		const res = await fetch('https://semilla-de-palta.vercel.app/api/avo');
		const data = await res.json();
		return {
			props: {
				data: data.data,
			},
		};
	} catch (err) {
		console.log(errr);
	}
}
