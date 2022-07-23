import Link from 'next/link';
import home from '../styles/home.module.css';
import GalleryImage from '../components/GalleryImage';
import { useFetch } from '../hooks/useFetch';

export default function Home() {
	const [data, loader, error] = useFetch('/api/books');
	return (
		<div className={home.galleryWrapper}>
			{{ error } === null ? 'Hubo un error con la api' : ''}
			{loader === false
				? data.map(({ id, title, author, poster }) => (
						<Link href={`/book/${id}`} key={id}>
							<a>
								<GalleryImage title={title} author={author} poster={poster} />
							</a>
						</Link>
				  ))
				: 'Loading...'}
		</div>
	);
}
