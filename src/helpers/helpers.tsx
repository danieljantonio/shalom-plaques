interface ItemDetailProps {
	ProductId?: string;
	Barcode?: string;
	ProductCode?: string;
	Description?: string;
	Wording?: string;
	Dimensions?: string;
	Length?: string;
	Width?: string;
	Height?: string;
}

export const groupByN = (n: number, data: any) => {
	let result = [];
	for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
	return result;
};

export const baseUrl = 'http://localhost:3000';

const itemList = require('./test.json');
const itemDetails = require('./available-products.json');

export const capitalize = (text: string) => {
	if (!text) return '';
	const arr = text.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length <= 2) arr[i] = arr[i].toUpperCase();
		else arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join(' ');
};

export const getFileStructure = () => {
	const isDirectory = (obj: any) => obj?.type === 'directory';
	const directory = itemList[0]?.contents;

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

export const getItemDetails = (productCode: string): ItemDetailProps => {
	const itemsAvailable = itemDetails.available;
	return itemsAvailable.find((item: { ProductCode?: string }) => item.ProductCode === productCode);
};

// console.log(getItemDetails('DC03-184NZ'));

export const getItems = (category?: string) => {
	const getCategoryItems = (categoryData: any) => {
		const items: string[] = [];
		Object.values(categoryData).forEach((catData: any, index) => {
			if (catData.length > 0) {
				// console.log(catData);
				catData.map((dt: string) => {
					// console.log(`${capitalize(category.replace('-', ' '))}: ${Object.keys(categoryData)[index]}: ${dt.split('.')[0]}`);
				});
				items.push(...catData.map((dt: string) => dt.split('.')[0]));
			}
		});
		return items;
	};
	const data = getFileStructure();
	if (!category) {
		const allItems: string[] = [];
		Object.keys(data).map((category) => {
			const categoryData = data[category];
			allItems.push(...getCategoryItems(categoryData));
		});
		console.log(allItems);
		return allItems;
	}
	const categoryData = data[capitalize(category.replace('-', ' '))];
	return getCategoryItems(categoryData);
};
getItems();
