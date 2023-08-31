import { container } from "tsyringe"
import {Request,Response} from "express";
import { UpdatePessoaUseCase } from "./UpdatePessoaUseCase"

class UpdatePessoaController{
   async handle(request: Request, response: Response): Promise <Response>{
        const {nome, email, dataNascimento} = request.body;
        const { id } = request.params;

        const updatePessoaUseCase = container.resolve(UpdatePessoaUseCase);
    
        const res =await updatePessoaUseCase.execute({nome, email, dataNascimento, id});

        return response.status(201).send(res);
    }
}

export { UpdatePessoaController}