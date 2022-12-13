import Loader from '@/components/Loader/Loader';
import { setUserMsg } from '@/store/actions/userMsgActions';
import { useAppDispatch } from '@/store/TypeHooks';
import React, { useEffect, useState } from 'react';

const FileToUrl = ({ file }: { file: File }) => {
	const [url, setUrl] = useState<string | null>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!file) return;

		const worker = new Worker('/src/services/base64.worker.ts');
		worker.postMessage(file);

		worker.onmessage = (
			ev: MessageEvent<{ type: 'success' | 'error'; data: string }>
		) => {
			const {
				data: { type, data },
			} = ev;
			if (type === 'success') return setUrl(data);
			setUrl('');
			return dispatch(setUserMsg({ type: 'error', txt: data }));
		};

		return () => {
			worker.terminate();
		};
	}, [file]);

	if (file.type.startsWith('video/') && url)
		return (
			<video
				className="absolute max-w-[300px] bottom-14"
				controls
				src={url}
			></video>
		);
	if (file.type.startsWith('image/') && url)
		return <img className="absolute max-w-[300px] bottom-14" src={url} alt="" />;
	if (url === null)
		return (
			<div className="relative">
				<Loader />;
			</div>
		);
	return <div className="absolute top-8">File is not supported</div>;
};

export default FileToUrl;
