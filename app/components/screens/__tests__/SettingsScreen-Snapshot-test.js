import React from 'react';
import renderer from 'react-test-renderer';
import { SettingsScreen } from '../settings-screen/SettingsScreen';
import { posts } from '../../../../jest/testData';

jest.mock('../settings-screen/SettingsView', (props) => `SettingsView ${props}`);

const props = {
  pullIntervl: 5000,
  postsCount: 10,
  postsUrl: 'test',
  actions: {
    updateInterval: () => null,
    updateUrl: () => null,
    updatePostsCount: () => null
  }
};

it('renders posts in a SettingsScreen using Snapshots', () => {
  expect(renderer.create(
    <SettingsScreen {...props} />
  )).toMatchSnapshot();
});
