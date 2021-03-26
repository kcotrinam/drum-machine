import Audio from './Audio';

const Button = ({ buttonName, clickHandler, soundSource }) => {
	return (
		<>
			<button
				key={buttonName}
				className='drum-pad'
				data-name={buttonName}
				onClick={clickHandler}>
				{buttonName}
			</button>
			<Audio source={soundSource} />
		</>
	);
};

export default Button;
