import React from 'react';
import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    inputVariant: { control: 'size' },
  },
};

const Template = (args) => <Input {...args} placeholder="Input" />;

export const InputXSmall = Template.bind({});
InputXSmall.args = {
  inputVariant: 'input-xs',
};

// export const InputXSmall = () => (
//   <Input inputVariant="input-xs" placeholder="Extra Small Input" />
// );

// export const InputSmall = () => (
//   <Input inputVariant="input-sm" placeholder="Small Input" />
// );

// export const InputMedium = () => (
//   <Input inputVariant="input-md" placeholder="Medium Input" />
// );

// export const InputLarge = () => (
//   <Input inputVariant="input-lg" placeholder="Large Input" />
// );

// export const InputXLarge = () => (
//   <Input inputVariant="input-xl" placeholder="Extra Large Input" />
// );
