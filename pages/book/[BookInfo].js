import { useRouter } from 'next/router';
import bookInfo from '../../styles/bookInfo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useFetch } from '../../hooks/useFetch';
export default function BookInfo() {
	const router = useRouter();
	const { BookInfo } = router.query;
	const [data, loader, error] = useFetch('/api/books/' + BookInfo);
	const { poster, author, title, review, year, song, songAuthor, songLink } =
		data;
	const [authorPfp] = useFetch(
		'https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&mode=${mode}&json'
	);

	return (
		<>
			<Head>
				<title>bg23 | {title}</title>
			</Head>
			{{ error } === null ? 'Hubo un error con la api' : ''}
			{loader === false ? (
				<>
					<style jsx>{`
						.authorPfp {
							height: 130px;
							width: 100px;
							padding: 25px;
							background: url(${authorPfp.uri});
							position: absolute;
							bottom: -50px;
							right: -125px;
						}
						.songMemorie::after {
							content: '';
							width: 100px;
							height: 1px;
							background: url(${authorPfp.uri});
							display: block;
							top: 0px;
							position: absolute;
						}
					`}</style>
					<div className={bookInfo.wrapper}>
						<div className={bookInfo.left}>
							<div className={bookInfo.poster}>
								<img loading="lazy" src={poster} title={title} alt={title} />

								<div className={bookInfo.infoBook}>
									<h2>{title}</h2>
									<p>{author}</p>
								</div>
								<div className="authorPfp"></div>
							</div>
						</div>
						<div className={bookInfo.right}>
							<div className={bookInfo.review}>
								<p className={bookInfo.reviewText}>{review} </p>
								<Link href="/">
									<a>Leer Más</a>
								</Link>
								<span className={bookInfo.year}>{year}</span>
							</div>
						</div>
					</div>
					<footer className={bookInfo.footerBook}>
						<div className="songMemorie">
							<p className={bookInfo.songMemorieTitle}>{song}</p>
							<p className={bookInfo.songMemorieuthor}>{songAuthor}</p>
						</div>
						<div>
							{songLink === '' ? (
								'_'
							) : (
								<a href={songLink}>
									<Image
										loading="lazy"
										src="/play.png"
										width={24}
										height={24}
										alt="play"
									></Image>
								</a>
							)}
						</div>
					</footer>
				</>
			) : (
				'Loading...'
			)}
		</>
	);
}
