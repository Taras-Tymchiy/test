import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { SettingsScreen } from '../settings-screen/SettingsScreen';
import SettingsView from '../settings-screen/SettingsView';
import { posts } from '../../../../jest/testData';

jest.mock('../../molecules/FormControlWrapper', (props) => `FormControlWrapper ${props}`);

const props = {
  pullInterval: 5000,
  postsCount: 10,
  postsUrl: 'test',
  actions: {
    updateInterval: jest.fn(),
    updateUrl: jest.fn(),
    updatePostsCount: jest.fn()
  }
};

it('calls actions on SettingsView callbacks', () => {
  const wrapper = shallow(
    <SettingsScreen {...props} />
  );
  const settingsView = wrapper.find(SettingsView).first();
  const callbacks = settingsView.props();

  const interval = 11, count = 33, url = 'changed';

  callbacks.intervalChanged(interval);
  callbacks.urlChanged(url);
  callbacks.postsCountChanged(count);

  expect(props.actions.updateInterval.mock.calls.length).toEqual(1);
  expect(props.actions.updateInterval.mock.calls[0]).toEqual([interval]);

  expect(props.actions.updateUrl.mock.calls.length).toEqual(1);
  expect(props.actions.updateUrl.mock.calls[0]).toEqual([url]);

  expect(props.actions.updatePostsCount.mock.calls.length).toEqual(1);
  expect(props.actions.updatePostsCount.mock.calls[0]).toEqual([count]);
});
