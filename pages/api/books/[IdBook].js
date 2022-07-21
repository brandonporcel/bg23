import dbArray from '../../../db/books.js';
export default async function handler(req, res) {
	const book = dbArray.find((book) => book.id == req.query.IdBook);
	console.log(book);
	book === undefined
		? res.status(404).json({
				statusCode: 404,
				message: 'no existis pa',
		  })
		: res.status(200).json(book);
}
