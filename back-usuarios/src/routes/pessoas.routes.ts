import { Router } from "express";
import { CreatePessoaController } from "../modules/pessoas/useCases/createUser/CreatePessoaController";

const pessoasRoutes = Router();

const createPessoaController = new CreatePessoaController();

pessoasRoutes.get('/pessoas', (req, res) =>
res.send("<h3>Litar Pessoas</h3>")
);

pessoasRoutes.get('/pessoa/:id', (req, res) =>
res.send("<h3>getId Pessoas</h3>")
);

pessoasRoutes.post('/pessoa', createPessoaController.handle);

pessoasRoutes.put('/pessoa/:id', (req, res) =>
res.send("<h3>Alerar Pessoas</h3>")
);

pessoasRoutes.delete('/pessoa/:id', (req, res) =>
res.send("<h3>Deletar Pessoas</h3>")
);


export {pessoasRoutes}