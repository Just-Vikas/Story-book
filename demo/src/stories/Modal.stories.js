// Modal.stories.js

import React, { useState } from "react";
import Modal from "./Modal";
import { within, userEvent } from '@storybook/testing-library';

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    setIsOpen: { action: 'setIsOpen' },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? <Modal {...args} setIsOpen={setIsOpen} /> : null;
};

export const Default = Template.bind({});
Default.args = {};

export const OpenModalWithPreFilledValues = Template.bind({});
OpenModalWithPreFilledValues.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const text1Input = canvas.getByLabelText('Text 1:');
  const text2Input = canvas.getByLabelText('Text 2:');
  const textareaInput = canvas.getByLabelText('Textarea:');

  await userEvent.type(text1Input, 'Sample Text 1');
  await userEvent.type(text2Input, 'Sample Text 2');
  await userEvent.type(textareaInput, 'Sample Textarea Content');
};
