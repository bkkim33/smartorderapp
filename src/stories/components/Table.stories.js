import React from "react";
import Table from "../../components/Table";

export default {
    title: "components/Table",
    component: Table,
    tags: ["autodocs"],
    argTypes: {
        children: { control : "text" },
    },
};

export const Default = (args) => (
    <>
        <Table 
            colgroup={
                <>
                    <col width={'20%'} />
                    <col />
                </>
            } 
            {...args}
        >
            {args.children}
        </Table>
    </>
);