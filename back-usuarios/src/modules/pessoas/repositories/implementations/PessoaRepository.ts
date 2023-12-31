import { getRepository, Repository } from "typeorm";
import { Pessoa } from "../../entities/Pessoa";
import { ICreatePessoaDTO } from "../../dtos/ICreatePessoaDTO";
import { IPessoaRepository } from "../IPessoaRepository";

class PessoaRepository implements IPessoaRepository{
    private repository: Repository<Pessoa>;
    constructor(){
        this.repository = getRepository(Pessoa);
    }
    
    async create({nome, email, dataNascimento}: ICreatePessoaDTO): Promise<void> {
        const user = this.repository.create({
            nome,
            email,
            dataNascimento
        })

        await this.repository.save(user);
    }

    async update({nome, email, dataNascimento, id}: ICreatePessoaDTO): Promise<any> {
        return this.repository.update({ 
            nome,
            email,
            dataNascimento
         }, { id: id });
    }

    async delete(id: string): Promise<any> {
        const pessoa = await this.repository.delete({
            id
        });
        return pessoa;
    }

    async findByEmail(email: string): Promise<Pessoa> {
        const pessoa = await this.repository.findOneBy({
            email
        });
        return pessoa;
    }

    async findAll(): Promise<Pessoa[]> {
        const pessoa = await this.repository.find();
        return pessoa;
    }

    async findById(id: string): Promise<Pessoa> {
        const pessoa = await this.repository.findOneBy({
            id
        });
        return pessoa;
    }
}



export { PessoaRepository };