import { container } from "tsyringe"
import {Request,Response} from "express";
import { GetPessoaUseCase } from "./GetPessoaUseCase"

class GetPessoaController{
   async handle(request: Request, response: Response): Promise <Response>{
        const getPessoaUseCase = container.resolve(GetPessoaUseCase);
    
        await getPessoaUseCase.execute();

        return response.status(201).send();
    }
}

export { GetPessoaController}