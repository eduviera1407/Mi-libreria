import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

// Declaro la interface del componente.
export interface CustomTypographyProps extends TypographyProps {
    text: string;                   // Texto a mostrar
    txtcolor: string;               // Color del texto
    fontSize: string;               // Tamaño de fuente
    fontWeight?: string | number;   // Peso de la fuente (opcional)
    hoverTxtColor?: string;         // Color del texto al hacer hover (opcional)
    onClick?: React.MouseEventHandler<HTMLSpanElement>; // Función onClick (opcional)
}

// Defino mi componente MyTypography y le digo que las props son las que definí arriba
function MyTypography(props: CustomTypographyProps) {
    // Paso el valor de las props a un objeto:
    const { text, txtcolor, fontSize, fontWeight, hoverTxtColor, onClick, ...rest } = props;

    return (
        // Uso el Typography de la librería MUI y lo personalizo con las props que pasan a mi componente.
        <Typography
            sx={{
                color: txtcolor,
                fontSize: fontSize,
                fontWeight: fontWeight || 'normal',
                transition: 'color 0.3s', // Efecto de transición
                '&:hover': {
                    color: hoverTxtColor, // Color del texto al hacer hover
                },
            }}
            onClick={onClick} // Asigno el evento onClick
            {...rest} // Pasa otras props para mantener la flexibilidad
        >
            {text}
        </Typography>
    );
}

export default MyTypography;
