import { useEffect } from 'react';
import play from '../shared/playButton';
import Button from './Button';
import '../scss/styles.scss';

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
			<div className='left-wrapper'>
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
			<div className='right-wrapper'>
				<div className='top'>
					<p className='pad-name'>{nameSound}</p>
				</div>
				<div className='bottom'>
					<h3 className='switcher-title'>Bank</h3>
					<div className='switcher' onClick={switcher}>
						<div className='switcher-btn'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Panel;
