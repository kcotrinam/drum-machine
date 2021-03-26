const Audio = ({ source }) => [
	<audio key={source}>
		<source src={source} type='audio/mpeg' />
	</audio>,
];

export default Audio;
