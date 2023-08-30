import styles, { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    margin-bottom: 20px;

    input {
        margin-left: 10xp;
    }
    label {
        margin-left: 10px;
        margin-right: 10px;
    }

    button {
        margin-left: 10px;
        margin-right: 10px;
    }
  }
`

export const FormContainer = styled.main``

export const TableContainer = styled.main`
  width: 70%;
`

export const TextInput = styled.input`
    height: 2.5rem;
    border: 0cap;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
`