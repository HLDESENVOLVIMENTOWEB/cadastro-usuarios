import { ButtonContainer, ButtonVariant } from './button.styles';

interface ButtonProps {
    variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
    return <ButtonContainer type="submit" variant={variant}>Enviar</ButtonContainer>
}