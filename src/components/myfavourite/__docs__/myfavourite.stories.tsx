import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example"; 

const meta: Meta<typeof Example> = {
    title: "MyFavourite", 
    component: Example, 
};

export default meta;

type Story = StoryObj<typeof Example>;

// Historia 1: MyFavourite en estado predeterminado
export const Default: Story = {
    args: {
        color: "red", // Color del icono
        onClick: () => alert("¡Favorito añadido!"), 
    },
};


export const Disabled: Story = {
    args: {
        color: "blue", // Color del icono
        disabled: true, // Estado deshabilitado
        onClick: () => alert("¡Favorito añadido!"), // Función onClick (no se ejecutará porque el botón está deshabilitado)
    },
};
