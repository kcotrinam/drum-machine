import Audio from './Audio';

const Button = ({ buttonName, clickHandler, soundSource }) => {
	return (
		<>
			<button
				key={buttonName}
				className='drum-pad'
				id={buttonName}
				onClick={clickHandler}>
				{buttonName}
				<Audio source={soundSource} audioId={buttonName} />
			</button>
		</>
	);
};

export default Button;
