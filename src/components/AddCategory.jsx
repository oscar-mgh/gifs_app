import PropTypes from 'prop-types';
import {useState} from 'react';

export const AddCategory = ({setCategories, onNewCategory}) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({target}) => {
		setInputValue(target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 1) {
			onNewCategory(inputValue.trim());
			setInputValue('');
		}
	};

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input
				type='text'
				placeholder='Search gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

AddCategory.propTyes = {
	onNewCategory: PropTypes.func.isRequired,
};
