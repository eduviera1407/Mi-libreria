import { default as React } from 'react';
interface MyFavouriteProps {
    color: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const MyFavouriteBorder: React.FC<MyFavouriteProps>;
export default MyFavouriteBorder;
