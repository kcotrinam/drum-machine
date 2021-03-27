const stop = (idx) => {
	const audios = [...document.querySelectorAll('audio')];
	audios[idx].pause();
};

export default stop;
