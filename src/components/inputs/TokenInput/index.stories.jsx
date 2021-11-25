// Dependencies
import React from 'react';

// Assets
import blizztLogo from '@assets/images/blizzt.logo.svg';

// Components
import TokenInput from './';

export default {
  title: 'Forms/inputs/TokenInput',
  component: TokenInput,
  argTypes: {}
};

const Template = (args) => (
  <TokenInput {...args} />
);

// With Image
export const Unique = Template.bind({});
Unique.args = {
  currency: {
    symbol: 'BLZT',
    image: blizztLogo,
    name: 'Blizzt'
  }
};
