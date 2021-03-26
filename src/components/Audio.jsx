const Audio = ({ source, audioId }) => [
	<audio key={source} src={source} id={audioId} className='clip' />,
];

export default Audio;
