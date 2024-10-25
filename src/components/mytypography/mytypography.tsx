// mytypography.tsx
import React from 'react';

interface MyTypographyProps {
  text: string;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: string;
  weight?: number | 'normal' | 'bold';
  align?: 'left' | 'center' | 'right';
}

const MyTypography: React.FC<MyTypographyProps> = ({
  text,
  variant = 'body',
  color = '#000',
  weight = 'normal',
  align = 'left',
}) => {
  const style = {
    color,
    fontWeight: weight,
    textAlign: align as 'left' | 'center' | 'right',
  };

  const Tag = variant === 'body' ? 'p' : variant;

  return (
    <Tag className={`my-typography ${variant}`} style={style}>
      {text}
    </Tag>
  );
};

export default MyTypography;
