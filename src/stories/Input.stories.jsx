import React from 'react';

import { Input } from './Input';

export default {
    title: 'Input',
    component: Input,
};

//here we create a template ofhouse args map to rendering

const Template = (args) => <Input {...args} />;

export const Search = Template.bind({});
Search.args = {

};