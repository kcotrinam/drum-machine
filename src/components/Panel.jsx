import { useEffect } from 'react';
import Button from './Button';

const BUTTONS1 = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
// const SOUNDS = [
// 	'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
// 	'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
// ];

const BUTTONS = [
	{
		key: 'Q',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		key: 'W',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		key: 'E',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		key: 'A',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		key: 'S',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		key: 'D',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		key: 'Z',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		key: 'X',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		key: 'C',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

const Panel = () => {
	const handleClick = (e) => {
		const index = BUTTONS1.indexOf(e.target.dataset.name.toUpperCase());
		play(index);
	};

	useEffect(() => {
		const keyPressed = (e) => {
			if (BUTTONS1.includes(e.key.toUpperCase())) {
				const index = BUTTONS1.indexOf(e.key.toUpperCase());
				play(index);
			}
		};

		window.addEventListener('keydown', keyPressed);

		return () => window.removeEventListener('keydown', keyPressed);
	}, []);

	const play = (idx) => {
		const audios = [...document.querySelectorAll('audio')];
		audios[idx].play();
	};

	return (
		<>
			{BUTTONS.map((btn) => (
				<Button
					clickHandler={handleClick}
					soundSource={btn.audio}
					key={btn.key}
					buttonName={btn.key}
				/>
			))}
		</>
	);
};

export default Panel;
