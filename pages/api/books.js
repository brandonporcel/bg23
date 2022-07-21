import dbArray from '../../db/books.js';
export default async function handler(req, res) {
	res.status(200).json(dbArray);
}
