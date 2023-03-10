export const utilService = {
	debounce,
	timeAgo,
	makeId,
	auto_height,
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
	if (!input) return '';
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
	return 'Just now';
}

function auto_height(el: HTMLTextAreaElement) {
	el.style.height = '1px';
	el.style.height = el.scrollHeight + 'px';
	if (parseInt(el.style.height) > 225) el.style.overflowY = 'scroll';
	else el.style.overflowY = 'hidden';
}
