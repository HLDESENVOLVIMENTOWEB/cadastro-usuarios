import { Router } from "express";

const pessoasRoutes = Router();

pessoasRoutes.get('/pessoas', (req, res) =>
res.send("<h3>Litar Pessoas</h3>")
);

pessoasRoutes.get('/pessoa/:id', (req, res) =>
res.send("<h3>getId Pessoas</h3>")
);

pessoasRoutes.post('/pessoa', (req, res) =>
res.send("<h3>Cadastro de Pessoas</h3>")
);

pessoasRoutes.put('/pessoa/:id', (req, res) =>
res.send("<h3>Alerar Pessoas</h3>")
);



pessoasRoutes.delete('/pessoa/:id', (req, res) =>
res.send("<h3>Deletar Pessoas</h3>")
);


export {pessoasRoutes}