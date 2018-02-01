import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedSettingsScreen from '../settings-screen/SettingsScreen';
import { posts } from '../../../../jest/testData';

jest.mock('../settings-screen/SettingsView', (props) => `SettingsView ${props}`);

const state = {
  settings: {
    postsCount: 10,
    syncInterval: 5000,
    postsUrl: 'https://api.massrelevance.com/MassRelDemo/kindle.json'
  }
};
const mockStore = configureStore();

let store, container;
beforeEach(()=> {
  store = mockStore(state)
  container = shallow(<ConnectedSettingsScreen store={store} /> )  
});

it('renders ConnectedSettingsScreen', () => {
  expect(container.length).toEqual(1);
});

it('maps state to ConnectedSettingsScreen props', () => {
  const { postsUrl, postsCount, syncInterval} = container.props();
  expect(postsUrl).toEqual(state.settings.postsUrl);
  expect(postsCount).toEqual(state.settings.postsCount);
  expect(syncInterval).toEqual(state.settings.syncInterval);
});

it('maps actions to ConnectedSettingsScreen', () => {
  const { actions } = container.props();
  actions.updateInterval();
  actions.updateUrl();
  actions.updatePostsCount();

  const dispatched = store.getActions();
  expect(dispatched.length).toBe(3);
  expect(dispatched[0].type).toBe('SETTINGS_UPDATE_INTERVAL');
  expect(dispatched[1].type).toBe('SETTINGS_UPDATE_URL');
  expect(dispatched[2].type).toBe('SETTINGS_UPDATE_COUNT');
});