import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProductDetail: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return <>{id}</>;
};

export default ProductDetail;
