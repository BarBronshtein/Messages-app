onmessage = (ev: MessageEvent<File>) => {
	const file = ev.data;
	if (file.size > 5272880)
		return postMessage({ type: 'error', data: 'File too large' });

	if (!file.type.startsWith('video/') && !file.type.startsWith('image/'))
		return postMessage({ type: 'error', data: 'File is not supported' });

	const reader = new FileReader();
	reader.onload = () => {
		postMessage({ type: 'success', data: reader.result });
	};
	reader.onerror = ev => {
		postMessage({ type: 'error', data: ev });
	};
	reader.readAsDataURL(file);
};
