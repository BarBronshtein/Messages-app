import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router-dom';
import Avatar from '@/components/Avatar';
import ProfileModal from '@/components/ProfileModal/ProfileModal';
import { userService } from '@/services/user.service';
import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { changeTheme } from '@/store/actions/themeAction';

type EventListener = (this: Element, ev: Event) => void;
type Props = { isShown: boolean; onClose: () => void };

const SideBar = ({ isShown, onClose }: Props) => {
	const ref = useRef<null | HTMLElement>(null);
	const el = useRef<Element>(document.getElementById('modal-root') as Element);
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector(state => state.themeReducer);
	const setTheme = () => dispatch(changeTheme());
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const handleClickOutside = useCallback((ev: MouseEvent) => {
		const target = ev.target;
		if (!target || !ref.current) return;
		if (!ref.current?.contains(target as Node)) {
			onClose();
			setIsOpen(() => false);
			el.current.classList.add('z-[-1]', 'cursor-default');
		}
	}, []);

	useLayoutEffect(() => {
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

	const className =
		'relative bg-[#242526] p-2 z-10 text-white transition-all w-[80vw] cursor-default max-w-[320px] h-screen ' +
		(isShown ? 'translate-x-[0]' : 'translate-x-[-100vw]');
	const list = [
		{ name: 'chats', icon: 'fa-solid fa-comment' },
		{ name: 'marketplace', icon: 'fa-solid fa-store' },
		{ name: 'archive', icon: 'fa-solid fa-box-archive' },
	];

	return ReactDOM.createPortal(
		<aside ref={ref} className={className}>
			<header className="flex relative justify-between items-center px-4 py-3">
				<Avatar
					imgUrl={userService.getLoggedInUser().photo}
					imgSize="sm"
					className="cursor-pointer"
				/>
				<h4
					className="grow ml-12 cursor-pointer"
					onClick={() => setIsOpen(prev => !prev)}
				>
					{userService.getLoggedInUser().fullname}{' '}
					<i className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'}`}></i>
				</h4>
				<span
					className="fa-solid fa-gear cursor-pointer"
					onClick={() => setIsOpen(prev => !prev)}
				></span>
				{isOpen && <ProfileModal />}
			</header>
			<section className="flex flex-col capitalize">
				{list.map(el => (
					<div
						key={el.name}
						className={`flex items-center cursor-pointer hover:bg-gray-500 rounded p-3 text-white ${
							location.pathname.includes(el.name) ? 'bg-gray-600' : ''
						} ${el.name === 'marketplace' ? 'relative left-[-2px]' : ''}`}
					>
						<span
							className={el.icon + ' bg-slate-500 px-2 py-1 rounded mr-11 text-xl'}
						></span>
						<p>{el.name}</p>
					</div>
				))}
				<div
					onClick={() => setTheme()}
					className="flex items-center cursor-pointer hover:bg-gray-500 rounded p-3 text-white"
				>
					<span
						className={`fa-solid ${
							theme === 'dark' ? 'fa-moon' : 'fa-sun'
						} bg-slate-500 px-2 py-1 rounded mr-11 text-xl`}
					></span>
					<p>Theme</p>
				</div>
			</section>
		</aside>,
		el.current
	);
};
export default SideBar;
