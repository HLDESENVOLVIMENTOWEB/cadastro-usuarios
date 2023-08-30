import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const ButtonVariant = {
    primary: 'puple',
    secondary: 'gray',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer  = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px; 
  
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
`;


/*
  ${props => {
    return `background-color: ${ButtonVariant[props.variant]}`
  } */

