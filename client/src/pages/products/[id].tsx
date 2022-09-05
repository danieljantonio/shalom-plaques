import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { getAllProductIds } from '../../lib/products';

type Props = {
	product: IProduct;
};

const ProductDetail: NextPage<Props> = ({ product }) => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<div>Hero Here</div>
			<div>Body and product details</div>
			<div className='h-40'>
				<h1>Series: {product.series}</h1>
				<h1>
					Category: {product.category.name} - {product.subCategory.name}
				</h1>
			</div>
		</>
	);
};

export const getStaticPaths = async () => {
	const paths = await getAllProductIds();

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { product } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${params?.id}`).then((data) => data.json());

	return { props: { product } };
};

export default ProductDetail;
