import { inject, injectable } from "tsyringe";
import { IPessoaRepository } from "../../repositories/IPessoaRepository";

@injectable()
class GetIdPessoaUseCase{
    constructor(
    @inject("PessoaRepository")
    private pessoaRepository: IPessoaRepository)
    {}
    async execute(id: string): Promise <any>{
      return  await this.pessoaRepository.findById(id)
    }
}

export { GetIdPessoaUseCase }