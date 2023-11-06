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
      <tr>
        <th className="required">이렇게</th>
        <td>
            
        </td>
      </tr>
      <tr>
        <th>구성</th>
        <td></td>
      </tr>
      <tr>
        <th>합니다.</th>
        <td></td>
      </tr>
    </Table>
  </>
);