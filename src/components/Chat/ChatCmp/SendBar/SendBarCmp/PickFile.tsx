import React, { ChangeEvent, useRef } from 'react';
import FileToUrl from './FileToUrl';
type Props = {
	file: null | File;
	setFile: Function;
	capture?: boolean | 'user' | 'environment';
	className: string;
};
const PickFile = ({ file, setFile, className, capture }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = ev.target.files?.[0];
		if (selectedFile) setFile(selectedFile);
	};
	const markup = capture ? (
		<input
			ref={inputRef}
			id="fileInput"
			className="hidden"
			accept="image/*,video/*;capture=camera"
			onChange={ev => handleChange(ev)}
			type="file"
			capture={capture}
		/>
	) : (
		<input
			ref={inputRef}
			id="fileInput"
			className="hidden"
			onChange={ev => handleChange(ev)}
			type="file"
		/>
	);
	return (
		<>
			<label
				htmlFor="fileInput"
				className={`fa-solid h-fit ${className} hover:bg-[#4444] hover:rounded-full p-2 cursor-pointer`}
			></label>
			{markup}
			{!!file && (
				<FileToUrl
					clearFile={() => {
						setFile(null);
						inputRef.current!.value = '';
					}}
					file={file}
				/>
			)}
		</>
	);
};

export default PickFile;
