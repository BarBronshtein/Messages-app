import React, { ChangeEvent } from 'react';
import FileToUrl from './FileToUrl';
type Props = {
	file: null | File;
	setFile: Function;
	capture?: boolean | 'user' | 'environment';
	className: string;
};
const PickFile = ({ file, setFile, className, capture }: Props) => {
	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = ev.target.files?.[0];
		if (selectedFile) setFile(selectedFile);
	};
	return (
		<>
			<label
				htmlFor="fileInput"
				className={`fa-solid h-fit ${className} hover:bg-[#4444] hover:rounded-full p-2 cursor-pointer`}
			></label>
			<input
				id="fileInput"
				className="hidden"
				accept="image/*,video/*"
				onChange={ev => handleChange(ev)}
				type="file"
				capture={capture}
			/>
			{!!file && <FileToUrl clearFile={() => setFile(null)} file={file} />}
		</>
	);
};

export default PickFile;
