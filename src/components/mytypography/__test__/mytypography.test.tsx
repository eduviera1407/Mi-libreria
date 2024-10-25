import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyTypography from '../mytypography';

describe('MyTypography component', () => {
    it('debería renderizar el texto correctamente en el DOM', () => {
        render(<MyTypography text="Texto de prueba" variant="body" />);
        const textElement = screen.getByText("Texto de prueba");
        expect(textElement).toBeInTheDocument();
    });

    it('debería aplicar la variante correcta', () => {
        render(<MyTypography text="Encabezado de prueba" variant="h1" />);
        const headingElement = screen.getByText("Encabezado de prueba");
        expect(headingElement.tagName).toBe("H1");
    });

    it('debería aplicar el color y peso de fuente correctos', () => {
        render(<MyTypography text="Texto estilizado" color="#3498db" weight={700} />);
        const styledElement = screen.getByText("Texto estilizado");
        expect(styledElement).toHaveStyle({ color: '#3498db', fontWeight: '700' });
    });
});
