import React from "react";
import Select from "../../components/Select";

export default {
  title: "components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Default = (args) => (
  <div style={{ width: "100%", height: "250px" }}>
    {/* div는 영역을 넓히기 위해 스토리북에만 사용하는 태그입니다. 해당 태그를
    제외하고 사용하세요. */}
    <Select options={options} {...args}>
      {args.children}
    </Select>
  </div>
);

export const DefaultValue = () => (
  <div style={{ width: "100%", height: "250px" }}>
    {/* div는 영역을 넓히기 위해 스토리북에만 사용하는 태그입니다. 해당 태그를
    제외하고 사용하세요. */}
    <Select options={options} defaultValue={1}></Select>
  </div>
);

export const Multi = () => (
  <div style={{ width: "100%", height: "250px" }}>
    {/* div는 영역을 넓히기 위해 스토리북에만 사용하는 태그입니다. 해당 태그를
    제외하고 사용하세요. */}
    <Select options={options} multi></Select>
  </div>
);

