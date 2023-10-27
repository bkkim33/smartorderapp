import React from "react";
import Select from "../../components/Select";

export default {
  title: "components/Lib/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const sector = [
  { value: "메가존.디지털", label: "메가존.디지털" },
  { value: "메가존클라우드", label: "메가존클라우드" },
  { value: "메가존소프트", label: "메가존소프트" },
  { value: "클라우드그램", label: "클라우드그램" },
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


export const AppDefault = () => (
  <div style={{ width: "100%", height: "250px" }}>
    {/* div는 영역을 넓히기 위해 스토리북에만 사용하는 태그입니다. 해당 태그를
    제외하고 사용하세요. */}
    <Select options={sector} round="app" placeholder="메가존.디지털"></Select>
  </div>
);