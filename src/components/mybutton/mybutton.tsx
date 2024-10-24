import  { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

// Declaro la interface del componente.
export interface CustomButtonProps {
    text: string;                 // Texto del botón
    txtcolor: string;             // Color del texto
    bgcolor: string;              // Color de fondo
    borderColor: string;          // Color del borde 
    borderWidth: string;          // Ancho del borde 
    size?: "small" | "medium" | "large";  // Tamaño del botón
    hoverTxtColor: string;        // Color del texto al hacer hover 
    hoverBgColor: string;         // Color de fondo al hacer hover 
    disabled?: boolean;            // Botón deshabilitado (opcional)
    onClick?: MouseEventHandler<HTMLButtonElement>;  // Función onClick (opcional)
}

// Defino mi componente Mybutton y le digo que las props son las que definí arriba
function MyButton(props: CustomButtonProps) {
    // Paso el valor de las props a un objeto:
    const { bgcolor, text, txtcolor, borderColor, borderWidth, disabled, onClick, size, hoverTxtColor, hoverBgColor } = props;

    return (
        // Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
        <Button
            type='button'
            onClick={onClick}
            disabled={disabled}
            size={size}
            sx={{
                backgroundColor: bgcolor,
                color: txtcolor,
                border: `${borderWidth} solid ${borderColor}`, // Aplicar color y ancho del borde
                transition: 'background-color 0.3s, color 0.3s', // Efecto de transición
                '&:hover': {
                    backgroundColor: hoverBgColor, // Color de fondo al hacer hover
                    color: hoverTxtColor, // Color del texto al hacer hover
                },
            }}
        >
            {text}
        </Button>
    );
}

export default MyButton;
