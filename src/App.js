import { useState } from 'react';
import Panel from './components/Panel';

const BUTTONS = [
	{
		key: 'Q',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
		name: 'Heater 1',
	},
	{
		key: 'W',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
		name: 'Heater 2',
	},
	{
		key: 'E',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
		name: 'Heater 3',
	},
	{
		key: 'A',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
		name: 'Heater 4',
	},
	{
		key: 'S',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
		name: 'Clap',
	},
	{
		key: 'D',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
		name: 'Open HH',
	},
	{
		key: 'Z',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
		name: "Kick n' Hat",
	},
	{
		key: 'X',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		name: 'Kick',
	},
	{
		key: 'C',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
		name: 'Closed HH',
	},
];

const BUTTONS2 = [
	{
		key: 'Q',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
		name: 'Chord 1',
	},
	{
		key: 'W',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
		name: 'Chord 2',
	},
	{
		key: 'E',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
		name: 'Chord 3',
	},
	{
		key: 'A',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
		name: 'Shaker',
	},
	{
		key: 'S',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
		name: 'Open HH',
	},
	{
		key: 'D',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
		name: 'Closed HH',
	},
	{
		key: 'Z',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
		name: 'Punchy Kick',
	},
	{
		key: 'X',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
		name: 'Side Stick',
	},
	{
		key: 'C',
		audio: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
		name: 'Snare',
	},
];

const App = () => {
	const [text, setText] = useState('');
	const [buttons, setButtons] = useState('original');

	const handleText = (soundName) => {
		setText(soundName);
	};

	const handleClick = () => {
		setButtons(buttons === 'original' ? 'optional' : 'original');
	};

	return (
		<div id='drum-machine'>
			<div id='display'>
				<Panel
					textHandler={handleText}
					buttonsPanel={buttons === 'original' ? BUTTONS : BUTTONS2}
					nameSound={text}
					switcher={handleClick}
				/>
			</div>
		</div>
	);
};

export default App;
