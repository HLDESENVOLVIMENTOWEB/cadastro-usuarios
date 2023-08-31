import { Table } from "../components/table/table";
import { HomeContainer, TableContainer } from "./usuario.styles";

import { useEffect, useState } from "react";
import { deleteId, getPessoas } from "../services/usuarios";
import { Button } from "../components/Button/button";
import { useNavigate } from "react-router-dom";

interface FormProps {
    nome: string;
    email: string;
    dataNascimento: string;
}

export function Home() {
    const navigator = useNavigate()
    const [pessoas, setPessoas] = useState<any>([])

    async  function getAll(){
        const res = await getPessoas()
        setPessoas(res)
    } 

    const handleCadastro = () => {
        navigator('/create')
    }
    

    const handleUpdate = (id: string) => {
        navigator('/update/'+ id)
    }

    const handleDeletar = (id: string) => {
        deleteId(id)
        navigator('/')
    }



    useEffect(()=> {
        getAll()
    },[])

    return (
        <HomeContainer>
            <Button  title="cadastar" click={handleCadastro} />
            <TableContainer>
               <Table  data={pessoas} handleUpdate={handleUpdate} handleDeletar={handleDeletar}/>
            </TableContainer>
        </HomeContainer>
    )
}