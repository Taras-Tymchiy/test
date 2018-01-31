import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedPostsScreen from '../posts-screen/PostsScreen';
import { posts } from '../../../../jest/testData';

const state = {
  posts: {
    data: [],
    dataLoaded: false,
    isPulling: false,
    isLoading: false,
    error: null
  },
  settings: {
    postsCount: 10,
    pullInterval: 5000,
    postsUrl: 'https://api.massrelevance.com/MassRelDemo/kindle.json'
  },
  navigation: {
    index: 0
  }
};
const mockStore = configureStore();

let store, container: ShallowWrapper;
beforeEach(()=> {
  store = mockStore(state)
  container = shallow(<ConnectedPostsScreen store={store} /> )  
});

it('renders ConnectedPostsScreen', () => {
  expect(container.length).toEqual(1);
});

it('maps state to ConnectedPostsScreen props', () => {
  const { posts, isPulling, isLoading, error, postsUrl, postsCount, pullInterval, isCurrentView} = container.props();
  expect(posts).toEqual(state.posts.data);
  expect(isPulling).toEqual(state.posts.isPulling);
  expect(isLoading).toEqual(state.posts.isLoading);
  expect(error).toEqual(state.posts.error);
  expect(postsUrl).toEqual(state.settings.postsUrl);
  expect(postsCount).toEqual(state.settings.postsCount);
  expect(pullInterval).toEqual(state.settings.pullInterval);
  expect(isCurrentView).toEqual(state.navigation.index === 0);
});

it('maps actions to ConnectedPostsScreen', () => {
  const { actions } = container.props();
  actions.startSync();
  actions.stopSync();
  const dispatched = store.getActions();
  expect(dispatched.length).toBe(2);
  expect(dispatched[0].type).toBe('POSTS_START_SYNC')
  expect(dispatched[1].type).toBe('POSTS_STOP_SYNC')
});