import React from 'react';

import Badge from "./";
import Avatar from "@components/display/Avatar";

export default {
  title: 'Display/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    min: {
      control: 'boolean',
    },
    count: {
      control: 'number',
    }
  },
};

const Template = (args) => (
  <Badge {...args}>
    <Avatar
      image={'https://64.media.tumblr.com/1ca5ac368badaea331737f7856d844a8/tumblr_qdawidrDy61rpwm80o1_250.jpg'}
    />
  </Badge>
);

// With Image
export const Image = Template.bind({});
Image.args = {
  backgroundColor: '#4D4BF8',
  textColor: '#fff',
  count: 1,
  min: true,
}
