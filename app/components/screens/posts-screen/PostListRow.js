// @flow
import * as React from 'react';
import { View } from 'react-native';
import { Post } from '../../../entities/Post';
import FormattedDate from '../../atoms/FormattedDate';
import ListRow from '../../atoms/ListRow';
import { TextPrimary, TextSecondary, TextRegular } from '../../atoms/Text';
import styles from './PostListRow.styles';

interface PostListRowProps {
    post: Post;
}

export default function PostListRow({post}: PostListRowProps) {
  const { id, created_at, user, text } = post;
  return (
    <ListRow>
      <View style={styles.header}> 
        <TextPrimary>{user.name}</TextPrimary>
        <TextSecondary>
          <FormattedDate value={created_at} />
        </TextSecondary>
      </View>
      <TextRegular>{text}</TextRegular>
    </ListRow>
  );
};
