export const utilService = {
	debounce,
	timeAgo,
	makeId,
	getFileDataUrl,
};

function makeId(length = 8) {
	let id = '';
	const str = 'abcdefghijklmnopqrstubwxyz0123456789';
	for (let i = 0; i < length; i++) {
		id += str.charAt(getRandIntInc(0, str.length));
	}
	return id;
}

function getRandIntInc(min: number, max: number) {
	return Math.trunc(Math.random() * (max + min - 1) + min);
}

function debounce(func: (...args: any[]) => void, wait = 500) {
	let timeout: any;

	return function executedFunction(...args: any[]) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

function timeAgo(input: Date | string | number) {
	const date = input instanceof Date ? input : new Date(+input);
	const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' });

	const ranges = {
		years: 3600 * 24 * 365,
		months: 3600 * 24 * 30,
		weeks: 3600 * 24 * 7,
		days: 3600 * 24,
		hours: 3600,
		minutes: 60,
		seconds: 1,
	};

	const secondsElapsed = (date.getTime() - Date.now()) / 1000;
	let key: keyof typeof ranges;
	for (key in ranges) {
		if (ranges[key] < Math.abs(secondsElapsed)) {
			const delta = secondsElapsed / ranges[key];
			let time = formatter.format(Math.round(delta), key);
			if (time.includes('in')) {
				time = time.replace('in ', '');
				time = time.replace('ago', '');
				time += ' ago';
			}
			return time; //? time : 'Just now'
		}
	}
}

function getFileDataUrl(file: File): Promise<string> {
	if (file.size > 1348576) return Promise.reject('File is too large');
	if (!file.type.startsWith('video') || !file.type.startsWith('image'))
		return Promise.reject('File is not supported');
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = ev => {
			const dataUrl = ev.target?.result;

			resolve(dataUrl as string);
		};
		reader.onerror = error => {
			reject(error);
		};
		reader.readAsDataURL(file);
	});
}
