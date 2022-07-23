const dbArray = [
	{
		id: 1,
		title: 'The Autobiography of my Mother',
		author: 'Jamaica Kinkaid',
		song: 'Ascending Forth',
		songAuthor: 'Black midi',
		songLink:
			'https://open.spotify.com/track/3xUNDNUqbhSsCpNZAbVcOO?si=22f284ff459b4922',
		year: 1995,
		review:
			'Acá iria la reseña del libro pero como no tengo ganas/tiempo de escribirla voy a rellar este apartado con este texto que amablemente estas leyendo. En al seccion,dependiendo el libro, podras ver y leer un(os) parrafo(s) que me gustaron del libro y en el footer una cancion que mientras estaba leyendo el libro me trajo recuerdos de ella. ___---____/////nofuncionellinebreak///___ésto fue programado en nextjs(te odio nextjs).nosq+D3cir.🌺 Recuerdo estar leyendo el final de ',

		poster: 'https://www.youtube.com/watch?v=MJb3BBTDK0w',
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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlvik9CCQVPns3-_pldTk6HXGkMEnLkXJx_9BztsVPFDerAyx',
	},
	{
		id: 3,
		title: 'Looking For Alaska',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
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
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://i0.wp.com/latapa.com.ar/wp-content/uploads/2020/09/portada-el-origen-de-la-tristeza_grande.jpg?resize=350%2C200&ssl=1',
	},
	{
		id: 6,
		title: 'mAUS',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://imagenes.elpais.com/resizer/R5DoSxZ9RtAoBhHn2MAH8bKxUZw=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4RFSNXD3WPZJKT32IAHUP5MXWQ.jpg',
	},
	{
		id: 7,
		title: 'Poemas',
		author: 'pizarnik',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu \r\nnec, in. Massa\n tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://upload.wikimedia.org/wikipedia/commons/f/f3/Pizarnik_byn.jpg',
	},
	{
		id: 8,
		title: 'Abbadon, el exterminador',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://images.cdn2.buscalibre.com/fit-in/360x360/d7/da/d7da3a6042793e91a690a368b045d8ba.jpg',
	},
	{
		id: 9,
		title: 'Eramos unos ni;os',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster: 'https://happymag.tv/wp-content/uploads/2018/09/JustKids-1.jpg',
	},
	{
		id: 10,
		title: 'mAUS',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://images.pagina12.com.ar/styles/focal_3_2_470x313/public/2022-01/332670-whatsapp-20image-202022-01-27-20at-2016-12-11.jpeg?itok=vsqSf1UE',
	},
	{
		id: 11,
		title: 'las cosas q perdimos en el fuego',
		author: 'pizarnik',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://www.thewynwoodtimes.com/wp-content/uploads/2020/03/Ilustracion-Las-cosas-que-perdimos-en-el-fuego.jpg',
	},
	{
		id: 12,
		title: 'uzumaki',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/06/uzumaki-manga-2743643.jpg?itok=rfDGjoz8',
	},
	{
		id: 13,
		title: 'Men without ',
		author: 'Sabato',
		song: '',
		songLink: '',
		songAuthor: '',
		year: '1998',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed ut eget nec sociis dui viverra. Eget magna laoreet bibendum pharetra. Dignissim est risus, ullamcorper congue eu mauris viverra. Sapien est enim facilisis iaculis id felis volutpat habitant tristique. Aliquet vitae fames eu leo leo eget sem mauris. Urna, egestas mollis hendrerit placerat . sollicitudin tellus posuere varius venenatis gravida pharetra cum orci. Mattis sit at mattis urna posuere odio ornare eros id. In eget duis eros malesuada volutpat volutpat orci vehicula. Tristique magna vulputate tellus magna eu nec, in. Massa tempus ut pretium enim condimentum risus at sit. Dapibus nisl non sit turpis fames rhoncus.',
		poster:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJBtctRf7Z1WkUdpS6zb_VQpZErTMY9eIpg&usqp=CAU',
	},
];
export default dbArray;
