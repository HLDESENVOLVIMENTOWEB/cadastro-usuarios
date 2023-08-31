import { instance } from './index'


type Usuarios = {
    id?: string;
    nome: string;
    email: string;
    dataNascimento: string;
};
  
  type GetUsuariosResponse = {
    data: Usuarios[];
  };

   async function getPessoas() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data } = await instance.get<GetUsuariosResponse>(
        'pessoas',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      return data;
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
  }

  async function getPessoasId(id: string) {
    try {
      // 👇️ const data: GetUsersResponse
      const { data } = await instance.get<GetUsuariosResponse>(
        'pessoa/'+id,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      return data;
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
  }


  
  async function deleteId(id: string) {
    try {
      // 👇️ const data: GetUsersResponse
      const { data } = await instance.delete<Usuarios>(
        'pessoa/'+id,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));

  
      return data;
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
  }

  async function create({nome, email, dataNascimento}:Usuarios) {
    try {
      // 👇️ const data: GetUsersResponse
      const { data } = await instance.post<Usuarios>(
        'pessoa',
         {
            nome,
            email,
            dataNascimento
          },
         {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      return data;
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
  }


  async function update({nome, email, dataNascimento, id}:Usuarios) {
    try {
      // 👇️ const data: GetUsersResponse
      const { data } = await instance.put<Usuarios>(
        'pessoa/'+ id,
        {
            nome,
            email,
            dataNascimento
        },
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      return data;
    } catch (error) {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
    }
  }

  export { getPessoas, getPessoasId, deleteId, create, update }