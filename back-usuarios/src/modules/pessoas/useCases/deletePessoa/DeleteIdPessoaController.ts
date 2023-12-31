import { container } from "tsyringe"
import {Request,Response} from "express";
import { DeleteIdPessoaUseCase } from "./DeletedPessoaUseCase"

class DeleteIdPessoaController{
   async handle(request: Request, response: Response): Promise <Response>{
        const {id} = request.params;

        const deleteIdPessoaUseCase = container.resolve(DeleteIdPessoaUseCase);
    
        const res = await deleteIdPessoaUseCase.execute(id);

        return response.status(201).send(res);
    }
}

export { DeleteIdPessoaController}