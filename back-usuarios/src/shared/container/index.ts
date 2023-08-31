import { container } from "tsyringe";
import { PessoaRepository } from "../../modules/pessoas/repositories/implementations/PessoaRepository";
import { IPessoaRepository } from "../../modules/pessoas/repositories/IPessoaRepository";


container.registerSingleton<IPessoaRepository>(
    "PessoaRepository",PessoaRepository
)