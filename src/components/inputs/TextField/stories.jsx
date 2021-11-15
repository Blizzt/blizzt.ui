import React from 'react';

import TextField from "./";

export default {
  title: 'Inputs/TextField',
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
