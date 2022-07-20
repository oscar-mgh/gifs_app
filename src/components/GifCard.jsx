import PropTypes, {string} from 'prop-types';

export const GifCard = ({url, title}) => {
	return (
		<div className='card'>
			<h2>{title}</h2>
			<img src={url} alt={title} />
		</div>
	);
};

GifCard.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
