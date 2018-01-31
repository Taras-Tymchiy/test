import React from 'react';
import renderer from 'react-test-renderer';
import PostList from '../posts-screen/PostList';
import { Text } from 'react-native';
import { posts } from '../../../../jest/testData';

jest.mock('../posts-screen/PostListRow', (props) => `PostListRow ${props}`);

it('renders posts in a PostList using Snapshots', () => {
  expect(renderer.create(
    <PostList post={posts} />
  )).toMatchSnapshot();
});

