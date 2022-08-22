import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getAllProductIds } from '../../lib/products';

type Props = {
	product: IProduct;
};

const ProductDetail: NextPage<Props> = () => {
	const router = useRouter();
	const { id } = router.query;
	return <>{id}</>;
};

export const getStaticPaths = async () => {
	const paths = await getAllProductIds();

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	console.log(params);

	// const { product } = await fetch(`${process.env.API_URL}/product/${params.id}`).then((data) => data.json());
	return { props: { product: '' } };
};

export default ProductDetail;
