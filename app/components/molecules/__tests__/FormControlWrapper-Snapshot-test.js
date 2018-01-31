import React from 'react';
import * as jest from 'jest';
import renderer from 'react-test-renderer';
import FormControlWrapper from '../FormControlWrapper';
import { View } from 'react-native';

jest.mock('../../../assets/ios7-arrow-right.png', ()=>({ uri: 'ios7-arrow-right.png'}));
jest.mock('../Header', (...props)=> `Header: ${props}`);

const props: FormControlWrapperProps = {
    value: 'testValue',
    title: 'Test title',
    description: 'test description'
};

it('renders a FormControlWrapper using Snapshots', () => {
  expect(renderer.create(
    <FormControlWrapper {...props} />
  )).toMatchSnapshot();
});
