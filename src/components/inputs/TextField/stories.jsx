import React from 'react';

import TextField from "./";

export default {
  title: 'Forms/inputs/TextInput',
  component: TextField,
  argTypes: {},
};

const Template = (args) => (
  <TextField {...args} />
);

// With Image
export const Email = Template.bind({});
Email.args = {
  type: 'email',
}
