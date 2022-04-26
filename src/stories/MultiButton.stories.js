// Button.stories.js|jsx

import React from 'react';

import { MultiButton } from './MultiButton';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'MultiButton',
  component: MultiButton,
};
export const Primary = () => <MultiButton backgroundColor="#ff0" label="Button" />;
export const Secondary = () => <MultiButton backgroundColor="#ff0" label="😄👍😍💯" />;
export const Tertiary = () => <MultiButton backgroundColor="#ff0" label="📚📕📈🤓" />;