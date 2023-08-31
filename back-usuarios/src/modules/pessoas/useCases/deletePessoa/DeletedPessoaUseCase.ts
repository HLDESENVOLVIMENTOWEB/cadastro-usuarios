import { inject, injectable } from "tsyringe";
import { IPessoaRepository } from "../../repositories/IPessoaRepository";

@injectable()
class DeleteIdPessoaUseCase{
    constructor(
    @inject("PessoaRepository")
    private pessoaRepository: IPessoaRepository)
    {}
    async execute(id: string): Promise <void>{
        await this.pessoaRepository.delete(id)
    }
}

export { DeleteIdPessoaUseCase }