import { useRouter } from 'next/router';
import bookInfo from '../../styles/bookInfo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useFetch } from '../../hooks/useFetch';

// library lightbox
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

export default function BookInfo() {
	const router = useRouter();
	const { BookInfo } = router.query;
	const [data, loader, error] = useFetch('/api/books/' + BookInfo);
	const {
		poster,
		author,
		title,
		review,
		year,
		song,
		songAuthor,
		songLink,
		photos,
	} = data;
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

							position: absolute;
							bottom: -25px;
							right: -105px;
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
						.hidden-gallery-img {
							display: none;
						}
					`}</style>

					<div className={bookInfo.wrapper}>
						<div className={bookInfo.left}>
							<Gallery>
								{photos?.map((el, id) => (
									<Item
										key={id}
										original={el.src}
										thumbnail={el.src}
										width="720"
										height="720"
									>
										{({ ref, open }) => (
											<img
												ref={ref}
												onClick={open}
												className="hidden-gallery-img"
												src={el.src}
												alt="as"
												loading="lazy"
											/>
										)}
									</Item>
								))}
								{/* {photos?.map((el, id) => (
									<p key={id}>{el.src}</p>
								))} */}
								<div className={bookInfo.poster}>
									<Item
										original={poster}
										thumbnail={poster}
										width="720"
										height="720"
									>
										{({ ref, open }) => (
											<img
												ref={ref}
												onClick={open}
												src={poster}
												loading="lazy"
												title={title}
												alt={title}
											/>
										)}
									</Item>
									<div className={bookInfo.infoBook}>
										<h2>{title}</h2>
										<p>{author}</p>
									</div>
									<div className="authorPfp">
										<Item
											original={authorPfp.uri}
											thumbnail={authorPfp.uri}
											width="720"
											height="720"
										>
											{({ ref, open }) => (
												<img
													ref={ref}
													onClick={open}
													loading="lazy"
													title={author}
													src={authorPfp.uri}
													alt={title}
												/>
											)}
										</Item>
									</div>
								</div>
							</Gallery>
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
