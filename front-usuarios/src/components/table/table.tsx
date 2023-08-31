import { Button } from "../Button/button";
import { StyledTable } from "./table.styles";

interface User {
    id: string;
    nome: string;
    email: string;
    dataNascimento: string;
}

interface DataProps {
    data: User[]
    handleUpdate: any;
    handleDeletar: any;
}

interface TableMarkupProps {
    titles: any,
    data: User[]
    handleUpdate: any;
    handleDeletar: any;
}

const titles = ['Id', 'Nome', 'E-mail', 'Data nascimento', 'deletar', 'editar'];

export function Table({ data, handleUpdate, handleDeletar }: DataProps) {
    return <TableMarkup titles={titles} data={data} handleUpdate={handleUpdate} handleDeletar={handleDeletar} />
}

const TableMarkup = ({ titles, data, handleUpdate, handleDeletar }: TableMarkupProps) => (
    <StyledTable>
      <thead>
        <tr>
          {titles.map((title: string, index: number) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
              <td key={index}>{item.id}</td>
              <td key={index}>{item.nome}</td>
              <td key={index}>{item.email}</td>
              <td key={index}>{item.nome}</td>
              <td  key={index}><Button click={()=>handleDeletar(item.id)} title="deletar"/></td>
              <td key={index}><Button click={()=>handleUpdate(item.id)} title="editar"/></td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );