import PropTypes, {string} from 'prop-types';

export const GifCard = ({url, title}) => {
	return (
		<div className='card'>
			<img src={url} alt={title} />
		</div>
	);
};

GifCard.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
