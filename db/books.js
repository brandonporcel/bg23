const dbArray = [
	{
		id: 1,
		title: 'The Autobiography of my Mother',
		author: 'Jamaica Kinkaid',
		song: 'Ascending Forth',
		songAuthor: 'Black midi',
		songLink: 'https://www.youtube.com/watch?v=MJb3BBTDK0w',
		year: 1995,
		photos: [
			{
				src: 'https://64.media.tumblr.com/abf8d0bfa0f134dd81f4c9e875635531/tumblr_n4ekwkK1W81trdrq5o1_1280.jpg',
			},
			{
				src: 'http://johngreentown.weebly.com/uploads/2/6/3/3/26335341/1394324083.jpg',
			},
		],
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺 Recuerdo estar leyendo el final de ',

		poster:
			'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/029/689/products/autobiografia-de-mi-madre11-d7b3d6faeeae20bc2716182496507946-640-0.png',
	},
	{
		id: 2,
		title: 'Antes del Fin',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlvik9CCQVPns3-_pldTk6HXGkMEnLkXJx_9BztsVPFDerAyx',
	},
	{
		id: 3,
		title: 'Looking For Alaska',
		author: 'John Green',
		song: '',
		songLink: '',
		songAuthor: '',
		year: 2005,
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://www.rollingstone.com/wp-content/uploads/2019/10/Alaska.jpg',
	},
	{
		id: 4,
		title: 'Stoner',
		author: 'Williams',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1965',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://s26162.pcdn.co/wp-content/uploads/2019/08/40562566_547917972294625_2127678789293965312_n.jpg',
	},
	{
		id: 5,
		title: 'El origen de la tristeza',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: 2003,
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://i0.wp.com/latapa.com.ar/wp-content/uploads/2020/09/portada-el-origen-de-la-tristeza_grande.jpg?resize=350%2C200&ssl=1',
	},
	{
		id: 6,
		title: 'Maus',
		author: 'Art Spiegelman',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1980',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://imagenes.elpais.com/resizer/R5DoSxZ9RtAoBhHn2MAH8bKxUZw=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4RFSNXD3WPZJKT32IAHUP5MXWQ.jpg',
	},
	{
		id: 7,
		title: 'Poemas',
		author: 'Alejandar Pizarnik',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '<333',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://upload.wikimedia.org/wikipedia/commons/f/f3/Pizarnik_byn.jpg',
	},
	{
		id: 8,
		title: 'Sobre heroes y Tumbas',
		author: 'Ernesto Sabato',
		song: 'High to Death',
		songLink: 'https://www.youtube.com/watch?v=phzsalhqnE4',
		songAuthor: 'Car Seat Headrest',
		year: '1961',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://www.cultura.gob.ar/media/uploads/sabato_autor_desconocido.jpg',
	},
	{
		id: 9,
		title: 'Eramos unos ni;os',
		author: 'Patti Smith',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '2010',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster: 'https://happymag.tv/wp-content/uploads/2018/09/JustKids-1.jpg',
	},
	{
		id: 10,
		title: 'Tokio Blues',
		author: 'Murakami',
		song: 'cuento de invierno',
		songLink: '',
		songAuthor: 'alejandra pizarnik ',
		year: '1998',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster: 'https://homemcr.org/app/uploads/2011/04/Norwegian-Wood.jpg',
	},
	{
		id: 11,
		title: 'las cosas q perdimos en el fuego',
		author: 'Mariana enriquez',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '2016',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://www.thewynwoodtimes.com/wp-content/uploads/2020/03/Ilustracion-Las-cosas-que-perdimos-en-el-fuego.jpg',
	},
	{
		id: 12,
		title: 'uzumaki',
		author: 'Junji ito',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '98/99',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺',
		poster:
			'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/06/uzumaki-manga-2743643.jpg?itok=rfDGjoz8',
	},
	{
		id: 13,
		title: 'Panza de Burro ',
		author: 'López, Andrea Abreu',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺3,5',
		poster:
			'https://leeresvivirdosveces.files.wordpress.com/2020/09/4f4c5e48-bca8-429b-a8f5-988f71d93ff4.jpeg?w=640',
	},
];
export default dbArray;
