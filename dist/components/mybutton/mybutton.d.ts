import { MouseEventHandler } from 'react';
export interface CustomButtonProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    borderColor: string;
    borderWidth: string;
    size?: "small" | "medium" | "large";
    hoverTxtColor: string;
    hoverBgColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyButton(props: CustomButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
