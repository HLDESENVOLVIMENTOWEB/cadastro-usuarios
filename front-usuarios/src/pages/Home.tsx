import { Table } from "../components/table/table";
import { HomeContainer, TableContainer } from "./usuario.styles";

import { useEffect, useState } from "react";
import { getPessoas } from "../services/usuarios";

interface FormProps {
    nome: string;
    email: string;
    dataNascimento: string;
}

export function Home() {
    const [pessoas, setPessoas] = useState<FormProps[]>([])

    async  function getAll(){
        const res = await getPessoas()
        console.log(res)
    } 

    useEffect(()=> {
        getAll()
    },[])

    return (
        <HomeContainer>

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