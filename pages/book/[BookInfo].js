import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import bookInfo from '../../styles/bookInfo.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function BookInfo() {
	const router = useRouter();
	const [bookData, setBookData] = useState([]);
	const { poster, author, title, review, year, song, songAuthor, songLink } =
		bookData;
	useEffect(() => {
		const a = async () => {
			try {
				const res = await fetch(`/api/books/${router.query.BookInfo}`);
				const data = await res.json();
				setBookData(data);
			} catch (err) {
				console.log(err);
			}
		};
		a();
	}, [router.query.BookInfo]);
	return (
		<div>
			<div className={bookInfo.wrapper}>
				<div className="left">
					<div className="poster">
						<img src={poster} alt="a" />
						<div className="infoBook">
							<h2>{title}</h2>
							<p>{author}</p>
						</div>
						<div className="author-pfp"></div>
					</div>
				</div>
				<div className="right">
					<div className="review">
						<p className="review-text">{review} </p>
						<Link href="/">
							<a>Leer Más</a>
						</Link>
						<div className="year">{year}</div>
					</div>
				</div>
			</div>
			<footer className="footer-book">
				<div className="songMemorie">
					<p className="songMemorie-title">{song}</p>
					<p className="songMemorie-author">{songAuthor}</p>
				</div>
				<div>
					{songLink === '' ? (
						'_'
					) : (
						<a href={songLink}>
							<Image src="/play.png" width={24} height={24} alt="play"></Image>
						</a>
					)}
				</div>
			</footer>
		</div>
	);
}
