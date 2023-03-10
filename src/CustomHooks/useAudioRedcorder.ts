import { utilService } from './../services/util.service';
import { useState, useRef } from 'react';
export enum RECORD_STATUS {
	RECORDING = 'recording',
	IDLE = 'idle',
}
let mediaRecorder: MediaRecorder;
let localStream: MediaStream;
interface IBlob extends Blob {
	id?: string;
}
export const useAudioRecorder = () => {
	const dataArray = useRef<Blob[]>([]);
	const [status, setStatus] = useState<RECORD_STATUS>(RECORD_STATUS.IDLE);
	const [audioResult, setAudioResult] = useState<IBlob>(null!);
	const [errorMessage, setErrorMessage] = useState<object | string>('');

	const startRecording = () => {
		if (status !== RECORD_STATUS.IDLE) return;
		navigator.mediaDevices
			.getUserMedia({ audio: true })
			.then((mediaStream: MediaStream) => {
				localStream = mediaStream;
				mediaRecorder = new MediaRecorder(mediaStream);
				mediaRecorder.start();

				mediaRecorder.onstart = () => setStatus(RECORD_STATUS.RECORDING);

				mediaRecorder.ondataavailable = ({ data }: BlobEvent) =>
					dataArray.current.push(data);
			})
			.catch(err => setErrorMessage(err));
	};

	const stopRecording = () => {
		if (status === RECORD_STATUS.IDLE) return;
		mediaRecorder.stop();
		mediaRecorder.onstop = () => {
			const audioData: IBlob = new Blob(dataArray.current, {
				type: 'audio/webm;',
			});
			dataArray.current = [];
			audioData.id = utilService.makeId();
			setAudioResult(audioData);
			setStatus(RECORD_STATUS.IDLE);
			localStream
				.getAudioTracks()
				.forEach((track: MediaStreamTrack) => track.stop());
		};
	};

	return {
		startRecording,
		stopRecording,
		audioResult,
		errorMessage,
		status,
	};
};
