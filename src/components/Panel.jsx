import { useEffect, useState } from 'react';
import play from '../shared/playButton';
import Button from './Button';

const BUTTONS = [
	{
		key: 'Q',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
		name: 'Heater-1',
	},
	{
		key: 'W',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
		name: 'Heater-2',
	},
	{
		key: 'E',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
		name: 'Heater-3',
	},
	{
		key: 'A',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
		name: 'Heater-4_1',
	},
	{
		key: 'S',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
		name: 'Heater-6',
	},
	{
		key: 'D',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
		name: 'Dsc_Oh',
	},
	{
		key: 'Z',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
		name: 'Kick_n_Hat',
	},
	{
		key: 'X',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		name: 'RP4_KICK_1',
	},
	{
		key: 'C',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
		name: 'Cev_H2',
	},
];

const Panel = () => {
	const [text, setText] = useState('');

	const keys = BUTTONS.map((btn) => btn.key);

	const handleClick = (e) => {
		const index = keys.indexOf(e.target.id);
		play(index);
	};

	useEffect(() => {
		const keyPressed = (e) => {
			if (keys.includes(e.key.toUpperCase())) {
				const index = keys.indexOf(e.key.toUpperCase());
				play(index);
			}
		};

		window.addEventListener('keydown', keyPressed);

		return () => window.removeEventListener('keydown', keyPressed);
	}, []);

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
