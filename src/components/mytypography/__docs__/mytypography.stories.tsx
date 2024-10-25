import type { Meta, StoryObj } from "@storybook/react";
import MyTypography from "../mytypography"; 

const meta: Meta<typeof MyTypography> = {
    title: "Components/MyTypography", 
    component: MyTypography,
};

export default meta;

type Story = StoryObj<typeof MyTypography>;

// Historia 1: MyTypography en su estado predeterminado
export const Default: Story = {
    args: {
        text: "Texto de ejemplo",
        variant: "body", // Variante de texto
        color: "#000000", // Color predeterminado
        weight: "normal", // Peso de la fuente
        align: "left", // Alineación del texto
    },
};

// Historia 2: MyTypography personalizado
export const Custom: Story = {
    args: {
        text: "Título Personalizado",
        variant: "h1", // Variante de encabezado
        color: "#3498db", // Color personalizado
        weight: 700, // Peso de la fuente en negrita
        align: "center", // Texto centrado
    },
};
