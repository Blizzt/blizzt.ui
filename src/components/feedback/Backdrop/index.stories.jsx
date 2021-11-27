import React from 'react';

import Backdrop from './';

export default {
  title: 'Feedback/Backdrop',
  component: Backdrop,
  argTypes: {
    zIndex: {
      control: 'number'
    }
  }
};

const Template = (args) => (
  <>
    Outer text
    <Backdrop {...args}>
      Inner Text
    </Backdrop>
  </>
);

export const Default = Template.bind({});
Default.args = {
  zIndex: 10000
};
