const Button = ({ buttonName, clickHandler }) => {
	return (
		<button data-name={buttonName} onClick={clickHandler}>
			{buttonName}
		</button>
	);
};

export default Button;
