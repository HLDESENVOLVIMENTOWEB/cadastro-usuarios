import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid';

@Entity("pessoas")
class Pessoa{
    
    @PrimaryColumn()
    id:string;
    
    @Column()
    nome:string;
    
    @Column()
    email: string;
    
    @Column()
    dataNascimento:string;
    
    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(!this.id){
            this.id=uuidV4();
        }
    }
}

export { Pessoa }