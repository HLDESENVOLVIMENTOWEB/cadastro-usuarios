import { inject, injectable } from "tsyringe";
import { ICreatePessoaDTO } from "../../dtos/ICreatePessoaDTO";
import { IPessoaRepository } from "../../repositories/IPessoaRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreatePessoaUseCase{
    constructor(
    @inject("PessoaRepository")
    private pessoaRepository: IPessoaRepository)
    {}
    async execute({
         nome,
         email,
         dataNascimento
        }: ICreatePessoaDTO): Promise <any>{

        const userAlreadyExists = await this.pessoaRepository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError("User already exists!");
        }
        
        
        return await this.pessoaRepository.create({
           nome,
           email,
           dataNascimento 
        })
    }
}

export { CreatePessoaUseCase }