import React from 'react';
import renderer from 'react-test-renderer';
import { PostsScreen } from '../posts-screen/PostsScreen';
import { posts } from '../../../../jest/testData';

jest.mock('../posts-screen/PostList', (props) => `PostList ${props}`);

const props = {
  posts,
  isLoading: false,
  syncInProgess: false,
  error: null,
  pullIntervl: 5000,
  postsCount: 10,
  postsUrl: 'test',
  isCurrentView: false,
  actions: {
    startSync: () => null,
    stopSync: () => null
  }
};

it('renders posts in a PostsScreen using Snapshots', () => {
  expect(renderer.create(
    <PostsScreen {...props} />
  )).toMatchSnapshot();
});
