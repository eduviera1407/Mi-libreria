import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyFavourite from './myfavourite';

describe('MyFavourite component', () => {
    it('debería renderizar correctamente en el DOM', () => {
        render(<MyFavourite color="red" />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
