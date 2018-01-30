import React from 'react';
import renderer from 'react-test-renderer';
import ScreenView from '../ScreenView';
import { Text } from 'react-native';

it('renders a ScreenView using Snapshots', () => {
  expect(renderer.create(
    <ScreenView />
  )).toMatchSnapshot();
});

it('renders an ScreenView with children using Snapshots', () => {
  expect(renderer.create(
    <ScreenView>
      <Text>Test</Text>
    </ScreenView>
  )).toMatchSnapshot();
});
