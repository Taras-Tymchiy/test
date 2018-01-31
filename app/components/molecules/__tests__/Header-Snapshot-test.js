import React from 'react';
import * as jest from 'jest';
import renderer from 'react-test-renderer';
import Header from '../Header';
import { View } from 'react-native';

const props: HeaderProps = {
    title: 'Test title',
    leftButtonTitle: 'Test left title',
    rightButtonTitle: 'Test right title',
    onLeftButtonPress: ()=> null,
    onRightButtonPress: ()=> null,
};

it('renders a Header using Snapshots', () => {
  expect(renderer.create(
    <Header {...props} />
  )).toMatchSnapshot();
});
