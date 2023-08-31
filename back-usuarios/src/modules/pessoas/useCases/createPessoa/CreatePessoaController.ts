import { container } from "tsyringe"
import {Request,Response} from "express";
import { CreatePessoaUseCase } from "./CreatePessoaUseCase"

class CreatePessoaController{
   async handle(request: Request, response: Response): Promise <Response>{
        const {nome, email, dataNascimento} = request.body;

        const createPessoaUseCase = container.resolve(CreatePessoaUseCase);
    
        const res = await createPessoaUseCase.execute({nome, email, dataNascimento});

        return response.status(201).send(res);
    }
}

export { CreatePessoaController}