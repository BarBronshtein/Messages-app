import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import Avatar from '../Avatar';
type EventListener = (this: Element, ev: Event) => void;
type Props = { isShown: boolean; onClose: () => void };
const SideBar = ({ isShown, onClose }: Props) => {
	const ref = useRef<null | HTMLElement>(null);
	const el = useRef<Element>(document.getElementById('modal-root') as Element);

	useEffect(() => {
		el.current?.addEventListener(
			'click' as keyof ElementEventMap,
			handleClickOutside as EventListener
		);
		return () =>
			el.current?.removeEventListener(
				'click' as keyof ElementEventMap,
				handleClickOutside as EventListener
			);
	}, []);

	const handleClickOutside = (ev: MouseEvent) => {
		const target = ev.target;
		if (!target || !ref.current) return;
		if (!ref.current?.contains(target as Node)) {
			onClose();
			el.current.classList.add('z-[-1]', 'cursor-default');
		}
	};

	const className =
		'relative bg-slate-800 p-2 z-10 text-white transition-all w-[90vw] cursor-default max-w-[373px] ' +
		(isShown ? 'translate-x-[0]' : 'translate-x-[-100vw]');
	const list = [
		{ name: 'chats', icon: 'fa-solid fa-comment' },
		{ name: 'marketplace', icon: 'fa-solid fa-store' },
		{ name: 'archive', icon: 'fa-solid fa-box-archive' },
	];

	const location = useLocation();
	const activeLoc = location.pathname.split('/').at(-1);
	return ReactDOM.createPortal(
		<aside ref={ref} className={className}>
			<header className="flex relative justify-between items-center px-4 py-3">
				<Avatar imgUrl="" imgSize="sm" className="cursor-pointer" />
				<h4 className="grow ml-12 cursor-pointer">
					User fullname <i className="fa-solid fa-chevron-down"></i>
				</h4>
				<span className="fa-solid fa-gear cursor-pointer"></span>
			</header>
			<section className="flex flex-col capitalize">
				{list.map(el => (
					<div
						key={el.name}
						className={`flex items-center cursor-pointer hover:bg-gray-500 rounded p-3 text-white ${
							activeLoc === el.name ? 'bg-gray-600' : ''
						} ${el.name === 'marketplace' ? 'relative left-[-2px]' : ''}`}
					>
						<span
							className={el.icon + ' bg-slate-500 px-2 py-1 rounded mr-11 text-xl'}
						></span>
						<p>{el.name}</p>
					</div>
				))}
			</section>
		</aside>,
		el.current
	);
};
export default SideBar;
