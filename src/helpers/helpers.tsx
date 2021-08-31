export interface ItemDetailProps {
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

export interface ItemCardDetail {
	productCode: string;
	category: string;
	subCategory: string;
}

export interface Dictionary<T> {
    [Key: string]: T;
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
			if (!itemMap[subCategory.name][folders.name]) itemMap[subCategory.name][folders.name] = [];
			folders.contents.forEach((folderContent: any) => {
				if (!isDirectory(folderContent)) {
					itemMap[subCategory.name][folders.name].push(folderContent.name);
				} else {
					itemMap[subCategory.name][folders.name].push(...folderContent.contents.map((content: any) => content.name));
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

export const getItems = (category?: string) => {
	const getCategoryItems = (category: string, categoryData: any) => {
		const items: ItemCardDetail[] = [];
		Object.values(categoryData).forEach((catData: any, index) => {
			if (catData.length > 0) {
				items.push(
					...catData.map((dt: string) => {
						return {
							category,
							subCategory: Object.keys(categoryData)[index],
							productCode: dt.split('.')[0],
						};
					}),
				);
			}
		});
		return items;
	};
	const data = getFileStructure();
	if (!category || category === 'Products') {
		const allItems: ItemCardDetail[] = [];
		Object.keys(data).map((category: string) => {
			const categoryData = data[category];
			allItems.push(...getCategoryItems(category, categoryData));
			return null;
		});
		return allItems;
	}
	const categoryData = data[capitalize(category.replace('-', ' '))];
	return getCategoryItems(capitalize(category.replace('-', ' ')), categoryData);
};

export const socialAnchors: Dictionary<React.FC> = {
	instagram: () => <a href="https://instagram.com/maranathahandicraft" target="_blank" rel="noreferrer" key="Instagram">Instagram</a>,
	tokopedia: () => <a href="https://tokopedia.link/GHd4ZyWiQib" target="_blank" rel="noreferrer" key="Tokopedia">Tokopedia</a>,
	whatsapp: () => (<a href="https://wa.me/6282311135240?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20products" target="_blank" rel="noreferrer" key="Whatsapp">Whatsapp</a>),
	email: () => <a href="mailto:info@shalomplaques.com?subject=Product Inquiry&body=Hi, I'd like to inquire about your products." key="Email">Email</a>,
}

export const socialLinks: Dictionary<string> = {
	instagram: "https://instagram.com/maranathahandicraft",
	tokopedia: "https://tokopedia.link/GHd4ZyWiQib",
	whatsapp: "https://wa.me/6282311135240?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20products",
	email: "mailto:info@shalomplaques.com?subject=Product Inquiry&body=Hi, I'd like to inquire about your products.",
}