import React from "react";
import { Input } from "../../components/Input";

export default {
    title: "components/Input/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        
    },
};

export const Default = (args) => (
    <>
        <Input {...args}></Input>
    </>
);