import { ButtonType } from "../_enums";

export interface Button {
    type?: ButtonType;
    children?: React.ReactNode;
    onClick?: () => void;
    sx?: object;
    small?: boolean;
    large?: boolean;
}
