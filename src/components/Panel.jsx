import { useEffect, useState } from 'react';
import play from '../shared/playButton';
import Button from './Button';

const Panel = ({ textHandler, buttonsPanel, nameSound, switcher }) => {
	const keys = buttonsPanel.map((btn) => btn.key);

	const handleClick = (e) => {
		const index = keys.indexOf(e.target.id);
		play(index);
		textHandler(buttonsPanel[index].name);
	};

	useEffect(() => {
		const keyPressed = (e) => {
			const index = keys.indexOf(e.key.toUpperCase());
			if (keys.includes(e.key.toUpperCase())) {
				play(index);
				textHandler(buttonsPanel[index].name);
			}
		};

		window.addEventListener('keydown', keyPressed);

		return () => window.removeEventListener('keydown', keyPressed);
	}, []);

	return (
		<>
			<div>
				{buttonsPanel.map((btn) => (
					<Button
						clickHandler={handleClick}
						soundSource={btn.audio}
						key={btn.key}
						soundName={btn.name}
						buttonName={btn.key}
					/>
				))}
			</div>
			<p>{nameSound}</p>
			<div onClick={switcher}>here</div>
		</>
	);
};

export default Panel;
