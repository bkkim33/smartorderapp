import React from 'react';
import { Modal } from "../../components/Modal";

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
   
  },
};

export const Default = (args) => 
<>
  <Modal {...args}>
    {args.children}
  </Modal>
</>;