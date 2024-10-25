import { default as React } from 'react';
interface MyTypographyProps {
    text: string;
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
    color?: string;
    weight?: number | 'normal' | 'bold';
    align?: 'left' | 'center' | 'right';
}
declare const MyTypography: React.FC<MyTypographyProps>;
export default MyTypography;
