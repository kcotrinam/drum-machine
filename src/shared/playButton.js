const play = (idx) => {
	const audios = [...document.querySelectorAll('audio')];
	audios[idx].play();
};

export default play;
