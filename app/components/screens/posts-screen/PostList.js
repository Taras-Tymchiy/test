// @flow
import * as React from 'react';
import { FlatList } from 'react-native';
import { Post } from '../../../entities/Post';
import PostListRow from './PostListRow';

interface PostListProps {
  posts: Post[];
}

const keyExtractor = (post: Post, index) => post.id_str;

export default ({ posts }: PostListProps) => 
  <FlatList
    data={posts}
    keyExtractor={keyExtractor}
    renderItem={({item}) => <PostListRow post={item} />}
  />;
