import React from 'react';

export default function GalleryImage({ title, author, poster }) {
	return (
		<>
			<img
				loading="lazy"
				src={poster}
				title={title}
				alt={`${title}, ${author}`}
			></img>
		</>
	);
}
