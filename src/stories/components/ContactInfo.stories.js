import React from "react";
import ContactInfo from "../../components/ContactInfo";

export default {
  title: "components/ContactInfo",
  component: ContactInfo,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <ContactInfo {...args}>{args.children}</ContactInfo>
  </>
);


