import { Router } from "express";
import { CreatePessoaController } from "../modules/pessoas/useCases/createPessoa/CreatePessoaController";
import { GetPessoaController } from "../modules/pessoas/useCases/getPessoa/GetPessoaController";
import { GetIdPessoaController } from "../modules/pessoas/useCases/getIdPessoa/GetIdPessoaController";

const pessoasRoutes = Router();

const createPessoaController = new CreatePessoaController();
const getPessoaController = new GetPessoaController();
const getIdPessoaController = new GetIdPessoaController();

pessoasRoutes.get('/pessoas', getPessoaController.handle);

pessoasRoutes.get('/pessoa/:id', getIdPessoaController.handle);

pessoasRoutes.post('/pessoa', createPessoaController.handle);

pessoasRoutes.put('/pessoa/:id', (req, res) =>
res.send("<h3>Alerar Pessoas</h3>")
);

pessoasRoutes.delete('/pessoa/:id', (req, res) =>
res.send("<h3>Deletar Pessoas</h3>")
);


export {pessoasRoutes}