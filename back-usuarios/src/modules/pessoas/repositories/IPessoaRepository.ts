import { ICreatePessoaDTO } from "../dtos/ICreatePessoaDTO";
import { Pessoa } from "../entities/Pessoa";

interface IPessoaRepository{
    create(data: ICreatePessoaDTO): Promise <void>;
    findById(id:string): Promise <Pessoa>;
    findByEmail(email:string): Promise <Pessoa>;
    findAll(): Promise<Pessoa[]>;
}

export {IPessoaRepository}