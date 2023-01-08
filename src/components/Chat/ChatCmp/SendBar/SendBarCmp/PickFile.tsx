import React, { ChangeEvent, useState } from 'react';
import FileToUrl from './FileToUrl';
type Props = {
	file: null | File;
	setFile: Function;
};
const PickFile = ({ file, setFile }: Props) => {
	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = ev.target.files?.[0];
		if (selectedFile) setFile(selectedFile);
	};
	return (
		<>
			<label
				htmlFor="fileInput"
				className="fa-solid h-fit fa-image hover:bg-[#4444] hover:rounded-full p-2 cursor-pointer"
			></label>
			<input
				id="fileInput"
				className="hidden"
				accept="image/*,video/*"
				onChange={ev => handleChange(ev)}
				type="file"
			/>
			{!!file && <FileToUrl file={file} />}
		</>
	);
};

export default PickFile;
