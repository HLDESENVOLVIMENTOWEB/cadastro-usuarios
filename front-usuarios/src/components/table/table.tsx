import { StyledTable } from "./table.styles";

interface User {
    id: number;
    nome: string;
    email: string;
    dataNascimento: string;
}

interface DataProps {
    data: User[]
}

interface TableMarkupProps {
    titles: any,
    data: User[]
}

const titles = ['Id', 'Nome', 'E-mail', 'Data nascimento'];

export function Table({ data }: DataProps) {
    return <TableMarkup titles={titles} data={data} />
}

const TableMarkup = ({ titles, data }: TableMarkupProps) => (
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
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );