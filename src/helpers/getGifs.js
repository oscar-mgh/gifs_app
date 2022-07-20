export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?limit=12&api_key=0XJlwlozHbEd9xR4pmXsBBDEnT57j1P7&q=${category}`;
	const resp = await fetch(url);
	const {data} = await resp.json();
	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
	return gifs;
};
