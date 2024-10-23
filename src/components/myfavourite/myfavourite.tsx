import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface MyFavouriteProps {
    color: string; // Color del icono
    disabled?: boolean; // Botón deshabilitado (opcional)
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Función onClick (opcional)
}

const MyFavourite: React.FC<MyFavouriteProps> = ({ color = 'default', disabled = false, onClick }) => {
    return (
        <IconButton onClick={onClick} disabled={disabled}>
            <FavoriteIcon sx={{ color }} />
        </IconButton>
    );
};

export default MyFavourite;
