import { useAudioRecorder } from '@/CustomHooks/useAudioRedcorder';
import './AudioRecorder.css';
import React, { useEffect } from 'react';
import AudioFile from './AudioFile';

const AudioRecorder = () => {
	const { startRecording, stopRecording, audioResult, status } =
		useAudioRecorder();
	useEffect(() => {
		if (!audioResult) return;
		console.log(audioResult);
		// Do something
		// messages.push({ type: 'audio', id: utilService.makeId() });
	}, [audioResult]);
	return (
		<>
			<span
				title="Click and Hold"
				onTouchStart={() => startRecording()}
				onMouseDown={() => startRecording()}
				onTouchEnd={() => stopRecording()}
				onMouseUp={() => stopRecording()}
				className={`fa-solid fa-microphone ${
					status === 'idle' ? '' : 'blink'
				} cursor-pointer hover:bg-[#4444] hover:rounded-full h-fit p-2`}
			></span>
			<AudioFile audio={audioResult} />
		</>
	);
};

export default AudioRecorder;
