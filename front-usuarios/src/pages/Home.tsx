import { Button } from "../components/Button/button";
import { Table } from "../components/table/table";
import { FormContainer, HomeContainer, TableContainer, TextInput } from "./usuario.styles";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';

interface FormProps {
    nome: string;
    email: string;
    dataNascimento: string;
}

export function Home() {

    const newFormValidationSchema = zod.object({
        nome: zod.string().min(1, 'Nome obrigatório'),
        email: zod.string().min(1, 'Email é obrigatório'),
        dataNascimento: zod.string().min(1, 'Data de nascimento é obrigatório'),
    })

    const { register, handleSubmit, formState } = useForm<FormProps>({
        resolver: zodResolver(newFormValidationSchema),
        defaultValues: {
            dataNascimento: '',
            email: '',
            nome: ''
        }
    })



    function handleSubmitFiltro(data: FormProps) {
        
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleSubmitFiltro)} action="">
                <FormContainer>
                <label htmlFor="">Nome</label>
                <TextInput type="text" id="nome" placeholder="Digite o nome" { ...register('nome') } />

                <label htmlFor="">Email</label>
                <TextInput type='email' id="email" placeholder="Digite o email" { ...register('email') } />

                <label htmlFor="">Data nascimento</label>
                <TextInput type="date" id="dataNascimento"  placeholder="Digite a data de nascimento" { ...register('dataNascimento') }/>

                <Button />

                </FormContainer>
            </form>

            <TableContainer>
               <Table  data={[
                {
                    id: 1,
                    nome: 'Hyuri',
                    email: "hyuri.miranda.cortes@gmail.com",
                    dataNascimento: '12/12/1989',
                }
               ]} />
            </TableContainer>
        </HomeContainer>
    )
}