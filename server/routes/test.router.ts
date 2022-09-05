import { Router } from 'express';
const testRouter = Router();

testRouter.get('/', (req, res) => res.send('Express + Typescript Server'));

export default testRouter;
