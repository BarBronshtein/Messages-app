import React from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from '../Avatar';

const SideBar = () => {
	const list = [
		{ name: 'Chats', icon: 'fa-solid fa-comment' },
		{ name: 'Marketplace', icon: 'fa-solid fa-store' },
		{ name: 'archive', icon: 'fa-solid fa-box-archive' },
	];
	const location = useLocation();
	const activeLoc = location.pathname.split('/').at(-1);
	return (
		<aside className="grid-cols-3 fixed">
			<header className="flex justify-between">
				<Avatar imgUrl="" imgSize="md" />
				<h4>
					User fullname <i className="fa-solid fa-chevron-down"></i>
				</h4>
				<span className="fa-solid fa-gear"></span>
			</header>
			<section className="flex flex-col">
				{list.map(el => (
					<div className={`flex ${activeLoc === el.name ? 'active' : ''}`}>
						<span className={el.icon}></span>
						<p>{el.name}</p>
					</div>
				))}
			</section>
		</aside>
	);
};
export default SideBar;
