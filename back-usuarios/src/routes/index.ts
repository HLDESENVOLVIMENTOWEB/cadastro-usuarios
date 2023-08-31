import { Router } from 'express';
import { pessoasRoutes } from './pessoas.routes';

const router = Router();

router.use("/",pessoasRoutes);

export { router };