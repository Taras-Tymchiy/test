// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as postsActions from '../../../store/actions/PostActions';
import { type PostsState } from '../../../store/reducers/postsReducer';
import { Post } from '../../../entities/Post';
import PostList from './PostList';
import PostsHeaderButton from './PostsHeaderButton';
import { type RootState } from '../../../store/reducers/RootState';
import SpinnerHOC from '../../HOCs/SpinnerHOC';
import ErrorHOC from '../../HOCs/ErrorHOC';

export interface PostsScreenProps {
  +posts: Post[];
  +isLoading: boolean;
  +isPulling: boolean;
  +error: Error;
  +pullInterval: number;
  +postsCount: number;
  +postsUrl: string;
  +isCurrentView: boolean;
  +actions: typeof postsActions;
}

const PostsListsEnhanced = SpinnerHOC(ErrorHOC(PostList));

// exporting for testing purposes
export class PostsScreen extends Component<PostsScreenProps> {

  static navigationOptions = ({ navigation }) => ({
    headerRight: <PostsHeaderButton onPress={()=> navigation.navigate('Settings')} title="Settings" />,
  });

  render() {
    const { posts, isLoading, error } = this.props;
    return <PostsListsEnhanced posts={posts} spinner={isLoading && !posts.length} error={error} />
  }

  startPulling(props: PostsScreenProps) {
    const { actions, pullInterval, postsUrl, isPulling, postsCount } = props;
    if (!isPulling) {
      actions.startPullingPosts({url: postsUrl, count: postsCount}, pullInterval);
    }
  }
  
  stopPulling() {
    this.props.actions.stopPullingPosts();
  }

  componentWillUnmount() {
    this.stopPulling();
  }
  
  componentDidMount() {
    this.startPulling(this.props);
  }

  componentWillReceiveProps(nextProps: PostsScreenProps) {
    // navigation events will be implemented in react-navigation very soon
    // see the PR https://github.com/react-navigation/react-navigation/pull/3345
    // but for now will use some dirty tricks to determine whether current page is active
    if (nextProps.isCurrentView) {
      this.startPulling(nextProps);
    } else {
      this.stopPulling();
    }
  }

}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
      actions: bindActionCreators(postsActions, dispatch)
  };
}

function mapStateToProps(state: RootState) {
  return {
      posts: state.posts.data,
      isPulling: state.posts.isPulling,
      isLoading: state.posts.isLoading,
      error: state.posts.error,
      postsUrl: state.settings.postsUrl,
      postsCount: state.settings.postsCount,
      pullInterval: state.settings.pullInterval,
      isCurrentView: state.navigation.index === 0 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
