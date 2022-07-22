import Link from 'next/link';
import React from 'react';
import header from './Header.module.css';
export default function Header() {
	return (
		<header className={header.header}>
			<Link href="/">
				<a className={header.logo}>🎀</a>
			</Link>

			<Link href="/info">
				<a className={header.info}>Info</a>
			</Link>
		</header>
	);
}
