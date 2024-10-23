import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface MyFavouriteProps {
    color: string; // Color del icono
    disabled?: boolean; // Botón deshabilitado (opcional)
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Función onClick (opcional)
}

const MyFavouriteBorder: React.FC<MyFavouriteProps> = ({ color = 'default', disabled = false, onClick }) => {
    return (
        <IconButton onClick={onClick} disabled={disabled}>
            <FavoriteBorderIcon sx={{ color }} />
        </IconButton>
    );
};

export default MyFavouriteBorder;
