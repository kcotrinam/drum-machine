import Audio from './Audio';

const Button = ({ buttonName, clickHandler, soundSource, soundName }) => {
	return (
		<>
			<button
				key={buttonName}
				className='drum-pad'
				id={buttonName}
				data-sound={soundName}
				onClick={clickHandler}>
				{buttonName}
				<Audio source={soundSource} audioId={buttonName} />
			</button>
		</>
	);
};

export default Button;
