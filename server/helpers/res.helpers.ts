export const returnResponse = (status: number, res: any, data: any) => {
	return res.status(status).send({ status, ...data });
};
