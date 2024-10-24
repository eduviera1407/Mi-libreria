import { default as React } from 'react';
interface MyFavouriteProps {
    color: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare const MyFavourite: React.FC<MyFavouriteProps>;
export default MyFavourite;
