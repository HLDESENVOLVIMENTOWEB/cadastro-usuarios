import { container } from "tsyringe"
import {Request,Response} from "express";
import { GetIdPessoaUseCase } from "./GetIdPessoaUseCase"

class CreatePessoaController{
   async handle(request: Request, response: Response): Promise <Response>{
        const {id} = request.params;

        const getIdPessoaUseCase = container.resolve(GetIdPessoaUseCase);
    
        await getIdPessoaUseCase.execute(id);

        return response.status(201).send();
    }
}

export { CreatePessoaController}