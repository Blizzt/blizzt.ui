import React from 'react';

import Avatar from './';
import sizeTypesId from "@types/sizes";

export default {
  title: 'Display/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      default: sizeTypesId.S,
      options: [sizeTypesId.S, sizeTypesId.M, sizeTypesId.L],
    },
    hash: {
      control: 'text'
    },
    image: {
      control: 'text',
    }
  },
};

const Template = (args) => <Avatar {...args} />;

// With Image
export const Image = Template.bind({});
Image.args = {
  hash: '',
  size: sizeTypesId.M,
  image: 'https://64.media.tumblr.com/1ca5ac368badaea331737f7856d844a8/tumblr_qdawidrDy61rpwm80o1_250.jpg'
}

// With Metamask
export const Metamask = Template.bind({});
Metamask.args = {
  hash: '0xc3B2CFa1684dd33e8Ea8F657122f42b288d32852',
  size: sizeTypesId.M,
  image: '',
}
