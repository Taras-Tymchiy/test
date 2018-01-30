import React from 'react';
import renderer from 'react-test-renderer';
import ListRow from '../ListRow';
import { Text } from 'react-native';

it('renders a ListRow using Snapshots', () => {
  expect(renderer.create(
    <ListRow />
  )).toMatchSnapshot();
});

it('renders an ListRow with children using Snapshots', () => {
  expect(renderer.create(
    <ListRow>
      <Text>Test</Text>
    </ListRow>
  )).toMatchSnapshot();
});
