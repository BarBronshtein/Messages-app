import { useAudioRecorder } from '@/CustomHooks/useAudioRedcorder';
import { utilService } from '@/services/util.service';
import React, { useEffect, useState } from 'react';

const AudioRecorder = () => {
	const { startRecording, stopRecording, audioResult } = useAudioRecorder();
	useEffect(() => {
		if (!audioResult) return;
		// Do something
		// messages.push({ type: 'audio', id: utilService.makeId() });
	}, [audioResult]);
	return (
		<span
			title="Click and Hold"
			onTouchStart={() => startRecording()}
			onMouseDown={() => startRecording()}
			onTouchEnd={() => stopRecording()}
			onMouseUp={() => stopRecording()}
			className="fa-solid fa-microphone cursor-pointer hover:bg-[#4444] hover:rounded-full p-2"
		></span>
	);
};

export default AudioRecorder;
