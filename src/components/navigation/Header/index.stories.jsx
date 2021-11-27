// Dependencies
import React from 'react';

// Components
import Header from './';

export default {
  title: 'Navigation/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args) => <Header {...args} />;

// With Image
export const Stacking = Template.bind({});
Stacking.args = {

};
