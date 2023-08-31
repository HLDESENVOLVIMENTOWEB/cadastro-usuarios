import { Button } from "../components/Button/button";
import { FormContainer, HomeContainer, TextInput } from "./usuario.styles";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';
import { getPessoasId, update } from "../services/usuarios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface FormProps {
    nome: string;
    email: string;
    dataNascimento: string;
}

export function UpdateUsers() {
     const {id} =useParams();
     const navigator = useNavigate()

    const newFormValidationSchema = zod.object({
        nome: zod.string().min(1, 'Nome obrigatório'),
        email: zod.string().min(1, 'Email é obrigatório'),
        dataNascimento: zod.string().min(1, 'Data de nascimento é obrigatório'),
    })

    const { register, handleSubmit, formState, setValue } = useForm<FormProps>({
        resolver: zodResolver(newFormValidationSchema),
        defaultValues: {
            dataNascimento: '',
            email: '',
            nome: ''
        }
    })

    async function getIds(){
      const res = await getPessoasId(String(id))
      setValue('nome', res?.nome);
      setValue('email', res?.email);
      setValue('dataNascimento', res?.dataNascimento);
      
    }

    useEffect(() => {
        getIds()
    }, [])


    function handleSubmitFiltro(data: FormProps) {
        update({
            dataNascimento: data.dataNascimento,
            email: data.email,
            nome: data.nome,
            id: '1'
        })
        navigator('/')
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleSubmitFiltro)} action="">
                <FormContainer>
                <label htmlFor="">Nome</label>
                <TextInput type="text" id="nome" placeholder="Digite o nome" { ...register('nome') } />

                <label htmlFor="">Email</label>
                <TextInput type='email' id="email"  placeholder="Digite o email" { ...register('email') } />

                <label htmlFor="">Data nascimento</label> 
                <TextInput type="date" id="dataNascimento"    placeholder="Digite a data de nascimento" { ...register('dataNascimento') }/>

                <Button title="update" />

                </FormContainer>
            </form>
        </HomeContainer>
    )
}