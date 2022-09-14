import axios from 'axios';

export const delay = (delayInms: number) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(2);
		}, delayInms);
	});
};

export const capitalize = (text: string) => {
	const arr = text.split(' ');

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join(' ');
};

export const fetchData = async (route: string) => {
	try {
		const { data } = await axios.get(`${process.env.REACT_APP_API_URL}${route}`);
		return data;
	} catch (error) {
		throw error;
	}
};

export const postData = async (route: string, _data: any) => {
	try {
		const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/${route}`, _data);
		return data;
	} catch (error) {
		throw error;
	}
};
