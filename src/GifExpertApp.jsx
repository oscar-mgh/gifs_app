import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['SUPER SAIYAN BLUE']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory ,...categories]);
	};

	return (
		<div>
			<h1 className='app__title'> Gif App </h1>

			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</div>
	);
};
