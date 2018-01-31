import React from 'react';
import renderer from 'react-test-renderer';
import PostListRow from '../posts-screen/PostListRow';
import { Text } from 'react-native';
import { posts } from '../../../../jest/testData';

it('renders a post in PostListRow using Snapshots', () => {
  expect(renderer.create(
    <PostListRow post={posts[0]} />
  )).toMatchSnapshot();
});

