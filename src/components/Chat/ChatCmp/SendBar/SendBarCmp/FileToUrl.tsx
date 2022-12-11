import { utilService } from '@/services/util.service';
import React, { ChangeEvent, useEffect, useState } from 'react';

const FileToUrl = ({ file }: { file: File }) => {
	const [url, setUrl] = useState<string | null>(null);

	useEffect(() => {
		utilService
			.getFileDataUrl(file)
			.then(url => setUrl(url))
			.catch(console.error);
	}, [file]);
	if (url === null) return <div>Loading file...</div>;
	if (file.type.startsWith('video/')) return <video controls src={url}></video>;
	if (file.type.startsWith('image/')) return <img src={url} alt="" />;
	return <div>File type is not supported</div>;
};

export default FileToUrl;
