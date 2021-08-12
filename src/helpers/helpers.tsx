export const groupByN = (n: number, data: any) => {
	let result = [];
	for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
	return result;
};

export const baseUrl = 'http://localhost:3000';

const items = require('./test.json');

export const capitalize = (text: string) => {
	const arr = text.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length <= 2) arr[i] = arr[i].toUpperCase();
		else arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join(' ');
};

export const getFileStructure = () => {
	const isDirectory = (obj: any) => obj?.type === 'directory';
	const directory = items[0]?.contents;

	const itemMap: any = {};

	directory.forEach((subCategory: any) => {
		itemMap[subCategory.name] = {};
		subCategory.contents.forEach((folders: any) => {
			itemMap[subCategory.name][folders.name] = {};
			folders.contents.forEach((folderContent: any) => {
				if (!isDirectory(folderContent)) {
					// itemMap[subCategory.name][folders.name][folderContent.name] = [folderContent.name];
					itemMap[subCategory.name][folders.name] = [folderContent.name];
					return [folderContent.name];
				} else {
					const folderContents = folderContent.contents.map((content: any) => {
						return content.name;
					});
					// itemMap[subCategory.name][folders.name][folderContent.name] = folderContents;
					itemMap[subCategory.name][folders.name] = folderContents;
					return folderContent;
				}
			});
		});
	});

	return itemMap;
};

export const getItems = (category: string) => {
	const data = getFileStructure();
	console.log(data);
	const categoryData = data[capitalize(category.replace('-', ' '))];
	console.log(Object.values(categoryData));
};
getItems('Box');
