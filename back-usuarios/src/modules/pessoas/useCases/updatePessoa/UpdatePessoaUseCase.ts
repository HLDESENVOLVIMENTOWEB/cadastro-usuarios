import { inject, injectable } from "tsyringe";
import { ICreatePessoaDTO } from "../../dtos/ICreatePessoaDTO";
import { IPessoaRepository } from "../../repositories/IPessoaRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class UpdatePessoaUseCase{
    constructor(
    @inject("PessoaRepository")
    private pessoaRepository: IPessoaRepository)
    {}
    async execute({
         nome,
         email,
         dataNascimento,
         id
        }: ICreatePessoaDTO): Promise <void>{

        const userAlreadyExists = await this.pessoaRepository.findById(id);

        if(!userAlreadyExists){
            throw new AppError("User not already exists!");
        }
        
        
        await this.pessoaRepository.update({
           nome,
           email,
           dataNascimento,
           id 
        })
    }
}

export { UpdatePessoaUseCase }