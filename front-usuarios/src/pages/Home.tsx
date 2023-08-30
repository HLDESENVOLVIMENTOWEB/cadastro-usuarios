import { Button } from "../components/Button/button";
import { Table } from "../components/table/table";
import { FormContainer, HomeContainer, TableContainer, TextInput } from "./usuario.styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                <label htmlFor="">Nome</label>
                <TextInput type="text" id="nome" placeholder="Digite o nome" />

                <label htmlFor="">Email</label>
                <TextInput type='email' id="email" placeholder="Digite o email" />

                <label htmlFor="">Data nascimento</label>
                <TextInput type="date" id="dataNascimento"  placeholder="Digite a data de nascimento"/>

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