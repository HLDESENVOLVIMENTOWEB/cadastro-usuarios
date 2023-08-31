import { Router } from "express";
import { CreatePessoaController } from "../modules/pessoas/useCases/createPessoa/CreatePessoaController";
import { GetPessoaController } from "../modules/pessoas/useCases/getPessoa/GetPessoaController";
import { GetIdPessoaController } from "../modules/pessoas/useCases/getIdPessoa/GetIdPessoaController";
import { DeleteIdPessoaController } from "../modules/pessoas/useCases/deletePessoa/DeleteIdPessoaController";

const pessoasRoutes = Router();

const createPessoaController = new CreatePessoaController();
const getPessoaController = new GetPessoaController();
const getIdPessoaController = new GetIdPessoaController();
const deleteIdPessoaController = new DeleteIdPessoaController();

pessoasRoutes.get('/pessoas', getPessoaController.handle);

pessoasRoutes.get('/pessoa/:id', getIdPessoaController.handle);

pessoasRoutes.post('/pessoa', createPessoaController.handle);

pessoasRoutes.put('/pessoa/:id', (req, res) =>
res.send("<h3>Alerar Pessoas</h3>")
);

pessoasRoutes.delete('/pessoa/:id', deleteIdPessoaController.handle);


export {pessoasRoutes}