import { ButtonContainer, ButtonVariant } from './button.styles';

interface ButtonProps {
    variant?: ButtonVariant;
    title?: string;
    click?: any;
}

export function Button({ variant = 'primary', title = 'clicar', click }: ButtonProps) {
    return <ButtonContainer type="submit" onClick={click} variant={variant}>{title}</ButtonContainer>
}