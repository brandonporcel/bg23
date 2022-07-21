import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function BookInfo() {
	const router = useRouter();
	const [bookData, setBookData] = useState([]);
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
	return <div>{bookData.title}</div>;
}
