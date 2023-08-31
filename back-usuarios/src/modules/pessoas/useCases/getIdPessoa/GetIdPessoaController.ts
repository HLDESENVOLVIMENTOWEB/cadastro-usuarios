import { container } from "tsyringe"
import {Request,Response} from "express";
import { GetIdPessoaUseCase } from "./GetIdPessoaUseCase"

class GetIdPessoaController{
   async handle(request: Request, response: Response): Promise <Response>{
        const {id} = request.params;

        const getIdPessoaUseCase = container.resolve(GetIdPessoaUseCase);
    
        const res = await getIdPessoaUseCase.execute(id);

        return response.status(201).send(res);
    }
}

export { GetIdPessoaController}