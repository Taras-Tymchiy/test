import React from 'react';
import renderer from 'react-test-renderer';
import SettingsView from '../settings-screen/SettingsView';
import { posts } from '../../../../jest/testData';

jest.mock('../../molecules/FormControlWrapper', (props) => `FormControlWrapper ${props}`);

const props = {
  pullIntervl: 5000,
  postsCount: 10,
  postsUrl: 'test',
  intervalChanged: () => null,
  urlChanged: () => null,
  postsCountChanged: () => null
};

it('renders posts in a SettingsView using Snapshots', () => {
  expect(renderer.create(
    <SettingsView {...props} />
  )).toMatchSnapshot();
});
