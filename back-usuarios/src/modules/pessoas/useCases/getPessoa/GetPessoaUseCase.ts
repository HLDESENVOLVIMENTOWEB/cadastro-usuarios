import { inject, injectable } from "tsyringe";
import { IPessoaRepository } from "../../repositories/IPessoaRepository";

@injectable()
class GetPessoaUseCase{
    constructor(
    @inject("PessoaRepository")
    private pessoaRepository: IPessoaRepository)
    {}
    async execute(): Promise <any>{
      return  await this.pessoaRepository.findAll()
    }
}

export { GetPessoaUseCase }