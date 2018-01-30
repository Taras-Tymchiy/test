// @flow
import * as React from 'react';
import { FlatList } from 'react-native';
import { Post } from '../../../entities/Post';
import PostListRow from './PostListRow';

interface PostListProps {
  posts: Post[];
}

export default ({ posts }: PostListProps) => 
  <FlatList
    data={posts}
    keyExtractor={post => post.id}
    renderItem={({item}) => <PostListRow post={item} />}
  />;
