import Loader from '@/components/Loader/Loader';
import { setUserMsg } from '@/store/actions/userMsgActions';
import { useAppDispatch } from '@/store/TypeHooks';
import React, { useEffect, useState } from 'react';

const FileToUrl = ({
	file,
	clearFile,
}: {
	file: File;
	clearFile: Function;
}) => {
	const divClassName = 'absolute bottom-14 left-[50%] translate-x-[-50%]';
	const spanClassName =
		'fa-solid cursor-pointer fa-times absolute bottom-32 right-[-15%]';
	const className = 'max-w-[350px] object-contain h-[150px]';

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
			clearFile();
			return dispatch(setUserMsg({ type: 'error', txt: data }));
		};

		return () => {
			worker.terminate();
		};
	}, [file]);

	if (file.type.startsWith('video/') && url)
		return (
			<div className={divClassName}>
				<video className={className} controls src={url}></video>
				<span onClick={() => clearFile()} className={spanClassName}></span>
			</div>
		);
	if (file.type.startsWith('image/') && url)
		return (
			<div className={divClassName}>
				<img className={className} src={url} alt="" />
				<span onClick={() => clearFile()} className={spanClassName}></span>
			</div>
		);
	if (url === null)
		return (
			<div className={divClassName}>
				<Loader />;
			</div>
		);
	return <div className="absolute bottom-14">File is not supported</div>;
};

export default FileToUrl;
