import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import Avatar from '../Avatar';
type Props = { isShown: boolean; onClose: () => void };
const SideBar = ({ isShown, onClose }: Props) => {
	const ref = useRef<null | HTMLElement>(null);

	const handleClickOutside = (ev: React.MouseEvent) => {
		const target = ev.target;
		if (!target || !ref.current) return;
		if (!ref.current?.contains(target as Node)) onClose();
	};

	const list = [
		{ name: 'Chats', icon: 'fa-solid fa-comment' },
		{ name: 'Marketplace', icon: 'fa-solid fa-store' },
		{ name: 'Archive', icon: 'fa-solid fa-box-archive' },
	];

	const location = useLocation();
	const activeLoc = location.pathname.split('/').at(-1);

	return ReactDOM.createPortal(
		<aside
			ref={ref}
			className={'grid-cols-3 fixed' + isShown ? 'show' : ''}
			onClick={handleClickOutside}
		>
			<header className="flex justify-between">
				<Avatar imgUrl="" imgSize="sm" />
				<h4>
					User fullname <i className="fa-solid fa-chevron-down"></i>
				</h4>
				<span className="fa-solid fa-gear"></span>
			</header>
			<section className="flex flex-col">
				{list.map(el => (
					<div
						key={el.name}
						className={`flex ${activeLoc === el.name ? 'active' : ''}`}
					>
						<span className={el.icon}></span>
						<p>{el.name}</p>
					</div>
				))}
			</section>
		</aside>,
		document.querySelector('.modal-root') as Element
	);
};
export default SideBar;
