import React from 'react';

import Button from './';
import { buttonVariantsId } from '@types/inputs';

export default {
  title: 'Forms/inputs/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [buttonVariantsId.CONTAINED, buttonVariantsId.TEXT, buttonVariantsId.OUTLINED]
    },
    caption: {
      control: 'text'
    },
    isLoading: {
      control: 'boolean',
      default: false
    },
    disabled: {
      control: 'boolean',
      default: false
    }
  }
};

const Template = (args) => (
  <Button {...args} />
);

// With Image
export const Default = Template.bind({});
Default.args = {};
