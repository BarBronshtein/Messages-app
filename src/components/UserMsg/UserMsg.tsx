import { useAppDispatch, useAppSelector } from '@/store/TypeHooks';
import { clearMsg } from '@/store/actions/userMsgActions';
import './UserMsg.css';

const UserMsg = () => {
	const { msg } = useAppSelector(state => state.userMsgReducer);
	const dispatch = useAppDispatch();
	const onClearMsg = () => dispatch(clearMsg());
	if (msg) setTimeout(onClearMsg, 3000);
	return (
		<section
			className={`user-msg 
			} text-xl fixed bottom-0 right-0 opacity-0 translate-x[150px] transition-transform ${
				msg?.type ? msg.type : ''
			} `}
		>
			<div className="user-msg-wrapper flex flex-col ">
				<span>{msg?.txt}</span>
				<button
					className="user-msg-btn cursor-pointer text-center self-center rounded border-none p-2"
					onClick={onClearMsg}
				>
					Close
				</button>
			</div>
		</section>
	);
};

export default UserMsg;
