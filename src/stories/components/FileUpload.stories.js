import React from "react";
import FileUpload from "../../components/FileUpload";

export default {
  title: "components/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <FileUpload {...args}>{args.children}</FileUpload>
  </>
);