import React from 'react';

import Typography from './';

export default {
  title: 'Display/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'body3'
      ]
    },
    style: {
      control: 'select',
      options: [
        'number'
      ]
    }
  }
};

const Template = (args) => (
  <Typography {...args}>
    {args.text}
  </Typography>
);

export const H1 = Template.bind({});
H1.args = {
  text: 'Example Title',
  variant: 'h1'
};

export const H2 = Template.bind({});
H2.args = {
  text: 'Example Title',
  variant: 'h2'
};

export const H3 = Template.bind({});
H3.args = {
  text: 'Example Title',
  variant: 'h3'
};

export const H4 = Template.bind({});
H4.args = {
  text: 'Example Title',
  variant: 'h4'
};

export const H5 = Template.bind({});
H5.args = {
  text: 'Example Title',
  variant: 'h5'
};

export const H6 = Template.bind({});
H6.args = {
  text: 'Example Title',
  variant: 'h6'
};

export const body1 = Template.bind({});
body1.args = {
  text: 'Example body text',
  variant: 'body1'
};

export const body2 = Template.bind({});
body2.args = {
  text: 'Example body text',
  variant: 'body2'
};

export const body3 = Template.bind({});
body3.args = {
  text: 'Example body text',
  variant: 'body3'
};

export const number = Template.bind({});
number.args = {
  text: 10000000,
  variant: 'body2',
  style: 'number'
};
