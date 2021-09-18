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

export interface NewItemCardDetail {
	imgCount: number;
	series: string;
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
	const directory = itemList[0]?.contents;
	const itemMap: any = {};

	directory.forEach((subCategory: any) => {
		itemMap[subCategory.name] = {};
		subCategory.contents.forEach((folders: any) => {
			if (!itemMap[subCategory.name][folders.name]) itemMap[subCategory.name][folders.name] = {};
			folders.contents.forEach((folderContent: any) => {
				itemMap[subCategory.name][folders.name][folderContent.name] = [];
				if (subCategory.name === 'Magnet') {
				}
				itemMap[subCategory.name][folders.name][folderContent.name].push(...folderContent.contents.map((content: any) => content.name));
			});
		});
	});
	return itemMap;
};

export const getItemDetails = (productCode: string): ItemDetailProps => {
	const itemsAvailable = itemDetails.available;
	return itemsAvailable.find((item: { ProductCode?: string }) => item.ProductCode === productCode);
};

// get the items based on params. no params gives all items, category gives all items within that category, subcat gives all items in the subcat
export const getItems = (category: string, subCategory?: string) => {
	console.log(`newGetItems: ${category} - ${subCategory}`);
	const rawData = getFileStructure();
	const getSubCatItems = (categoryData: any, category: string, subCategory: string) => {
		const items = [];
		const subCatData = categoryData[subCategory];
		for (const series in subCatData) {
			items.push({
				category,
				subCategory: subCategory,
				series,
				imgCount: subCatData[series].length,
			});
		}
		return items;
	};

	const getCategoryItems = (category: string) => {
		const categoryData = rawData[category];
		const items = [];
		for (const subCategory in categoryData) {
			items.push(...getSubCatItems(categoryData, category, subCategory));
		}
		// console.log(items);
		return items;
	};

	if (!category || category === 'Products') {
		console.log('here');
		const allItems = Object.keys(rawData).map((_category: string) => getCategoryItems(_category));
		return allItems.flat();
	}
	if (subCategory) {
		console.log(getSubCatItems(rawData[category], category, subCategory));
		return getSubCatItems(rawData[category], category, subCategory);
	}
	return getCategoryItems(category);
};

// getItems('Magnet', 'Carved');

// used for side nav, getting the categories and the sub categories under it
export const getSubCategories = () => {
	const data = getFileStructure();
	const categoryMap: Dictionary<string[]> = {};
	Object.keys(data).forEach((category) => {
		categoryMap[category] = Object.keys(data[category]);
	});
	return categoryMap;
};

// fetch the thumbnail url using item data
export const fetchThumbnail = ({ category, subCategory, series }: NewItemCardDetail): string => {
	return `${baseUrl}/product-images/${category}/${subCategory}/${series}/${series}-Series 001.jpg`;
};

// fetch the thumbnail url using item data
export const fetchImageUrls = ({ category, subCategory, series, imgCount }: NewItemCardDetail): string[] => {
	const imgUrls = [];
	for (let i = 0; i < imgCount; i++) {
		imgUrls.push(`${baseUrl}/product-images/${category}/${subCategory}/${series}/${series}-Series 00${i + 1}.jpg`);
	}
	return imgUrls;
};

export const socialAnchors: Dictionary<React.FC> = {
	instagram: () => (
		<a href={socialLinks['instagram']} target="_blank" rel="noreferrer" key="Instagram">
			Instagram
		</a>
	),
	tokopedia: () => (
		<a href={socialLinks['tokopedia']} target="_blank" rel="noreferrer" key="Tokopedia">
			Tokopedia
		</a>
	),
	whatsapp: () => (
		<a href={socialLinks['whatsapp']} target="_blank" rel="noreferrer" key="Whatsapp">
			Whatsapp
		</a>
	),
	email: () => (
		<a href={socialLinks['email']} key="Email">
			Email
		</a>
	),
};

export const socialLinks: Dictionary<string> = {
	instagram: 'https://www.instagram.com/info.shalom/',
	tokopedia: 'https://tokopedia.link/GHd4ZyWiQib',
	whatsapp: 'https://wa.me/6282311135240?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20products',
	email: "mailto:info@shalomplaques.com?subject=Product Inquiry&body=Hi, I'd like to inquire about your products.",
};
